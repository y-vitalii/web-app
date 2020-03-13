<template>
    <div id="order-content">
        <Header v-bind:showBarket='false' />
        <div v-if="!orderSend" class="order-content" ref="orderContent">
            <div class="order-text">Оформление заказа</div>
            <div class="order-form">
                <div class="contacts">
                    <div class="cube">
                        <span class="count">1</span>
                    </div>
                    <div v-bind:class="['values', isMobile ? 'mobile' : '']">
                        <div v-bind:class="[topText, isMobile ? topTextMobile : '']">
                            <span class="v-center" style="color: orange; font-size: 19px;">Контактные данные</span>
                        </div>
                        <div style="padding-bottom: 10px;">
                            <div v-bind:class="['inline', 'width50', isMobile ? 'mobile' : '']" style="color: white;">
                                Имя и
                                фамилия
                            </div>
                            <input v-bind:class="['inline', 'width50', 'input', isMobile ? 'mobile' : '', hasError.name ? 'has-error' : '']"
                                   v-model="formData.name" type="text">
                        </div>
                        <div>
                            <div v-bind:class="['inline', 'width50', isMobile ? 'mobile' : '']" style="color: white;">
                                Мобильный телефон
                            </div>
                            <input v-bind:class="['inline', 'width50', 'input', isMobile ? 'mobile' : '', hasError.phone ? 'has-error' : '']"
                                   v-model="formData.phone" @keypress="isNumber($event)" type="text">
                        </div>
                    </div>
                </div>
                <div class="address">
                    <div class="cube">
                        <span class="count">2</span>
                    </div>
                    <div v-bind:class="['values', isMobile ? 'mobile' : '']">
                        <div v-bind:class="[topText, isMobile ? topTextMobile : '']">
                            <span class="v-center" style="color: orange; font-size: 19px;">Доставка</span>
                        </div>
                        <div style="padding-bottom: 10px;">
                            <div v-bind:class="['inline', 'width50', isMobile ? 'mobile' : '']" style="color: white;">
                                Город
                            </div>
                            <input style="background-color: transparent; border:1px solid grey;box-sizing: border-box; color: #adabab;"
                                   v-bind:class="['inline', 'width50', 'input', isMobile ? 'mobile' : '']" type="text"
                                   value="Кременчуг" readonly>
                        </div>
                        <div>
                            <div v-bind:class="['inline', 'width50', isMobile ? 'mobile' : '']" style="color: white;">
                                Адресс
                            </div>
                            <input v-bind:class="['inline', 'width50', 'input', isMobile ? 'mobile' : '', hasError.address ? 'has-error' : '']"
                                   v-model="formData.address" type="text">
                        </div>
                    </div>
                </div>
                <div class="payment">
                    <div class="cube">
                        <span class="count">3</span>
                    </div>
                    <div v-bind:class="['values', isMobile ? 'mobile' : '']">
                        <div v-bind:class="[topText, isMobile ? topTextMobile : '']">
                            <span class="v-center" style="color: orange; font-size: 19px;">Оплата</span>
                        </div>
                        <div class="inline" style="color: white; width: 70%">Онлайн оплата с помощью банковской карты
                            Visa/MasterCard
                        </div>
                        <div class="inline" style="width: 30%;"></div>
                    </div>
                </div>
                <div v-bind:class="['comments', isMobile ? 'mobile' : '']">
                    <div style="color: white; padding: 0 10px;">Комментарий к заказу</div>
                    <textarea type="text" v-model="formData.comment"
                              style="width: 100%; height: 90px; margin-top: 5px; border-radius: 3px;resize: none;    padding: 5px;
    box-sizing: border-box;
    font-size: 15px;"></textarea>
                </div>
            </div>
            <div class="summary">
                <div class="summary-content">
                    <div style="text-align: left; color: white; font-size: 21px; padding-bottom: 15px;">Итого</div>
                    <div style="padding-bottom: 5px;">
                        <div class="inline" style="text-align: left; color: white; font-size: 15px; width: 60%;">Товаров
                            на
                            сумму
                        </div>
                        <div class="inline" style="text-align: right; color: white; font-size: 15px; width: 40%;">
                            {{totalPrice}} {{$t('uah')}}
                        </div>
                    </div>
                    <div style="padding-bottom: 5px;">
                        <div class="inline" style="text-align: left; color: white; font-size: 15px; width: 60%;">
                            Стоимость
                            доставки
                        </div>
                        <div class="inline" style="text-align: right; color: white; font-size: 15px; width: 40%;">
                            {{deliveryPrice}} грн
                        </div>
                    </div>
                    <div style="padding-bottom: 5px;">
                        <div class="inline" style="text-align: left; color: white; font-size: 15px; width: 60%;">
                            Промокод
                        </div>
                        <div class="inline" style="text-align: right; color: white; font-size: 15px;  width: 40%;">0
                            {{$t('uah')}}
                        </div>
                    </div>
                    <div style="border-top: 1px solid white; border-bottom: 1px solid white; margin-bottom: 20px;">
                        <div class="inline"
                             style="text-align: left; color: white; margin-top: 25px; margin-bottom: 25px; font-size: 15px; width: 60%;">
                            К оплате
                        </div>
                        <div class="inline"
                             style="text-align: right; color: white; font-size: 21px; font-weight: bold; width: 40%;">
                            {{totalPrice + deliveryPrice}} {{$t('uah')}}
                        </div>
                    </div>
                    <button class="btn" @click="applyOrder()">Оформить заказ</button>
                    <div style="color: white; padding-top: 20px; font-size: 12px">Нажимая кнопку Оформить заказ,<br>я
                        подтвержаю что мне уже исполнилось 18 лет
                    </div>
                    <div style="padding-top: 20px;">
                        <router-link to="/cart" tag="a" style="color: white; font-size: 15px;">
                            Редактировать заказ
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <SuccessOrder v-if="orderSend"/>
        <BottomText/>
    </div>
