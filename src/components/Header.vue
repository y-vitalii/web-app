<template>
    <div id="header-content">
        <div class="header">
            <img class="header-img hidden" ref="headerImg" src="../assets/parachutes.png"/>
            <router-link to="/" class="header-logo" tag="div">
                <img src="../assets/top_logo.png" width="125" height="auto">
            </router-link>
            <router-link v-if="barket !== false" class="barket" to="/cart" tag="div">
                <img src="../assets/shopping_cart.png" width="30" height="30">
                <span v-if="totalQuantity" class="barket dot">
                    <div v-if="totalQuantity" class="cart-count">{{totalQuantity}}</div>
                </span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex'

    export default {
        name: "Header",
        props: {
            showBarket: Boolean
        },
        data: function(){
           return {
               barket: this.showBarket
           }
        },
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
            },
            ...mapMutations({
                setItems: 'cart/setItems'
            }),
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);

            const data = localStorage.getItem('after_22_cart');
            if (data) this.setItems(JSON.parse(data));
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    #header-content {
        background-color: #1E1E1E;
        text-align: center;
        height: 55px;
        /*max-width: 900px;*/
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

    a {
        color: #f5f5f5;
    }

    .header {
        /*background-color: #1E1E1E;*/
        /*text-align: center;*/
        height: 55px;
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        /*position: fixed;*/
        /*left: 0;*/
        /*top: 0;*/
        /*z-index: 200;*/
        /*display: -webkit-flex;*/
        display: flex;
        /*-webkit-flex-direction: row;*/
        /*flex-direction: row;*/
    }

    .header-logo {
        display: flex;
        width: 50%;
        align-items: center;
        /*justify-content: center;*/
    }

    .barket {
        display: flex;
        width: 50%;
        align-items: center;
        justify-content: flex-end;
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
        position: relative;
        top: 1px;
        color: white;
        min-width: max-content;
        font-weight: bold;
        font-size: 10px;
        width: 100%;
        justify-content: center;
    }

    .header-img {
        width: 30px;
        height: auto;
        position: absolute;
        left: 0;
        right: 0;
        top: 12px;
        margin: auto;
        max-width: 105px;
        animation: 0.5s fadeIn;
        animation-fill-mode: forwards;
    }

    .hidden {
        animation: 0.5s fadeOut;
        animation-fill-mode: forwards;
    }

    @media only screen and (max-width: 900px) {
        .barket {
            justify-content: flex-end;
            margin-right: 5px;
        }

        .header-logo {
            justify-content: flex-start;
            margin-left: 5px;
        }

        .dot {
            margin-right: 0;
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
