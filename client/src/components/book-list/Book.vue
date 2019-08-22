<template>
    <!-- Consider v-if to hide or show components -->
    <div id="Book">
        <h1>{{ title }}</h1>
        <img src="https://robertnielsen21.files.wordpress.com/2017/03/tloll.jpg"/>
        <p>Description</p>
    </div>
</template>

<script>
export default {
    name: 'Book',
    props: {
        title: String,
        coverPath: String,
        description: String
    },
    // removes book item from list after pressing
    methods: {
        onRemoveButton: function () {

        }
    }
}
</script>