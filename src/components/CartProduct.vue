<template>
    <div id="cart-value">
        <div class="inline image">
            <img v-bind:src="this.item.photo_filename" width="100" height="150" style="max-width: 150px;">
        </div>
        <div class="inline" style="color: white; width: 40%;vertical-align: middle;text-align: left;">
            {{item.name}}
        </div>
        <div style="vertical-align: middle; position:relative;">
            <span v-if="item.discount_price" style="color: #b1b1b1; font-size: 12px; position:absolute; padding-right: 10px; left: -100%; bottom: 0; text-decoration: line-through;">{{item.price}} грн</span>
            <span style="color: white;">{{item.discount_price ? item.discount_price : item.price}} грн</span>
        </div>
        <button class="btn" @click="down(item.id)">
            <img src="../assets/minus-symbol.png" width="20">
        </button>
        <div class="text-style">{{test}}</div>
        <button class="btn" @click="up(item.id)">
            <img src="../assets/plus-symbol.png" width="20">
        </button>
        <div style="vertical-align: middle;">
            <span style="color: orange">{{(item.discount_price ? item.discount_price : item.price) * item.quantity}} грн</span>
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
                this.$emit('click:updateDeliveryPrice');
            },
            down: function (key) {
                this.$emit('click:removeOne', key);
                this.$emit('click:updateDeliveryPrice');
            },
            removeItem: function (key) {
                this.$emit('click:remove', key);
                this.$emit('click:updateDeliveryPrice');
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
    }

    .text-style {
        font-size: 20px;
        color: white;
    }

    .confirm-content {
        font-size: 20px;
        color: #ce980a;
        padding-top: 50px;
    }

    h3 {
        color: #dcdcdc;
        font-weight: lighter;
    }
</style>