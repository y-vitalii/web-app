<template>
    <div id="select-content" v-dragscroll>
        <ul class="select" ref="selectList">
            <li :class="{selected: item.isActive }"
                :key="item.text"
                v-for="item in items"
                v-on:click="toggleActive(item)">
                {{ $t(item.text) }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { dragscroll } from 'vue-dragscroll'

    export default {
        name: "Select",
        directives: {
            'dragscroll': dragscroll
        },
        data: function () {
            return {
                items: [
                    {text: 'cognac', isActive: true, key: 'drinks'},
                    {text: 'vodka', isActive: false, key: 'foods'},
                    {text: 'wine', isActive: false},
                    {text: 'beer', isActive: false},
                    {text: 'elite', isActive: false},
                    {text: 'drinks', isActive: false},
                    {text: 'snacks', isActive: false}
                ],
                currentSelected: null
            }
        },
        methods: {
            toggleActive: function (item) {
                if (!this.currentSelected) this.currentSelected = this.items[0];

                this.currentSelected.isActive = false;
                this.currentSelected = item;

                item.isActive = !item.isActive;

                this.$emit('click', item);
            }
        }
    }
</script>

<style scoped>
    #select-content {
        padding-top: 30px;
        text-align: center;
        overflow: hidden;
        max-width: max-content;
        margin: 0 auto;
        /*display: flex;*/
        /*flex-direction: row;*/
        /*width: 100%;*/
        /*position: sticky;*/
        /*top: 0;*/
    }

    .select {
        margin: 0 auto;
        /*padding: 0;*/
        padding-bottom: 10px;
        /*border-bottom: 1px #a5a5a5 solid;*/
        width: max-content;
        overflow: hidden;
        border-bottom: 1px solid grey;
        cursor: grab;
        /*overflow: hidden;*/
        /*display: flex;*/
        height: 16px;
    }

    .select li {
        cursor: pointer;
        color: gray;
        font-weight: bold;
        /*font-family: "Bitstream Vera Sans";*/
        font-size: 13px;
        margin-left: 10px;
        margin-right: 10px;
        text-transform: uppercase;
        display: inline-block;
        /*display: flex;*/
        /*flex-direction: row;*/
        /*width: 33.33333%;*/
    }

    .select li:hover {
        color: white;
        -webkit-transition: color ease-in-out 500ms;
        -moz-transition: color ease-in-out 500ms;
        -o-transition: color ease-in-out 500ms;
        transition: color ease-in-out 500ms;
    }

    .select li:after {
        /*bottom: 0;*/
        /*line-height: 14px;*/
        /*top:50px;*/
        visibility: hidden;
        opacity: 0;

        content: ' ';
        display: flex;
        background: #FFA800;
        height: 4px;
        width: inherit;
        justify-content: center;
        /*top: 10px;*/
        /*position: absolute;*/
        margin-top: 7px;

        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    .select li:hover:after {
        /*background: white;*/
        /*visibility: visible;*/

        /*-webkit-transition: color ease-in-out 500ms;*/
        /*-moz-transition: color ease-in-out 500ms;*/
        /*-o-transition: color ease-in-out 500ms;*/
        /*transition: color ease-in-out 500ms;*/

        /*-webkit-transition-duration: 0.5s;*/
        /*transition-duration: 0.5s;*/
        /*-webkit-transition-timing-function: ease-out;*/
        /*transition-timing-function: ease-out;*/

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