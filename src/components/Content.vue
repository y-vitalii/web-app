<template>
    <div id="main-content">
        <div class="head-text">PRODUCTS</div>
        <Select />
        <div class="products-content">
            <swiper :options="swiperOption" :class="{disabled : 'drinks' !== currentSection}">
                <swiper-slide :key="drink.name"
                              v-for="drink in drinks">
                    <Product />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            <swiper :options="swiperOption" :class="{disabled : 'foods' !== currentSection}">
                <swiper-slide :key="drink.name"
                              v-for="drink in foods">
                    <Product />
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
                    slidesPerView: 5,
                    spaceBetween: 5,
                    pagination: {
                        el: '.swiper-pagination'
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

            }
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
            currentSection: state => state.currentSection
        })
    }
</script>

<style scoped>
    #main-content {
        background-color: #404040;
    }

    .head-text {
        font-family: cursive;
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
</style>