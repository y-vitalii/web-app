<template>
    <div id="header-content">
        <div>
            <div id="header-text">Site Name</div>
        </div>
        <Promo />
    </div>
</template>

<script>
    import Promo from './Promo'

    export default {
        name: "Header",
        components: {Promo}
    }
</script>

<style scoped>
    #header-content {
        display: inline-block;
        text-align: center;
        width: 100%;
        height: 100%;
    }
    #header-content div:first-child {
        display: inline-block;
        background-color: #080808;
        height: 70px;
        width: 100%;
        /*border: 1px solid white;*/
        text-align: center;
    }
    #header-text {
        color: white;
        padding-top: 17px;
        /*position: fixed;*/
        top: 50%;
        cursor: pointer;
        margin: 0 auto;
        text-transform: uppercase;
        font-family: cursive;
        font-weight: bold;
        font-size: 25px;
    }
</style>