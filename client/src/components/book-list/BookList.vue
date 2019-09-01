<template>
    <div id="bookList">
        <h2>Your Book List</h2>
            <Book 
                v-for="(book, index) in $store.getters.books"
                v-bind:key="`${book.title}-${index}`"
                v-bind:id="`${book.title}-${index}`"
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