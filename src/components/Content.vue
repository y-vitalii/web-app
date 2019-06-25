<template>
    <div id="main-content">
        <Select />
    </div>
</template>

<script>
    import Select from './Select'

    export default {
        name: "Content",
        components: {Select}
    }
</script>

<style scoped>
    #main-content {
        background-color: #404040;
        height: 700px;
    }
</style>