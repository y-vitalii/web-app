<template>
    <div id="main-content">
        <div class="select-block">
            <div class="head-text">PRODUCTS</div>
            <label>
                <Select @click="handlerSelectClick" />
            </label>
        </div>
        <div class="products-content">
            <swiper :options="swiperOption"
                    ref="mySwiper">
                <swiper-slide v-for="(item, index) in items"
                              :key="item.key">
                    <Product />
                    <button v-bind:class="[item.isAdded ? disabled : '', button]"
                            @click="addProductToCart1(item, index)">Buy
                    </button>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    import Select from './Select'
    import Product from './Product'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import {mapState, mapActions} from 'vuex'

    import 'swiper/dist/css/swiper.css'

    export default {
        name: "Content",
        components: {
            Select,
            Product,
            swiper,
            swiperSlide
        },
        data: function () {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                currentSelect: 'foods',
                activeSection: '',
                items: [],
                button: 'button',
                disabled: 'disabled'
            }
        },
        methods: {
            handlerSelectClick(item) {
                this.currentSelect = item.key;
                if (this.currentSelect === 'drinks') {
                    this.getDrinks();
                } else {
                    this.getFoods();
                }
                // this.$store.commit('setActive', item.key);

            },
            changeTopic: function () {

            },
            slide: function () {

            },
            addProductToCart1: function (item, index) {
                item.isAdded = !item.isAdded;

                this.items.splice(index, 1, item);
                this.addProductToCart(item);
            },
            ...mapActions({
                addProductToCart: 'cart/addProductToCart',
                // getDrinks: 'products/getDrinks'
            }),
            getDrinks() {
                if (this.drinks.length) {
                    this.items = this.drinks;
                } else {
                    this.$store.dispatch('products/getDrinks').then((data) => {
                        this.items = data;
                    });
                }
            },
            getFoods() {
                if (this.foods.length) {
                    this.items = this.foods;
                } else {
                    this.$store.dispatch('products/getFoods').then((data) => {
                        this.items = data;
                    });
                }
            }
        },
        created: function () {
            if (this.currentSection === 'foods') {
                this.getFoods();
            } else {
                this.getDrinks();
            }
        },
        computed: mapState({
            drinks: state => state.products.drinks,
            foods: state => state.products.foods,
            currentSection: state => state.currentSection,
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        })
    }
</script>

<style scoped>
    #main-content {
        background-color: #404040;
        padding-bottom: 100px;
    }

    .head-text {
        font-size: 30px;
        font-weight: bold;
        padding-top: 50px;
        color: white;
    }

    .products-content {
        padding-top: 50px;
        text-align: center;
        margin: 0 auto;
        width: 85%;
        overflow: hidden;
        display: inline-block;
    }

    .select-block {
        background-color: #323232;
        position: sticky;
        top: -50px;
        z-index: 199;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
    }

    .disabled {
        display: none;
    }

    .swiper-container {
        height: 350px;
        width: 100%;
    }

    .swiper-slide {
        text-align: center;
        background-color: rgba(238, 238, 238, 0.3);
        border-radius: 5px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .button {
        background-color: #4BA073;
        text-align: center;
        display: block;
        position: absolute;
        bottom: 49px;
        max-width: 100%;
        width: 100px;

        /*border: none;*/
        /*padding: 7px 37px;*/
        cursor: pointer;
        border-radius: 5px;
        /*border-bottom: 5px;*/
        /*margin: 6px 0px;*/
    }

    .disabled {
        background-color: #898989;
    }
</style>