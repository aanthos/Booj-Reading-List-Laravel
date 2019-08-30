<template>
    <div id="addbook">
        <h1>Add Book section</h1>
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-5">
                    <img v-bind:src="coverPath" class="card-img-top">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title">{{ title }}</h5>
                        <!-- <p class="card-text">{{ description }}</p> -->
                        <button @click="addToUserList" type="button" class="btn btn-primary">+</button>
                    </div>
                </div>
            </div>
        </div>
        <p>Currently in books data store: {{ $store.getters.books }}</p>
    </div>
</template>

<script>
export default {
    name: 'addbook',
    props: { 
        id: Number,
        title: String,
        coverPath: String,
    },

    methods: {
        /**
         * Adds book to Vuex data store in books module
         */
        addToUserList() {
            var book = [this.id, this.title, this.coverPath]
            this.$store.commit("pushBookToUserList", book)
        }
    }
}
</script>

<style scoped>
.card {
    max-width: 500px;
    margin: auto;
    height: 50%;
}

.card-img-top {
    padding: 5px;
    object-fit: cover;
}
</style>