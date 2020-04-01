<template>
    <div id="cart-content">
        <div v-bind:class="['cart-content', isMobile ? mobile : '']">
            <div v-bind:class="['cart-text', isMobile ? mobile : '']">Корзина</div>
            <ul>
                <transition-group appear name="slide-fade">
                    <li v-bind:class="[cartValue, isMobile ? mobile : '']" v-for="(item) in items" :key="item.id">
                        <CartProduct v-if="!isMobile" v-bind:item="item" v-bind:test="item.quantity"
                                     @click:remove="removeByKey"
                                     @click:addOne="addOne" @click:removeOne="removeOne"
                                     @click:updateDeliveryPrice="updateDeliveryPrice"/>
                        <CartProductMobile v-if="isMobile" v-bind:item="item" v-bind:test="item.quantity"
                                           @click:remove="removeByKey"
                                           @click:addOne="addOne" @click:removeOne="removeOne"
                                           @click:updateDeliveryPrice="updateDeliveryPrice"/>
                    </li>
                </transition-group>
            </ul>
            <div ref="confirmContent" v-bind:class="[confirmContent, isMobile ? mobile : '']">
                <div v-bind:class="[confirmText, isMobile ? mobile : '']">
                    <span style="display: block; color: orange; padding-bottom: 3px;     width: 95%;
">{{$t('c_text1')}}</span>
                    <span style="display: block; color: white; padding-bottom: 3px;     width: 95%;
">1. {{$t('c_text2')}}</span>
                    <span style="display: block; color: white; padding-bottom: 3px;     width: 95%;
">2. {{$t('c_text3')}}</span>
                    <span style="display: block; color: white; padding-bottom: 3px;     width: 95%;
">3. {{$t('c_text4')}}</span>
                    <span style="display: block; color: white; padding-bottom: 3px;     width: 95%;
">4. {{$t('c_text5')}}</span>
                </div>
                <div v-bind:class="[confirmForm, isMobile ? mobile : '']">
                    <div style="text-align: left; padding-bottom: 10px;">
                        <span style="color:gray;  display: inline-block; width: 50%;">Товаров на сумму</span>
                        <span style="color:gray;    display: inline-block;width: 50%; text-align: right;">{{total}} {{$t('uah')}}</span>
                    </div>
                    <div style="text-align: left; padding-bottom: 10px;">
                        <span style="color:gray;  display: inline-block; width: 50%;">{{$t('c_text7')}}</span>
                        <span style="color:gray;    display: inline-block;width: 50%; text-align: right;">{{deliveryPrice ? deliveryPrice + ' ' + $t('uah') : 'бесплатно'}}</span>
                    </div>
                    <div style="text-align: left; padding-bottom: 5px; width: 100%">
                        <span style="color:white; font-size: 24px;display: inline-block;width: 50%;">{{$t('c_text8')}}</span>
                        <span style="color:white; font-size: 24px; display: inline-block;width: 50%; text-align: right;">
                        <span v-if="isPromoSuccess"
                              style="color:gray; text-decoration: line-through; font-size: 18px; display: inline-block; text-align: right;">{{total + deliveryPrice}} {{$t('uah')}}</span>
                            {{total + deliveryPrice - promoPrice}} {{$t('uah')}}
                        </span>
                    </div>
                    <button @click="applyOrder()"
                            v-bind:class="['inline', 'button-accept' , 'col2', !canOrder() ? 'disabled' : '']">
                        {{$t('c_text9')}}
                    </button>
                    <div v-if="!isPromoSuccess">
                        <button @click="showPromo()"
                                style="background-color: transparent; color: #c4c4c4; padding-top: 10px; border-bottom: 1px solid #c4c4c4">
                            Ввести промокод
                        </button>
                        <div v-if="isShowPromo" style="padding-top: 10px;">
                            <input v-model="promocode" type="text"
                                   v-bind:class="['promo-input', isPromoError ? 'promo-error' : '']"
                                   @input="promoOnChange" @change="promoOnChange">
                            <button @click="applyPromo()"
                                    style="display: block; margin: 0 auto; background-color: #616161; border-radius: 3px; color: #c4c4c4; border: 1px solid #616161; padding: 5px">
                                Применить
                            </button>
                        </div>
                    </div>
                    <div v-if="isPromoSuccess" style="color: #44803d; padding-top: 10px;">Промокод успешно применен
                    </div>
                </div>
            </div>
        </div>
        <BottomText/>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex'
    import * as utils from '../utils/index';
    import CartProduct from "./CartProduct";
    import CartProductMobile from "./CartProductMobile";
    import BottomText from "./BottomText";
    import shop from "../api/shop";

    export default {
        name: "Cart",
        components: {
            BottomText,
            CartProductMobile,
            CartProduct
        },
        data: function () {
            return {
                isMobile: utils.isMobile(),
                hideBorder: 'hide-border',
                cartValue: 'cart-value',
                confirmContent: 'confirm-content',
                mobile: 'mobile',
                confirmText: 'confirm-text',
                confirmForm: 'confirm-form',
                isShowPromo: false,
                isPromoSuccess: false,
                isPromoError: false,
                promocode: null
            }
        },
        methods: {
            promoOnChange: function () {
                this.isPromoError = false;
            },
            showPromo: function () {
                this.isShowPromo = true;
            },
            applyPromo: async function () {
                if (this.promocode) {
                    const response = await shop.applyPromo({
                            promocode: this.promocode
                        }),
                        amt = response.amt;

                    if (amt) {
                        this.isPromoSuccess = true;
                        this.setPromo({val: amt, promo: this.promocode});
                    } else {
                        this.isPromoError = true;
                    }
                }
            },
            updateDeliveryPrice() {
                this.updateDelivery();

                setTimeout(() => {
                    if (!this.items.length) this.$router.push('/')
                }, 1500);
            },
            applyOrder: function () {
                if (this.canOrder()) this.$router.push('/order');
            },
            canOrder: function () {
                return this.total >= 200;
            },
            ...mapMutations({
                changeQuantity: 'cart/changeQuantity',
                removeItem: 'cart/remove',
                removeByKey: 'cart/removeByKey',
                addOne: 'cart/addOne',
                removeOne: 'cart/removeOne',
                setPromo: 'cart/setPromo',
                updateDelivery: 'cart/updateDeliveryPrice'
            })
        },
        computed: mapState({
            items: state => state.cart.items,
            ...mapGetters('cart', {
                total: 'getTotalPrice',
                promoPrice: 'getPromoPrice',
                deliveryPrice: 'getDeliveryPrice'
            })
        }),
        mounted() {
            this.$refs.confirmContent.style.minHeight = window.innerHeight - 430 + 'px';
        },
        created() {
            window.scrollTo(0, 0);
            if (!this.items.length) this.$router.push('/');
            this.updateDeliveryPrice();
        }
    }
