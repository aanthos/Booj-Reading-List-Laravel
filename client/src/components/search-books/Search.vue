<template>
    <div id="search">
        <h1>{{ heading }}</h1>
        <!-- 
            v-model is a directive that creates two-way data bindings on form elements.
            Read more here: https://vuejs.org/v2/guide/forms.html
        -->
        <form @submit.prevent="onSubmit">
            Search for your book:
            <input type="text" v-model.trim="searchInput"> <br>
            <input type ="radio" name="ISBN" value="ISBN" v-model="searchType"> ISBN<br>
            <input type="submit">Submit<br>
        </form>
        <p>Test Title Here: {{ title }}</p>
        <p>Test search input here: {{ searchInput }}</p>
    </div>
</template>

<script>
import axios from 'axios'
import { OPEN_LIBRARY_API_URL, OPEN_LIBRARY_FORMAT_JSON_TAG } from '../../config'

/**
 *  Check https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
 *  for examples on how to use axios
 */
export default {
    name: 'search',
    props: {
        heading: String
    },
    data () {
        return {
            title: null,
            coverPath: null,
            description: null,
            searchInput: '',
            searchType: '',
            loading: true,
            errored: false,
        }
    },
    // TODO: access open library api here
    // mounted () {
    //     axios
    //         .get(OPEN_LIBRARY_API_URL + 'ISBN:0451526538' + '&jscmd=data' + OPEN_LIBRARY_FORMAT_JSON_TAG)
    //         .then(response => {
    //             this.title = response.data["ISBN:0451526538"].title;
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             this.errored = true
    //         })
    //         .finally(() => this.loading = false)
    // },
    methods: {
        onSubmit() {
            // TODO: If value returned is not actual book name, tell user nothing was returned/invalid search/no results found
            this.title == ""

            axios
                .get(OPEN_LIBRARY_API_URL + this.searchType + ":" + this.searchInput + '&jscmd=data' + OPEN_LIBRARY_FORMAT_JSON_TAG)
                .then(response => {
                    this.title = response.data[this.searchType + ":" + this.searchInput].title;
                })
                // .catch(error => {
                //     console.log(error)
                //     this.errored = true
                // })
                .finally(() => { 
                    this.loading = false
                })

            if(this.title == "" || this.title == null) {
                this.title = "No results found. Please check your " + searchType + " code again."
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>