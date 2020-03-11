<template>
    <div id="cart-value">
        <div class="inline image">
            <img v-bind:src="this.item.photo_filename" width="auto" height="150" style="max-width: 150px;">
        </div>
        <div class="inline" style="color: white; width: 40%;vertical-align: middle;text-align: left;">
            {{item.name}}
        </div>
        <div style="vertical-align: middle;">
            <!--            <span style="    position: absolute; top: 30px;">Цена</span>-->
            <span style="color: white;">{{item.price}} грн</span>
        </div>
        <!--        <div class="quantity-content">-->
        <!--            <span style="    position: absolute; top: 30px;">Количество</span>-->
        <button class="btn" @click="down(item.id)">
            <img src="../assets/minus-symbol.png" width="20">
        </button>
        <div class="text-style">{{test}}</div>
        <button class="btn" @click="up(item.id)">
            <img src="../assets/plus-symbol.png" width="20">
        </button>
        <!--        </div>-->
        <div style="vertical-align: middle;">
            <!--            <span style="    position: absolute; top: 30px;">Сумма</span>-->
            <span style="color: orange">{{item.price * item.quantity}} грн</span>
        </div>
        <button class="close-btn" @click="removeItem(item.id)">
            <img src="../assets/plus-symbol.png" width="20">
        </button>
    </div>
</template>

<script>
    export default {
        name: "CartProduct",
        props: {
            item: Object,
            index: Number,
            test: Number
        },
        methods: {
            up: function (key) {
                this.$emit('click:addOne', key);
            },
            down: function (key) {
                this.$emit('click:removeOne', key);
            },
            removeItem: function (key) {
                this.$emit('click:remove', key);
            }
        }
    }
</script>


<style scoped>
    #cart-value {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    #cart-value * {
        align-self: center;
    }

    .inline {
        /*display: table-cell;*/
    }

    .btn {
        background-color: transparent;
    }

    .close-btn {
        position: absolute;
        top: 7px;
        right: 7px;
        transform: rotate(45deg);
        background-color: transparent;
    }

    .image {
        height: 150px;
        /*left: 100px;*/
        /*position: absolute;*/
        /*margin-right: 50px;*/
    }

    .text-style {
        /*font-family: "Bitstream Vera Sans";*/
        font-size: 20px;
        color: white;
    }

    .confirm-content {
        /*font-family: "Bitstream Vera Sans";*/
        font-size: 20px;
        color: #ce980a;
        padding-top: 50px;
    }

    h3 {
        color: #dcdcdc;
        font-weight: lighter;
    }
</style>