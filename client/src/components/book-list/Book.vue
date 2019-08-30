<template>
    <!-- Consider v-if to hide or show components -->
    <div id="book">
        <div class="card">
            <div class="row">
                <div class="col-md-2">
                    <img v-bind:src="coverPath" class="card-img-top">
                </div>
                <div class="col-md-10">
                    <h5>{{ title }}</h5>
                </div>
            </div>
        </div>
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