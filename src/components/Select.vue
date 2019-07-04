<template>
    <div id="select-content">
        <ul class="select">
            <li :class="{ selected: item.isActive }"
                :key="item.text"
                v-for="item in items"
                v-on:click="toggleActive(item)">
                Popular {{ item.text }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Select",
        data: function () {
            return {
                items: [
                    {text: 1, isActive: true, key: 'drinks'},
                    {text: 2, isActive: false, key: 'foods'},
                    {text: 3, isActive: false}
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
        /*position: sticky;*/
        /*top: 0;*/
    }

    .select {
        margin: 0 auto;
        padding: 0;
        padding-bottom: 10px;
        /*border-bottom: 1px #a5a5a5 solid;*/
        width: 85%;
    }

    .select li {
        cursor: pointer;
        color: #f99700;
        font-family: "Bitstream Vera Sans";
        font-size: 25px;
        margin-left: 10px;
        margin-right: 10px;
        text-transform: uppercase;
        display: inline-block;
        /*width: 33.33333%;*/
    }

    .select li:hover {
        color: #f09b00;
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
    /*    background: #FFA800;*/
    /*    height: 4px;*/
    /*    width: 85px;*/
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
        color: #ceb800 !important;
    }

    .selected:before {
        background: #ffffff !important;
    }

</style>