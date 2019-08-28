<template>
    <div id="search">
        <h1>{{ heading }}</h1>
        <!-- 
            v-model is a directive that creates two-way data bindings on form elements.
            Read more here: https://vuejs.org/v2/guide/forms.html
        -->
        <form @submit.prevent="onSubmit()">
            Search for your book:
            <input type="text" v-model.trim="searchInput"><br>
            <input type ="radio" name="ISBN" value="ISBN" v-model="searchType"> ISBN<br>
            <input type="submit" value="Submit">
        </form>

        <p>Test Title Here: {{ title }}</p>

        <p>Test search input here: {{ searchInput }}</p>

        <AddBook v-if="loaded" :title="title" :coverPath="coverPath" :description="description"></AddBook>
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
    props: {
        heading: String
    },
    data () {
        return {
            title: '',
            coverPath: null,
            description: null,
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
                    //this.description = response.data[searchParameters].subtitle;
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