<template>
    <!-- Consider v-if to hide or show components -->
    <div id="book">
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-2">
                    <img v-bind:src="coverPath" class="card-img-top">
                </div>
                <div class="col-md-8">
                    <div class="card-title">
                        <h5>{{ title }}</h5>
                    </div>
                </div>
                <div class="col-md-1">
                    <div class="card-body">
                    <button>^</button>
                    <button @click="removeFromUserList" id="remove" class="btn btn-danger">-</button>
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
        id: String,
        title: String,
        coverPath: String,
    },
    // removes book item from list after pressing
    methods: {
        removeFromUserList: function () {
            this.$store.commit("removeBookFromUserList", this.id)
        }
    }
}
</script>

<style scoped>

</style>