<template>
    <div id="header-content">
        <div class="header">
            <router-link to="/" class="header-logo" tag="div">
                <img src="../assets/top_logo.png"  width="160" height="160">
            </router-link>
            <router-link class="barket" to="/cart" tag="div">
                <img src="../assets/shopping_cart.png"  width="40" height="40">
                <span v-if="totalQuantity" class="dot"></span>
            </router-link>
            <div v-if="totalQuantity" class="cart-count">{{totalQuantity}}</div>
        </div>
        <Promo />
    </div>
</template>

<script>
    import Promo from './Promo'
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "Header",
        components: {Promo},
        computed: mapState({
            ...mapGetters('cart', {
                totalQuantity: 'getTotalQuantity'
            })
        })
    }
</script>

<style scoped>
    #header-content {

    }

    a {
        color: #f5f5f5;
    }

    .header {
        background-color: #1E1E1E;
        text-align: center;
        height: 55px;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 200;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
    }

    .header-logo {
        display: flex;
        width: 50%;
        align-items: center;
        justify-content: center;
        /*cursor: pointer;*/
        /*position: absolute;*/
        /*left: 150px;*/
        /*top: -33px;*/
    }

    /*.header-logo img {*/
    /*    padding-top: -100px;*/
    /*}*/

    .barket {
        display: flex;
        width: 50%;
        align-items: center;
        justify-content: center;
        /*width: 50%;*/
        /*display: inline-block;*/
        /*background-image: url(../assets/16757-200.png);*/
        /*filter: invert(100%);*/
        /*position: absolute;*/
        /*width: 200px;*/
        /*height: 200px;*/
        /*top: -92%;*/
        /*right: -60px;*/
        /*cursor: pointer;*/

        /*transform: scale(0.2, 0.2) translateY(-50%);*/
        /*-ms-transform: scale(0.2, 0.2) translateY(-50%);*/
        /*-webkit-transform: scale(0.2, 0.2) translateY(-50%);*/
    }

    .dot {
        height: 100px;
        width: 100px;
        background-color: #00ffc0;
        border-radius: 50%;
        position: absolute;
        left: 125px;
    }

    .cart-count {
        position: absolute;
        font-weight: bold;
        top: 10px;
        right: 21px;
        font-size: 15px;
        color: white;
    }
</style>