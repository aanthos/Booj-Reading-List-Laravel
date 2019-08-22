<template>
    <div id="bookList">
        <h1>{{ heading }}</h1>
        <Book title="Test Name"/>
    </div>
</template>

<script>
import Book from './Book.vue'

export default {
    name: 'BookList',
    components: {
        Book
    },
    props: {
        heading: String
    }
    
}
</script>