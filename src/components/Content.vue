<template>
    <div id="main-content">
        <Promo/>
        <div class="select-block">
            <div class="head-text">
                <h4><h4 style="display: inline-block">{{$t('browse_text_found')}}</h4>{{$t('browse_text1')}}</h4>
                <h4>{{$t('browse_text2')}}</h4>
            </div>
            <label>
                <Select v-bind:categoriesList="categoryList" @click="handlerSelectClick"/>
            </label>
        </div>
        <div class="products-content">
            <div class="grid-container grid-container--fit">
                <div class="grid-element" v-for="item in items" :key="item.id">
                    <Product v-bind:itemParam="item" @click="addProduct"/>
                    <!--                    <button v-bind:class="[item.isAdded ? disabled : '', button]"-->
                    <!--                            @click="addProduct(item, index)">Buy-->
                    <!--                    </button>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Select from './Select'
    import Product from './Product'
    import {mapState, mapActions, mapMutations} from 'vuex'
    import Promo from "./Promo";

    export default {
        name: "Content",
        components: {
            Promo,
            Select,
            Product
        },
        data: function () {
            return {
                currentSelect: 'foods',
                activeSection: '',
                items: [],
                categoryList: [],
                button: 'button',
                disabled: 'disabled'
            }
        },
        methods: {
            handlerSelectClick(key) {
                if (this.$store.state.products.items[key]) this.items = this.$store.state.products.items[key];
                else this.items = [];
            },
            changeTopic: function () {

            },
            slide: function () {

            },
            addProduct: function (item) {
                item.isAdded = !item.isAdded;

                // this.items.splice(index, 1, item);
                // debugger
                // this.setDrink({index, item});
                this.addProductToCart(item);
            },
            ...mapActions({
                addProductToCart: 'cart/addProductToCart',
                // getDrinks: 'products/getDrinks'
            }),
            ...mapMutations({
                setDrink: 'products/setDrink',
                setItems: 'cart/setItems'
            }),
            getProducts() {
                if (Object.keys(this.products.items).length) {
                    this.items = this.products.items[this.products.current];
                } else {
                    this.$store.dispatch('products/getProducts').then((data) => {
                        this.items = data[Object.keys(data)[0]];
                    });
                }
            },
            getDrinks() {
                if (this.drinks.length) {
                    this.items = this.drinks;
                } else {
                    this.$store.dispatch('products/getDrinks').then((data) => {
                        // debugger
                        this.items = data;
                        this.categoryList = this.categories;
                    });
                }
            },
            getFoods() {
                if (this.foods.length) {
                    this.items = this.foods;
                } else {
                    this.$store.dispatch('products/getFoods').then((data) => {
                        // debugger
                        this.items = data;
                    });
                }
            }
        },
        created: function () {
            window.scrollTo(0, 0);
            this.getProducts();
        },
        computed: mapState({
            products: state => state.products,
            drinks: state => state.products.drinks,
            foods: state => state.products.foods,
            currentSection: state => state.currentSection,
            categories: state => state.categories
        })
    }
</script>

<style scoped>
    #main-content {
        background-color: #323232;
        padding-bottom: 100px;
    }

    .head-text {
        font-size: 25px;
        font-weight: lighter;
        padding-top: 35px;
        color: white;
    }

    h4 {
        font-weight: 100;
    }

    h4 h4:first-child {
        color: #f09b00;
    }

    .products-content {
        padding-top: 50px;
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
        display: inline-block;
        width: 100%;
        max-width: 900px;
    }

    .select-block {
        background-color: #323232;
        /*position: sticky;*/
        top: -50px;
        z-index: 199;
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
        /*background-color: rgba(238, 238, 238, 0.3);*/
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

    .grid-container {
        display: grid;
        grid-gap: 7px 7px;
        justify-content: center;
    }

    .grid-container--fit {
        grid-template-columns: repeat(auto-fit, minmax(150px, 170px));
    }

    /*@media only screen and (max-width: 600px) {*/
    /*    .grid-container--fit {*/
    /*        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));*/
    /*    }*/
    /*}*/

    .grid-element {
        /*background-color: deepPink;*/
        /*padding: 20px;*/
        /*color: #fff;*/
        /*border: 1px solid #fff;*/
    }
</style>