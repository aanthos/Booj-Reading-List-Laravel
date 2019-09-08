<template>
    <div id="book">
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-2">
                    <img v-bind:src="coverPath" class="card-img-top">
                </div>
                <div class="col-md-8">
                    <div class="card-title">
                        <h5>{{ title }}</h5>
                        <button @click="selectForDetails">Display Details</button>
                    </div>
                </div>
                <div class="col-md-1">
                    <div class="card-body">
                    <button @click="shiftUp" class="btn btn-primary">^</button>
                    <button @click="removeFromUserList" id="remove" class="btn btn-danger">-</button>
                    <button @click="shiftDown" class="btn btn-primary">v</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Book',
    props: {
        isbn: String,
        title: String,
        coverPath: String,
    },

    methods: {
        // removes book item from list after pressing using Vuex books module
        removeFromUserList() {
            this.$store.commit("removeBookFromUserList", this.isbn)
        },
        // shifts book item up in the list using Vuex books module
        shiftUp() {
            this.$store.commit("shiftBookUp", this.isbn)
        },
        // shifts book item down in the list using Vuex books module
        shiftDown() {
            this.$store.commit("shiftBookDown", this.isbn)
        },
        // selects this book item in Vuex books module to hold this book data for BookDetails.vue
        selectForDetails() {
            this.$store.commit("selectBookForDetails", this.isbn)
        }
    }
}
</script>

<style scoped>

</style>