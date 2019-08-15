<template>
    <div id="main-content">
        <div class="select-block">
            <div class="head-text">
                <h4><h4 style="display: inline-block">{{$t('browse_text_found')}}</h4>{{$t('browse_text1')}}</h4>
                <h4>{{$t('browse_text2')}}</h4>
            </div>
            <label>
                <Select @click="handlerSelectClick" />
            </label>
        </div>
        <div class="products-content">
            <div class="grid-container grid-container--fit">
                <div class="grid-element" v-for="(item, index) in items" :key="item.key">
                    <Product />
<!--                    <button v-bind:class="[item.isAdded ? disabled : '', button]"-->
<!--                            @click="addProductToCart1(item, index)">Buy-->
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

    export default {
        name: "Content",
        components: {
            Select,
            Product
        },
        data: function () {
            return {
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
                // debugger
                // this.setDrink({index, item});
                this.addProductToCart(item);
            },
            ...mapActions({
                addProductToCart: 'cart/addProductToCart',
                // getDrinks: 'products/getDrinks'
            }),
            ...mapMutations({
                setDrink: 'products/setDrink'
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
        max-width: 450px;
    }

    .select-block {
        background-color: #323232;
        position: sticky;
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
    }

    .grid-container--fit {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }

    .grid-element {
        /*background-color: deepPink;*/
        /*padding: 20px;*/
        /*color: #fff;*/
        /*border: 1px solid #fff;*/
    }
</style>