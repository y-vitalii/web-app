<template>
    <div>
        <Header />
        <router-view></router-view>
        <Bottom />
    </div>
</template>

<script>
    import Header from '../Header.vue'
    import Content from '../Content.vue'
    import Bottom from '../Bottom.vue'

    export default {
        name: "Base-layout",
        components: {
            Header,
            Content,
            Bottom
        }
    }
</script>

<style scoped>

</style>