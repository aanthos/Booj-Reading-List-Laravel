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
                        <button type="button" class="btn btn-primary">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addbook',
    props: { 
        title: String,
        coverPath: String,
        //authors: String,
    },
    data () { 
        return {
            heading: ''
        }
    },
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