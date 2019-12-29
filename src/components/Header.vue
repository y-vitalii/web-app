<template>
    <div id="header-content">
        <div class="header">
            <img class="header-img hidden" ref="headerImg" src="../assets/parachutes.png"/>
            <router-link to="/" class="header-logo" tag="div">
                <img src="../assets/top_logo.png" width="160" height="160">
            </router-link>
            <router-link class="barket" to="/cart" tag="div">
                <img src="../assets/shopping_cart.png" width="30" height="30">
                <span v-if="totalQuantity" class="barket dot"></span>
                <div v-if="totalQuantity" class="barket cart-count">{{totalQuantity}}</div>
            </router-link>
        </div>
        <Promo/>
    </div>
</template>

<script>
    import Promo from './Promo'
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "Header",
        components: {Promo},
        computed: mapState({
            ...mapGetters('cart', {
                totalQuantity: 'getTotalQuantity'
            })
        }),
        methods: {
            handleScroll: function () {
                if (window.scrollY > 395) {
                    this.$refs.headerImg.classList.remove('hidden');
                } else {
                    this.$refs.headerImg.classList.add('hidden');
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll)
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>
    #header-content {

    }

    a {
        color: #f5f5f5;
    }

    .header {
        background-color: #1E1E1E;
        text-align: center;
        height: 55px;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 200;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
    }

    .header-logo {
        display: flex;
        width: 50%;
        align-items: center;
        justify-content: center;
        /*cursor: pointer;*/
        /*position: absolute;*/
        /*left: 150px;*/
        /*top: -33px;*/
    }

    /*.header-logo img {*/
    /*    padding-top: -100px;*/
    /*}*/

    .barket {
        display: flex;
        /*position: relative;*/
        width: 50%;
        align-items: center;
        justify-content: center;
        /*width: 50%;*/
        /*display: inline-block;*/
        /*background-image: url(../assets/16757-200.png);*/
        /*filter: invert(100%);*/
        /*position: absolute;*/
        /*width: 200px;*/
        /*height: 200px;*/
        /*top: -92%;*/
        /*right: -60px;*/
        /*cursor: pointer;*/

        /*transform: scale(0.2, 0.2) translateY(-50%);*/
        /*-ms-transform: scale(0.2, 0.2) translateY(-50%);*/
        /*-webkit-transform: scale(0.2, 0.2) translateY(-50%);*/
    }

    .dot {
        height: 15px;
        width: 15px;
        background-color: #b70b0bfc;
        border-radius: 50%;
        left: 125px;
        margin-left: -9px;
        margin-top: -20px;
    }

    .cart-count {
        /*position: absolute;*/
        font-weight: bold;
        /*top: 10px;*/
        /*right: 21px;*/
        font-size: 15px;
        color: white;
        width: max-content;
    }

    .header-img {
        width: 30px;
        height: auto;
        position: absolute;
        left: 0;
        right: 0;
        top: 12px;
        /*cursor: pointer;*/
        margin: auto;
        max-width: 105px;
        /*transition: visibility 0s, opacity 10s linear;*/
        /*transition: all .5s ease-in-out;*/
        animation: 0.5s fadeIn;
        animation-fill-mode: forwards;
    }

    .hidden {
        animation: 0.5s fadeOut;
        animation-fill-mode: forwards;
    }

    @media only screen and (max-width: 600px) {
        .barket {
            justify-content: flex-end;
            margin-right: 17px;
        }

        .header-logo {
            justify-content: flex-start;
            margin-left: 7px;
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            visibility: visible;
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            visibility: hidden;
            opacity: 0;
        }
    }
</style>