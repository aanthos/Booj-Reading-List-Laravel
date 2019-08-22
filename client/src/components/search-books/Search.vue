<template>
    <div id="search">
        <h1>{{ heading }}</h1>
        <form>
            Search for your book:
            <input type="text">
            <input type="submit">
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { API_BASE_URL } from '../config'


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

        }
    },
    mounted () {
        axios
            .get(API_BASE_URL + '/books')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>