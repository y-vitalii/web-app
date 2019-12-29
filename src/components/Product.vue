<template>
    <div id="product-content">
        <div class="top-text">Ром Captain Morgan, 0.5</div>
        <div class="img-content swiper-lazy" v-on:click="select()">
            <img :src="getImg(imgSrc1)"  style="z-index: 10" width="40" height="120">
        </div>
        <transition name="fade">
            <div v-if="selected">
                <div v-if="!inCart" class="img-cart">
                    <img v-on:click="addToCart()" src="../assets/korzina_green.png" width="60" height="60">
                </div>
                <div v-if="inCart" class="img-cart">
                    <img src="../assets/unnamed.png" width="60" height="60">
                </div>
                <div class="btn-content">
                    <button class="btns" v-on:click="down()" style="width: 40%">-</button>
                    <div class="item-count" style="width: 20%">{{this.count}}</div>
                    <button class="btns" v-on:click="up()" style="width: 40%">+</button>
                </div>
            </div>
        </transition>
        <div class="bottom">
            <div class="bottom-text">225 грн</div>
        </div>
    </div>
</template>

<script>
    import img from '../assets/products/1.png';
    import img1 from '../assets/products/2.jpg';

    export default {
        name: "Product",
        props: {
          imgSrc: String
        },
        data: function () {
            return {
                selected: false,
                inCart: false,
                count: 1,
                timeOut: null,
                imgSrc1: this.imgSrc,
                img,
                img1
            }
        },
        methods: {
            getImg:function (key) {
              return this[key]
            },
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
            },
            addToCart: function () {
                if (!this.inCart) {
                    this.inCart = true;

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

// TODO border radius on top bottom ?

<style scoped>
    #product-content {
        position: relative;
        border-radius: 5px;
        width: 100%;
        /*margin-left: 10px;*/
        /*margin-right: 10px;*/
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
        font-size: 12px;
        font-weight: bold;
        padding-bottom: 10px;
        padding-top: 10px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .img-content {
        /*max-width: 100%;*/
        /*height: 170px;*/
        /*background-image: url(../assets/products/1.png);*/
        /*background-position: 50% 0px;*/
        /*background-size: 100px;*/
    }

    .bottom {
        display: flex;
        margin-top: 10px;
        background-color: #1f1c3a;
        height: 30px;
        border-radius: 0 0 4px 4px;
    }

    .bottom-text {
        color: white;
        display: flex;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
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

    .btns {
        background-color: transparent;
        font-size: 23px;
        font-weight: lighter;
        color: white;
        border: none;
        /*!*padding: 7px 15px;*!*/
        cursor: pointer;
        /*border-radius: 5px;*/
    }

    .item-count {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
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

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>