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
                :id="id" 
                :title="title" 
                :coverPath="coverPath">
            </AddBook>
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
            this.title = ""
            var searchParameters = this.searchType + ":" + this.searchInput
            axios
                .get(OPEN_LIBRARY_API_URL + this.searchType + ":" + this.searchInput + '&jscmd=data' + OPEN_LIBRARY_FORMAT_JSON_TAG)
                .then(response => {
                    this.title = response.data[this.searchType + ":" + this.searchInput].title;
                    this.coverPath = response.data[searchParameters].cover.medium;
                    this.id++
                })
                .catch(error => {
                    //console.log(error)
                    this.error = error,
                    this.errored = true
                })
                .finally(() => {
                    if(this.title == "" || this.title == null) {
                        this.title = "No results found. Please check your " + this.searchType + " code again."
                        this.loaded = false
                    }
                    else { 
                        this.loaded = true
                    }
                })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>