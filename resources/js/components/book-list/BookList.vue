<template>
    <div id="bookList">
        <h3>Your Book List</h3>
        <p id="sortOptions">Sort by: Name
            <button 
                @click="sortAlphabeticallyAscending" 
                class="btn btn-link btn-sm">
                <v-icon name="chevron-up"/>
            </button>
            <button 
                @click="sortAlphabeticallyDescending" 
                class="btn btn-link btn-sm">
                <v-icon name="chevron-down"/>
            </button>
        </p>

        <Book 
            v-for="book in savedBooks"
            v-bind:key="book.isbn"
            v-bind:isbn="book.isbn"
            v-bind:title="book.title"
            v-bind:coverPath="book.coverPath">
        </Book>
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

<style scoped>
#sortOptions {
    color: #6c757d;
    margin-bottom: 0;
}
</style>