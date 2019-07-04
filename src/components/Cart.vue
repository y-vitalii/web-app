<template>
    <div id="cart-content">
        <Header />
        <div class="cart-content">
            <ul>
                <li class="cart-value" v-for="(item, index) in items" :key="item.key">
                    <div class="top-content">
                        <div class="inline image left">
                            <img src="../assets/products/item1.png" width="70" height="70">
                        </div>
                        <div class="inline info center">{{item.name}}</div>
                        <button class="inline button right" @click="removeItem({index})">x</button>
                    </div>
                    <div class="bottom-content">
                        <div class="inline left text-style">{{item.cost}} Грн</div>
                        <div class="inline center">
                            <button class="button" @click="changeQuantity({index})">-</button>
                            <div class="inline text-style">{{item.quantity}}</div>
                            <button class="button" @click="changeQuantity({index, isUp:'up'})">+</button>
                        </div>
                        <div class="inline right text-style total">{{item.cost * item.quantity}} Грн</div>
                    </div>
                </li>
            </ul>
            <div class="confirm-content">
                <button class="inline button-accept col2">Заказать</button>
                <h3 class="inline col2">Total price: {{total}} {{$t('uah')}}</h3>
            </div>
        </div>
        <Bottom />
    </div>
</template>

<script>
    import Header from './Header'
    import Bottom from './Bottom'
    import {mapState, mapGetters, mapMutations} from 'vuex'

    export default {
        name: "Cart",
        components: {
            Header,
            Bottom
        },
        methods: {
            ...mapMutations({
                changeQuantity: 'cart/changeQuantity',
                removeItem: 'cart/remove'
            })
        },
        computed: mapState({
            items: state => state.cart.items,
            ...mapGetters('cart', {
                total: 'getTotalPrice'
            })
        })
    }
</script>

<style scoped>
    .cart-content {
        /*text-align: start;*/
        background-color: #323232;
        padding-top: 50px;
        padding-bottom: 50px;
        position: relative;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
    }

    .inline {
        display: inline-block;
    }

    .total {
        /*position: absolute;*/
        /*right: 50px;*/
    }

    .col2 {
        width: 50%;
    }

    .button {
        background-color: transparent;
        font-size: 29px;
        font-weight: lighter;
        color: white;
        border: none;
        padding: 7px 15px;
        cursor: pointer;
        border-radius: 5px;
        /*margin: 30px 0px;*/
    }

    .button-accept {
        background-color: green;
        font-size: 29px;
        font-weight: lighter;
        color: white;
        border: none;
        padding: 7px 15px;
        cursor: pointer;
        border-radius: 5px;
    }

    .cart-value {
        border-top: 1px solid #a5a5a5;
    }

    .cart-value:last-child {
        border-bottom: 1px solid #a5a5a5;
    }

    .info {
        font-family: "Bitstream Vera Sans";
        color: #ce7b00;
        font-size: 27px;
        font-weight: lighter;
    }

    .center {
        width: 33.33333%;
        /*float: left;*/
    }

    .left {
        width: 33.33333%;
        /*display:  inline-block;*/
        /*position: absolute;*/
        /*left: 100px;*/
        /*top: 12px;*/
    }

    .right {
        width: 33.33333%;
        /*display:  inline-block;*/
        /*position: absolute;*/
        /*right: 150px;*/
        /*top: 12px;*/
    }

    .image {
        /*left: 100px;*/
        /*position: absolute;*/
        /*margin-right: 50px;*/
    }

    .top-content {
        position: relative;
        padding-top: 15px;
        min-height: 100px;
    }

    .bottom-content {
        position: relative;
        margin-bottom: 5px;
    }

    .total {
        background-color: #4c708c;
        border-radius: 3px;
    }

    .text-style {
        font-family: "Bitstream Vera Sans";
        font-size: 20px;
        color: #ce980a;
    }

    .confirm-content {
        font-family: "Bitstream Vera Sans";
        font-size: 20px;
        color: #ce980a;
        padding-top: 50px;
    }

    h3 {
        color: #dcdcdc;
        font-weight: lighter;
    }
</style>