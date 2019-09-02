<template>
    <div id="bookList">
        <h2>Your Book List</h2>
            <Book 
                v-for="book in $store.getters.books"
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
}
</script>