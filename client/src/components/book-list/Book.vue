<template>
    <!-- Consider v-if to hide or show components -->
    <div id="book">
        <h1>{{ title }}</h1>
        <img v-bind:src="coverPath" class="card-img-top">
    </div>
</template>

<script>
export default {
    name: 'Book',
    props: {
        title: String,
        coverPath: String,
    },
    // removes book item from list after pressing
    methods: {
        onRemoveButton: function () {

        }
    }
}
</script>