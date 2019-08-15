<template>
    <div id="product-content" v-on:click="getPostsData()">
        <div class="top-text">Ром Captain Morgan, 0.5</div>
        <div class="img-content swiper-lazy">
            <img src="../assets/products/1.png" width="40" height="120">
        </div>
        <div class="bottom">
            <div class="bottom-text">225 грн</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product"
    }
</script>

// TODO border radius on top bottom ?

<style scoped>
    #product-content {
        /*display: inline-block;*/
        border-radius: 5px;
        width: 100%;
        /*margin-left: 10px;*/
        /*margin-right: 10px;*/
        background-color: white;
        cursor: pointer;
    }

    #product-content:hover {
        /*transform: translateY(-5px);*/

        /*-webkit-transition-duration: 0.5s;*/
        /*transition-duration: 0.5s;*/
    }

    .top-text {
        color: black;
        font-size: 12px;
        font-weight: bold;
        padding-bottom: 5px;
        padding-top: 10px;
    }

    .img-content {
        /*max-width: 100%;*/
        /*height: 170px;*/
        /*background-image: url(../assets/products/1.png);*/
        /*background-position: 50% 0px;*/
        /*background-size: 100px;*/
    }

    .bottom {
        display: flex;
        margin-top: 10px;
        background-color: #1f1c3a;
        height: 30px;
        border-radius: 0 0 4px 4px;
    }

    .bottom-text {
        color: white;
        display: flex;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        margin: 0  auto;
    }
</style>