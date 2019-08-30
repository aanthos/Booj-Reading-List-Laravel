<template>
    <div id="bookList">
        <Book 
            v-for="book in $store.getters.books"
            v-bind:key="book.id"
            v-bind:title="book.title"
            v-bind:coverPath="book.coverPath"
        />
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