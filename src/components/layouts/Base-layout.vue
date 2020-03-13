<template>
    <div>
        <Header v-bind:showBarket='true'/>
        <Content />
        <Bottom />
        <BottomText />
    </div>
</template>

<script>
    import Header from '../Header.vue'
    import Content from '../Content.vue'
    import Bottom from '../Bottom.vue'
    import BottomText from "../BottomText";

    export default {
        name: "Base-layout",
        components: {
            BottomText,
            Header,
            Content,
            Bottom
        }
    }
</script>

<style scoped>

</style>