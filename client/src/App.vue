<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Search heading="Search Books"/>
    <BookList heading="This is the book list header"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BookList from './components/book-list/BookList.vue'
import Search from './components/search-books/Search.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
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
</style>