</template>

<script>
    import * as utils from '../utils/index';
    import {mapGetters, mapMutations, mapState} from "vuex";
    import shop from "../api/shop";
    import Header from "./Header";
    import SuccessOrder from "./SuccessOrder";
    import BottomText from "./BottomText";

    export default {
        name: "Order",
        components: {
            BottomText,
            SuccessOrder,
            Header
        },
        data: function () {
            return {
                formData: {
                    name: '',
                    phone: '',
                    address: '',
                    comment: ''
                },
                hasError: {
                    name: false,
                    phone: false,
                    address: false
                },
                isMobile: utils.isMobile(),
                topText: 'top-text',
                topTextMobile: 'mobile',
                orderSend: false
            }
        },
        methods: {
            ...mapMutations({
                clearCart: 'cart/removeAll'
            }),
            isNumber: function (evt) {
                evt = (evt) ? evt : window.event;
                const charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
            checkForm: function () {
                let valid = true;

                this.hasError.name = false;
                this.hasError.phone = false;
                this.hasError.address = false;

                if (!this.formData.name) {
                    valid = false;
                    this.hasError.name = true;
                }
                if (!this.formData.phone) {
                    valid = false;
                    this.hasError.phone = true;
                }
                if (!this.formData.address) {
                    valid = false;
                    this.hasError.address = true;
                }

                return valid;
            },
            applyOrder: async function () {
                if (!this.checkForm()) return;

                const data = {
                    user: {
                        name: this.formData.name,
                        phone: this.formData.phone,
                        address: this.formData.address,
                        info: this.formData.comment
                    },
                    items: {}
                };

                this.items.forEach(obj => data.items[obj.id] = obj.quantity);

                const response = await shop.sendOrder(data);

                if (response.status === 'OK') {
                    this.orderSend = true;
                    this.clearCart();
                    localStorage.removeItem('after_22_cart');
                    window.scrollTo(0, 0);
                }
            }
        },
        computed: mapState({
            items: state => state.cart.items,
            ...mapGetters('cart', {
                totalPrice: 'getTotalPrice'
            }),
            ...mapGetters('products', {
                deliveryPrice: 'getDeliveryPrice'
            })
        }),
        created() {
            window.scrollTo(0, 0);
            if (!this.items.length) this.$router.push('/');
        },
        mounted() {
            this.$refs.orderContent.style.minHeight = window.innerHeight - 414 + 'px';
        }
    }
</script>

<style scoped>
    .order-content {
        max-width: 1000px;
        margin: 0 auto;
        padding-top: 55px;
    }

    input {
        padding-left: 5px;
        box-sizing: border-box;
    }

    .btn {
        width: 100%;
        background-color: #44803d;
        font-size: 21px;
        font-weight: lighter;
        color: white;
        border: none;
        padding: 20px 15px;
        cursor: pointer;
        border-radius: 4px;
    }

    .has-error {
        border: 2px solid red;
    }

    .order-text {
        color: white;
        font-size: 21px;
        text-align: left;
        /*padding-top: 25px;*/
        /*padding-bottom: 25px;*/
        padding: 25px 10px;
    }

    .order-form {
        display: inline-block;
        width: 65%;
        text-align: left;
        box-sizing: border-box;
        padding-right: 15px;
    }

    .count {
        color: white;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: max-content;
        margin: 0 auto;
        top: 50%;
        transform: translateY(-50%);
    }

    .v-center {
        position: absolute;
        bottom: 0;
        width: max-content;
        top: 50%;
        transform: translateY(-50%);
    }

    .inline {
        display: inline-block;
    }

    .width50 {
        width: 50%;
    }

    .width50.mobile {
        width: 100%;
    }

    .summary {
        display: inline-block;
        width: 35%;
    }

    .contacts {
        position: relative;
        padding: 10px 10px;
        border: 2px solid grey;
        border-radius: 2px;
        margin-bottom: 10px;
    }

    .address {
        position: relative;
        padding: 10px 10px;
        border: 2px solid grey;
        border-radius: 2px;
        margin-bottom: 10px;
    }

    .payment {
        position: relative;
        padding: 10px 10px;
        border: 2px solid grey;
        border-radius: 2px;
        margin-bottom: 10px;
    }

    .cube {
        position: relative;
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: #525250;
        border-radius: 1px;
        vertical-align: top;
    }

    .values {
        display: inline-block;
        padding-left: 10px;
        width: 88%;
    }

    .input {
        height: 27px;
        border-radius: 3px;
        font-size: 17px;
        color: black;
    }

    .text-white {
        color: white;
    }

    .comments {
        padding-top: 10px;
    }

    .comments.mobile {
        padding: 10px 10px;
    }

    .summary {
        background-color: grey;
        border-radius: 3px;
        vertical-align: top;
        min-width: 250px;
    }

    .summary-content {
        padding: 20px 20px;
    }

    .top-text {
        position: relative;
        height: 30px;
        margin-bottom: 25px;
    }

    .top-text.mobile {
        position: absolute;
        left: 45px;
        top: 10px;
    }

    .values.mobile {
        width: 100%;
        padding: 0;
        padding-top: 10px;
    }

    @media only screen and (max-width: 870px) {
        .order-form {
            width: 100%;
            /*box-sizing: content-box;*/
            padding-right: 0;
            margin-bottom: 25px;
        }

        .summary {
            width: 100%;
        }

        .values {
            width: 90%;
        }
    }
</style>