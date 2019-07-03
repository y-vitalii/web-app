<template>
    <div id="header-content">
        <div class="header">
            <div class="header-text">Site Name</div>
            <router-link class="barket" to="/cart" tag="div">
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
        props: ['quantity'],
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

    .header-text {
        color: #ce7b00;
        top: 50%;
        left: 25px;
        text-shadow: -1px 0 #f99700, 0 1px #f99700, 1px 0 #f99700, 0 -1px #f99700;
        cursor: pointer;
        margin: 0;
        text-align: center;
        text-transform: uppercase;
        font-weight: lighter;
        font-size: 19px;
        position: absolute;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .header {
        background-color: #323232;
        border-bottom: 1px solid white;
        text-align: center;
        height: 60px;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 200;
    }

    .barket {
        background-image: url(../assets/16757-200.png);
        filter: invert(100%);
        position: absolute;
        width: 200px;
        height: 200px;
        top: -83%;
        right: -60px;
        cursor: pointer;

        transform: scale(0.2, 0.2) translateY(-50%);
        -ms-transform: scale(0.2, 0.2) translateY(-50%);
        -webkit-transform: scale(0.2, 0.2) translateY(-50%);
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