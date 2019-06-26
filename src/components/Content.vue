<template>
    <div id="main-content">
        <div class="head-text">PRODUCTS</div>
        // TODO first child?
        <Select />
        <div class="slider"
             v-on:click="slide('left')">
            Left
        </div>
        <div class="products-content">
            <transition-group tag="div" name="slide">
                <Product v-bind:key="food.name"
                         v-for="food in foods" />
            </transition-group>
        </div>
        <div class="slider"
             v-on:click="slide('right')">
            Right
        </div>
    </div>
</template>
<!--v-if="food.name < 6"
//TODO: v-if-->

<script>
    import Select from './Select'
    import Product from './Product'

    export default {
        name: "Content",
        components: {Select, Product},
        data: function () {
            return {
                items: [],
                foods: [
                    {name: '1', cost: '2'},
                    {name: '2', cost: '2'},
                    {name: '3', cost: '2'},
                    {name: '4', cost: '2'},
                    {name: '5', cost: '2'}
                ],
                drinks: [
                    {name: '1', cost: '2'},
                    {name: '1', cost: '2'},
                    {name: '1', cost: '2'},
                    {name: '1', cost: '2'},
                    {name: '1', cost: '2'}
                ]
            }
        },
        methods: {
            changeTopic: function () {

            },
            slide: function (direction) {
                switch (direction) {
                    case 'left':
                        break;
                    case 'right':
                        // this.foods[0].destroy();

                        // debugger
                        this.foods.push({name: '1', cost: '2'});
                        this.foods.splice(0, 1);
                        break;
                    default:
                        this.foods.splice(0, 1);
                        this.foods.push({name: '1', cost: '2'});
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    #main-content {
        background-color: #404040;
        height: 700px;
    }

    #main-content:hover {

    }

    /*@media screen and (min-device-width: 1600px) {*/
        /*#main-content {*/
            /*background-color: whitesmoke;*/
            /*height: 700px;*/
        /*}*/
    /*}*/

    /*#main-content div:first-child {*/
    /*font-family: cursive;*/
    /*font-size: 30px;*/
    /*font-weight: bold;*/
    /*padding-top: 50px;*/
    /*color: white;*/
    /*}*/

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

    .slider {
        text-align: center;
        font-family: fantasy;
        font-size: 30px;
        color: white;
        display: inline-block;
    }

    .slide-leave-active,
    .slide-enter-active {
        transition: 500ms;
    }

    .slide-enter {
        transform: translate(100%, 0);
    }

    .slide-leave-to {
        transform: translate(-100%, 0);
    }
</style>