<template>
    <div id="product-content" v-on:click="getPostsData()">
        <div class="top-text">Item</div>
        <div class="img-content"></div>
        <div class="bottom" >
            <div class="bottom-text">Text</div>
        </div>
    </div>
</template>

<script>
    import api from '../api';

    export default {
        name: "Product",
        data: function () {
            return {
                loading: false,
                posts: null
            }
        },
        mounted: function () {
            return {

            }
        },
        methods: {
            async getPostsData () {
                this.loading = true;
                this.posts = await api.getPosts();
                this.loading = false;
            },
        }
    }
</script>

// TODO border radius on top bottom ?

<style scoped>
    #product-content {
        display: inline-block;
        border-radius: 5px;
        /*height: 100%;*/
        /*width: 150px;*/
        margin-left: 10px;
        margin-right: 10px;
        /*overflow: hidden;*/
        background-color: white;
        cursor: pointer;
    }

    #product-content:hover {
        transform: translateY(-5px);

        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
    }

    .top-text {
        /*font-family: Arial;*/
        color: black;
        font-weight: bold;
    }

    .img-content {
        width: 100px;
        height: 170px;
        background-image: url(../assets/products/item1.png);
        background-position: 50% 0px;
        background-size: 100px;
    }

    .bottom {
        border-radius: 5px;
        background-color: white;
        height: 20px;
    }

    .bottom-text {
        color: black;
    }
</style>