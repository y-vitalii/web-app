<template>
    <div id="cart-value-mobile">
        <div style="   display: flex;
        justify-content: space-between; width: 100%;">
            <div class="img-content">
                <img v-bind:src="this.item.photo_filename" width="100" height="150" style="max-width: 150px;">
            </div>
            <div class="info-content" style="height: 100%; width: 70%;">
                <div style="text-align:left; height: 45px; vertical-align: top; color: white; font-size: 19px;     font: icon;">
                    {{item.name}}
                </div>
                <div style="padding-bottom: 10px;">
                    <div style="color: #989898; text-align: left; display: inline-block; width: 50%;">Цена</div>
                    <div style="color: #989898; text-align: right; display: inline-block; width: 50%;">
                        <div v-if="item.discount_price" style="color: gray; font-size: 12px; text-decoration: line-through; text-align: right; display: inline-block;">
                            {{item.price}} грн
                        </div>
                        {{item.discount_price ? item.discount_price : item.price}} грн
                    </div>
                </div>
                <div style="border: 1px solid gray; border-radius: 2px; height: 30px;">
                    <button style="position:relative; display: inline-block; vertical-align: middle;height: 100%; font-size: 48px; background-color: transparent;color: white; width: 40%;" @click="down(item.id)">
                        <img src="../assets/minus-symbol.png" width="25"
                             style="position:absolute; top: 50%;     transform: translateX(-50%) translateY(-50%);max-width: 100%; max-height: 100%;">
                    </button>
                    <div style="display: inline-block; width: 20%; position: relative;
    top: 4px; color: white; font-weight: bold; font-size: 21px;">{{test}}</div>
                    <button style="position:relative; display: inline-block; vertical-align: middle;height: 100%;font-size: 48px; background-color: transparent;color: white; width: 40%;" @click="up(item.id)">
                        <img src="../assets/plus-symbol.png" width="25"
                             style="position:absolute;top: 50%;     transform: translateX(-50%) translateY(-50%); max-width: 100%; max-height: 100%;">
                    </button>
                </div>
                <div style="padding-top: 10px;">
                    <div style="display: inline-block; text-align: left; width: 50%; color: white">Сумма</div>
                    <div style="display: inline-block; text-align: right; width: 50%;  color: orange">{{(item.discount_price ? item.discount_price : item.price) * item.quantity}} грн</div>
                </div>
            </div>
            <button class="close-btn">
                <img src="../assets/plus-symbol.png" width="20" @click="removeItem(item.id)">
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartProductMobile",
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
    #cart-value-mobile {
        position: relative;
        border: 2px solid gray;
        border-radius: 3px;
        padding: 10px 10px;
        margin: 5px 15px;
    }

    .img-content {
        display: flex;
        width: 27%;
        text-align: left;
        padding-right: 3%;
    }

    .info-content {
        display: flex;
        flex-direction: column;
        align-self: center;
    }

    .close-btn {
        position: absolute;
        top: 7px;
        right: 7px;
        transform: rotate(45deg);
        background-color: transparent;
    }

    .head-text {
    }
</style>