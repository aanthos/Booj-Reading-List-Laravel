<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand">Reading List</a>
      </nav>
    </header>
    <div class="header">
      <h1 id="heading">Reading List</h1>
      <p id="lead">Search the Open Library database to find books and add them to your book list.</p>
    </div>
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
    <div id="drawer">
      <BookDetails/>
    </div>
  </div>
</template>

<script>
import BookList from './components/book-list/BookList.vue'
import Search from './components/search-books/Search.vue'
import BookDetails from './components/book-details/BookDetails.vue'

export default {
  name: 'app',
  components: {
    Search,
    BookList,
    BookDetails
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
}

.container {
  max-width: 1140px;
  margin: auto;
}

#drawer {
  display: flex;
  min-height: 100%;
  background-color: green;
}

.header {
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
}

#heading {
  font-weight: 300;
}

#lead {
  color: #6c757d;
  font-size: 1.2em;
  font-weight: 300;
}
</style>
