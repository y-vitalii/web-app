<template>
    <div id="main-content">
        <div class="select-block">
            <div class="head-text">PRODUCTS</div>
            <Select />
        </div>
        <div class="products-content">
            <swiper :options="swiperOption" ref="mySwiper" :class="{disabled : 'drinks' !== currentSection}">
                <swiper-slide :key="drink.name"
                              v-for="drink in drinks">
                    <Product />
                    <button class="button" @click="addProductToCart(drink)">Buy</button>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            <swiper :options="swiperOption" :class="{disabled : 'foods' !== currentSection}">
                <swiper-slide :key="food.name"
                              v-for="food in foods">
                    <Product />
                    <button class="button" @click="addProductToCart(food)">Buy</button>
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
                    // preloadImages: true,
                    // lazy: true,
                    // hashNavigation: true,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                activeSection: ''
            }
        },
        actions: {
            ...mapActions({
                getDrinks: 'products/getDrinks'
            })
        },
        methods: {
            changeTopic: function () {

            },
            slide: function () {

            },
            ...mapActions({
                addProductToCart: 'cart/addProductToCart'
            })
        },
        created: function () {
            this.$store.dispatch('products/getDrinks').then(() => {

            });

            this.$store.dispatch('products/getFoods').then(() => {

            });
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
        top: -100px;
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
</style>