</script>

<style scoped>
    .cart-text {
        color: white;
        font-size: 25px;
        text-align: left;
        padding-bottom: 50px;
    }

    .cart-text.mobile {
        padding-bottom: 0;
        padding: 30px 15px;
    }

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

    .cart-content.mobile {
        padding-top: 0;
    }

    .inline {
        display: table-cell;
    }

    .total {
        /*position: absolute;*/
        /*right: 50px;*/
    }

    .col2 {
        width: 50%;
    }

    .promo-input {
        font-weight: bold;
        margin-right: 5px;
        margin-bottom: 10px;
        color: #9c9c9c;
        border-style: solid;
        border-width: 1px;
        border-color: #7d8078;
        background-color: transparent;
        padding: 5px;
        border-radius: 3px;
        text-align: center;
    }

    .promo-error {
        border-color: #a70000c4;
        border-width: 2px;
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
        width: 100%;
        background-color: #44803d;
        font-size: 21px;
        font-weight: lighter;
        color: white;
        border: none;
        padding: 12px 15px;
        cursor: pointer;
        border-radius: 4px;
    }

    .cart-value {
        display: table;
        width: 100%;
        height: 100%;
        border-top: 1px solid #a5a5a5;
        list-style-type: none;
    }

    .cart-value.mobile {
        border: none;
    }

    /*.hide-border {*/
    /*    !*border: none;*!*/
    /*}*/

    .cart-value:last-child {
        border-bottom: 1px solid #a5a5a5;
    }

    .cart-value.mobile:last-child {
        border-bottom: none;
    }

    .info {
        /*font-family: "Bitstream Vera Sans";*/
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
        font-size: 20px;
        color: #ce980a;
    }

    .confirm-content {
        font-family: "CalibriLight";
        display: flex;
        /*justify-content: space-between;*/
        /*font-size: 20px;*/
        /*color: #ce980a;*/
        padding-top: 30px;
    }

    .confirm-content.mobile {
        display: flex;
        flex-direction: column-reverse;
        margin: 5px 15px;
    }

    .confirm-text {
        width: 55%;
        display: inline-block;
        text-align: left;
    }

    .confirm-text.mobile {
        width: 100%;
        padding-top: 40px;
    }

    .confirm-form {
        width: 45%;
        display: inline-block;
        vertical-align: top;
        min-width: max-content;
        max-width: 100%;
    }

    .confirm-form.mobile {
        /*width: 100%;*/
        width: auto;
        margin-bottom: 15px;
        background-color: #505050;
        border-radius: 3px;
        padding: 10px 10px;
    }

    .disabled {
        background-color: #5d5d5d;
    }

    h3 {
        color: #dcdcdc;
        font-weight: lighter;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active до версии 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>