<template>
    <div id="select-content" v-dragscroll>
        <ul class="select" ref="selectList">
            <li :class="{selected: category === currentSelected }"
                :key="category"
                v-for="category in categories"
                v-on:click="toggleActive(category)">
                {{ category }}
            </li>
        </ul>
    </div>
</template>

<script>
    import {dragscroll} from 'vue-dragscroll'
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "Select",
        directives: {
            'dragscroll': dragscroll
        },
        methods: {
            toggleActive: function (item) {
                if (this.currentSelected !== item) {
                    this.setCurrent(item);
                    this.$emit('click', item)
                }
            },
            ...mapMutations({
                setCurrent: 'products/setCurrent'
            })
        },
        computed: mapState({
            categories: state => state.products.categories,
            currentSelected: state => state.products.current
        })
    }
</script>

<style scoped>
    #select-content {
        padding-top: 30px;
        text-align: center;
        overflow: hidden;
        max-width: max-content;
        margin: 0 auto;
    }

    .select {
        margin: 0 auto;
        padding-bottom: 10px;
        width: max-content;
        overflow: hidden;
        border-bottom: 1px solid grey;
        cursor: grab;
        height: 16px;
    }

    .select li {
        cursor: pointer;
        color: gray;
        font-weight: bold;
        font-size: 13px;
        margin-left: 10px;
        margin-right: 10px;
        text-transform: uppercase;
        display: inline-block;
    }

    .select li:hover {
        color: white;
        -webkit-transition: color ease-in-out 500ms;
        -moz-transition: color ease-in-out 500ms;
        -o-transition: color ease-in-out 500ms;
        transition: color ease-in-out 500ms;
    }

    .select li:after {
        visibility: hidden;
        opacity: 0;
        content: ' ';
        display: flex;
        background: #FFA800;
        height: 4px;
        width: inherit;
        justify-content: center;
        margin-top: 7px;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    .select li:hover:after {
        animation: 0.5s fadeIn;
        animation-fill-mode: forwards;
    }

    .selected {
        color: white !important;
    }

    .selected:after {
        visibility: visible !important;
        opacity: 1 !important;
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