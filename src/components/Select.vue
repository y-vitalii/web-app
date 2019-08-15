<template>
    <div id="select-content">
        <ul class="select" ref="selectList">
            <div v-dragscroll>
                <li :class="{selected: item.isActive }"
                    :key="item.text"
                    v-for="item in items"
                    v-on:click="toggleActive(item)">
                    {{ $t(item.text) }}
                </li>
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Select",
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

    /*.select li:before {*/
    /*    !*bottom: 0;*!*/
    /*    !*line-height: 14px;*!*/
    /*    !*top:50px;*!*/
    /*    content: ' ';*/
    /*    display: flex;*/
    /*    background: #FFA800;*/
    /*    height: 4px;*/
    /*    width: 85px;*/
    /*    justify-content: center;*/
    /*    position: absolute;*/
    /*    !*display: block;*!*/
    /*    -webkit-transition-duration: 0.5s;*/
    /*    transition-duration: 0.5s;*/
    /*    -webkit-transition-timing-function: ease-out;*/
    /*    transition-timing-function: ease-out;*/
    /*    margin-top: 22px;*/
    /*}*/

    /*.select li:hover:before {*/
    /*    background: #ffffff;*/
    /*    -webkit-transition: color ease-in-out 500ms;*/
    /*    -moz-transition: color ease-in-out 500ms;*/
    /*    -o-transition: color ease-in-out 500ms;*/
    /*    transition: color ease-in-out 500ms;*/

    /*    !*-webkit-transition-duration: 0.5s;*!*/
    /*    !*transition-duration: 0.5s;*!*/
    /*    !*-webkit-transition-timing-function: ease-out;*!*/
    /*    !*transition-timing-function: ease-out;*!*/
    /*}*/

    .selected {
        color: white !important;
    }

    .selected:before {
        background: #ffffff !important;
    }

</style>