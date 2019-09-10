<template>
    <div id="bookList">
        <h2>Your Book List</h2>
            <Book 
                v-for="book in savedBooks"
                v-bind:key="book.isbn"
                v-bind:isbn="book.isbn"
                v-bind:title="book.title"
                v-bind:coverPath="book.coverPath">
            </Book>
            <button id="ascending" @click="sortAlphabeticallyAscending" class="btn btn-primary">Sort Alphabetically Ascending</button>
            <button @click="sortAlphabeticallyDescending" class="btn btn-primary">Sort Alphabetically Descending</button>
        </div>
</template>

<script>
import Book from './Book.vue'

export default {
    name: 'BookList',
    components: {
        Book
    },
    data () {
        return {
            savedBooks: this.$store.getters.books
        }
    },
    methods: {
        sortAlphabeticallyAscending() {
            this.$store.commit("sortBooksAlphabeticallyAscending")
        },

        sortAlphabeticallyDescending() {
            this.$store.commit("sortBooksAlphabeticallyDescending")
        }
    }
}
</script>