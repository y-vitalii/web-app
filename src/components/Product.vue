<template>
    <div id="product-content">
        <div v-if="this.item.discount_price" class="discount">
            <span class="discount-val">АКЦИЯ</span>
        </div>
        <div class="top-text">{{this.item.name}} {{this.item.size ? this.item.size + ' л' : ''}}</div>
        <div class="swiper-lazy" v-on:click="select()">
            <img v-bind:src="this.item.photo_filename" class="img-content" height="220">
        </div>
        <transition name="fade">
            <div v-if="selected">
                <div v-if="!inCart" class="img-cart">
                    <img v-on:click="addToCart()" src="../assets/korzina_green.png" width="90" height="auto">
                </div>
                <div v-if="inCart" class="img-cart">
                    <img src="../assets/unnamed.png" width="90" height="auto">
                </div>
                <div class="btn-content">
                    <button class="btns" v-on:click="down()" style="width: 40%">-</button>
                    <div class="item-count" style="width: 20%">{{this.count}}</div>
                    <button class="btns" v-on:click="up()" style="width: 40%">+</button>
                </div>
            </div>
        </transition>
        <div class="bottom" v-bind:style="{backgroundColor: this.item.color}">
            <div v-if="this.item.discount_price" class="bottom-full-amount-text">{{this.item.price}} {{$t('uah')}}</div>
            <div class="bottom-text">{{this.item.discount_price ? this.item.discount_price : this.item.price}}
                {{$t('uah')}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product",
        props: {
            imgSrc: String,
            itemParam: Object,
            indexParam: String
        },
        data: function () {
            return {
                selected: false,
                inCart: false,
                count: 1,
                timeOut: null,
                item: this.itemParam,
                index: this.indexParam
            }
        },
        methods: {
            select: function () {
                if (!this.selected) {
                    this.selected = true;
                    if (this.inCart) this.addToCart();

                    this.timeOut = setTimeout(this.unSelect, 5000);
                }
            },
            unSelect: function () {
                this.selected = false;
                this.inCart = false;
                this.count = 1;
            },
            addToCart: function () {
                if (!this.inCart) {
                    this.inCart = true;
                    this.item.index = this.index;

                    if (this.item.quantity) this.item.quantity += this.count;
                    else this.item.quantity = this.count;

                    this.$emit('click', this.item);

                    clearTimeout(this.timeOut);
                    setTimeout(this.unSelect, 2500);
                }
            },
            up: function () {
                if (!this.inCart) this.count += 1;

                clearTimeout(this.timeOut);
                this.timeOut = setTimeout(this.unSelect, 5000);
            },
            down: function () {
                if (this.count !== 1 && !this.inCart) this.count -= 1;

                clearTimeout(this.timeOut);
                this.timeOut = setTimeout(this.unSelect, 5000);
            }
        }
    }
</script>

<style scoped>
    #product-content {
        position: relative;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        background-color: white;
        cursor: pointer;
    }

    #product-content:hover {
        transform: translateY(-3px);
        -webkit-transition-duration: 1s;
        transition-duration: 1s;
    }

    .top-text {
        color: black;
        font-size: 14px;
        min-height: 30px;
        font-weight: bold;
        padding-bottom: 10px;
        padding-top: 10px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .bottom {
        display: flex;
        background-color: #1f1c3a;
        height: 30px;
        border-radius: 0 0 4px 4px;
        bottom: 0;
        position: absolute;
        width: 100%;
    }

    .bottom-text {
        color: white;
        display: flex;
        font-size: 17px;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    .bottom-full-amount-text {
        position: absolute;
        left: 5px;
        top: 5px;
        color: white;
        font-size: 11px;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        text-decoration: line-through;
    }

    .btn-content {
        position: absolute;
        display: flex;
        flex-direction: row;
        bottom: 30px;
        width: 100%;
        height: 30px;
        background-color: rgba(76, 76, 76, 0.73);
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    .swiper-lazy {
        overflow: hidden;
    }

    .btns {
        background-color: transparent;
        font-size: 23px;
        font-weight: lighter;
        color: white;
        border: none;
        cursor: pointer;
    }

    .item-count {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .img-content {
        z-index: 10;
        padding-bottom: 30px;
        transform: translateX(-50%);
        margin: 0 50%;
    }

    .img-cart {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .discount {
        position: absolute;
        display: flex;
        top: 40px;
        left: 10px;
        background-color: #f84147;
        width: 65px;
        height: 25px;
        border-radius: 25px;
        z-index: 1;
    }

    .discount-val {
        display: flex;
        justify-content: center;
        font-size: 13px;
        align-self: center;
        margin: 0 auto;
        font-weight: bold;
        color: white;
        vertical-align: middle;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>