<template>
    <div id="bookdetails">
        <div id="drawer" v-if="$store.getters.showDetailsPage">
            <div id="content">
                <button @click="closeDetailsPage">Close drawer</button>
                
                <img v-bind:src="$store.getters.selectedBookDetails.coverPath">
                <h4>{{ $store.getters.selectedBookDetails.title }}</h4>
                <h5>{{ $store.getters.selectedBookDetails.isbn }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bookdetails',
    methods: {
        closeDetailsPage() {
            this.$store.commit("closeBookDetailsPage")
        },
    }
}
</script>

<style scoped>
#drawer {
  display: block;
  min-height: 100%;
  background-color: #2c2c2c;
  position: fixed;
  z-index: 1;
  top: 0;
  /* overflow-x: hidden; */
  padding-top: 60px;
  color: #ffffff;
}
</style>