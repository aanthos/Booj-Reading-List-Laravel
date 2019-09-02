<template>
    <div id="search">
        <h4>Search for a book</h4>
            <!-- 
                v-model is a directive that creates two-way data bindings on form elements.
                Read more here: https://vuejs.org/v2/guide/forms.html
            -->
            <form @submit.prevent="onSubmit()">
                Search for your book:
                <input type="text" v-model.trim="searchInput"><br>
                <input type ="radio" name="ISBN" value="ISBN" v-model="searchType"> ISBN<br>
                <button type="submit" value="Submit" class="btn btn-primary">Search Book</button>
            </form>

            <AddBook 
                v-if="loaded"
                v-bind:key="isbn"
                :isbn="isbn"
                :title="title" 
                :coverPath="coverPath">
            </AddBook>

            <p v-if="errored">Could not find book. Please try again.</p>
    </div>
</template>

<script>
import axios from 'axios'
import AddBook from './AddBook.vue'
import { OPEN_LIBRARY_API_URL, OPEN_LIBRARY_FORMAT_JSON_TAG } from '../../config'

/**
 *  Check https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
 *  for examples on how to use axios
 */
export default {
    name: 'search',
    components: {
        AddBook
    },
    data () {
        return {
            id: 0,
            isbn: '',
            title: '',
            coverPath: null,
            searchInput: '',
            searchType: 'ISBN',
            loaded: false,
            errored: false,
            error: ''
        }
    },
    methods: {
        onSubmit() {
            var searchParameters = this.searchType + ":" + this.searchInput
            axios
                .get(OPEN_LIBRARY_API_URL + this.searchType + ":" + this.searchInput + '&jscmd=data' + OPEN_LIBRARY_FORMAT_JSON_TAG)
                .then(response => {
                    this.isbn = response.data[searchParameters].identifiers.isbn_13[0]
                    this.title = response.data[searchParameters].title;
                    this.coverPath = response.data[searchParameters].cover.medium;
                    this.loaded = true
                    this.id += 1
                    this.errored = false
                })
                .catch(error => {
                    //console.log(error)
                    this.error = error,
                    this.errored = true,
                    this.title = "No results found. Please check your code"
                    this.loaded = false
                })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>