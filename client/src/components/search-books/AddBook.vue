<template>
    <div id="addbook">
        <h1>Add Book section</h1>
        <p>Title goes here: {{ title }}</p>
        <button>Add Button</button>
    </div>
</template>

<script>
export default {
    name: 'addbook',
    props: { 
        title: String,
    },
    data () { 
        return {
            heading: ''
        }
    },
}
</script>

<style>

</style>