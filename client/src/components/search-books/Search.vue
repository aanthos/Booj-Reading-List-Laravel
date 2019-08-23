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
import { API_BASE_URL, OPEN_LIBRARY_API_URL, OPEN_LIBRARY_FORMAT_JSON_TAG } from '../../config'

/**
 * new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
})
 */



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
            loading: true,
            errored: false,
        }
    },
    // TODO: access open library api here
    mounted () {
        axios
            .get(OPEN_LIBRARY_API_URL + 'ISBN:0451526538' + '&jscmd=data' + OPEN_LIBRARY_FORMAT_JSON_TAG)
            .then(response => {
                this.title = response.data["ISBN:0451526538"].title;
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>