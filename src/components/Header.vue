<template>
    <div id="header-content">
        <div class="header">
            <div class="header-text">Site Name</div>
            <div class="barket">
                <span v-if="!isCartEmpty" class="dot"></span>
            </div>
            <div v-if="!isCartEmpty" class="cart-count">{{itemCount}}</div>
        </div>
        <Promo />
    </div>
</template>

<script>
    import Promo from './Promo'
    import {mapState} from 'vuex'

    export default {
        name: "Header",
        components: {Promo},
        computed: mapState({
            isCartEmpty: state => state.cart.items.length === 0,
            itemCount: state => state.cart.items.length
        })
    }
</script>

<style scoped>
    #header-content {

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
        top: 9px;
        right: 21px;
        font-size: 15px;
        color: white;
    }
</style>