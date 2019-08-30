<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
    <div class="row">
      <div class="col-md-7">
        <Search/>
      </div>
      <div class="col-md-5">
        <BookList/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import BookList from './components/book-list/BookList.vue'
import Search from './components/search-books/Search.vue'

export default {
  name: 'app',
  components: {
    Search,
    BookList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 1140px;
  margin: auto;
}
</style>
