<template>
    <div id="addbook">
        <h2>Add Book section</h2>
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-3">
                    <img v-bind:src="coverPath" class="card-img-top">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title">{{ title }}</h5>
                        <button @click="addToUserList" type="button" class="btn btn-primary">+</button>
                    </div>
                </div>
            </div>
        </div>
        <p v-if="error">{{ title }} (ISBN: {{ isbn }}) is already in your book list.</p>
    </div>
</template>

<script>
export default {
    name: 'addbook',
    props: { 
        isbn: String,
        title: String,
        coverPath: String,
    },

    data () {
        return {
            error: false,
        }
    },

    methods: {
        /**
         * Adds book to Vuex data store in books module if not already in user's book list
         */
        addToUserList() {
            var potentialBook = [this.isbn, this.title, this.coverPath]
            var found = false

            for( var i = 0; i < this.$store.getters.books.length; i++) {
                if(this.$store.getters.books[i].isbn == this.isbn) {
                    found = true
                    break
                }
            }

            if(!found) {
                this.$store.commit("pushBookToUserList", potentialBook)
                this.error = false
            }
            else {
                this.error = true
            }
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