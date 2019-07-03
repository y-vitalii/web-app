<template>
    <div id="cart-content">
        <Header />
        <div class="cart-content">
            <ul>
                <li v-for="(item, index) in items" :key="item.key">
                    <div class="inline">{{item.name}}</div>
                    <div class="inline">{{item.cost}}</div>
                    <button class="button" @click="changeQuantity({index, isUp:'up'})"></button>
                    <div class="inline">{{item.quantity}}</div>
                    <button class="button" @click="changeQuantity({index})"></button>
                </li>
            </ul>
            <div class="total">
                <h3>Total price: {{total}}</h3>
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
                changeQuantity: 'cart/changeQuantity'
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
        background-color: #323232;
        padding-top: 50px;
        padding-bottom: 50px;
        position: relative;
    }

    .inline {
        display: inline-block;
    }

    .total {
        position: absolute;
        bottom: 0;
        right: 50px;
    }

    .button {
        background-color: #4BA073;
        border: none;
        padding: 15px 30px;
        cursor: pointer;
        border-radius: 5px;
        margin: 30px 0px;
    }

    h3 {
        color: #dcdcdc;
        font-weight: lighter;
    }
</style>