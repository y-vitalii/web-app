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
                    {text: 3, isActive: false},
                    {text: 4, isActive: false},
                    {text: 5, isActive: false},
                    {text: 6, isActive: false},
                    {text: 7, isActive: false}
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

                this.$store.commit('setActive', this.currentSelected.key);
            }
        }
    }
</script>

<style scoped>
    #select-content {
        padding-top: 70px;
        text-align: center;
        /*position: sticky;*/
        /*top: 0;*/
    }

    .select {
        margin: 0 auto;
        padding: 0;
        padding-bottom: 10px;
        /*border-bottom: 1px #a5a5a5 solid;*/
        width: 80%;
    }

    .select li {
        cursor: pointer;
        color: #a7a7a7;
        margin-left: 10px;
        margin-right: 10px;
        text-transform: uppercase;
        display: inline;
    }

    .select li:hover {
        color: #ffffff;
        -webkit-transition: color ease-in-out 500ms;
        -moz-transition: color ease-in-out 500ms;
        -o-transition: color ease-in-out 500ms;
        transition: color ease-in-out 500ms;
    }

    .select li:before {
        /*bottom: 0;*/
        /*line-height: 14px;*/
        /*top:50px;*/
        content: '';
        background: #FFA800;
        height: 4px;
        width: 85px;
        position: absolute;
        /*display: block;*/
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
        margin-top: 22px;
    }

    .select li:hover:before {
        background: #ffffff;
        -webkit-transition: color ease-in-out 500ms;
        -moz-transition: color ease-in-out 500ms;
        -o-transition: color ease-in-out 500ms;
        transition: color ease-in-out 500ms;

        /*-webkit-transition-duration: 0.5s;*/
        /*transition-duration: 0.5s;*/
        /*-webkit-transition-timing-function: ease-out;*/
        /*transition-timing-function: ease-out;*/
    }

    .selected {
        color: #ffffff !important;
    }

    .selected:before {
        background: #ffffff !important;
    }

</style>