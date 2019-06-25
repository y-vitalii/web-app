<template>
    <div id="promo-content">
        <div class="promo">
            <div class="promo-text">TEXT, TEXT & TEXT</div>
            <div class="promo-text">TEXT TEXT TEXT TEXT TEXT TEXT TEXT</div>
            <button class="button">BUY BUY BUY</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Promo"
    }
</script>

<style scoped>
    #promo-content {
        display: inline-block;
        width: 100%;
        height: 500px;
        background-color: #BE6A00;
        background-image: url(../assets/header-bg.png);
        background-position: 50% 0px;
    }
    .promo {
        padding-top: 250px;
    }
    .promo-text {
        color: white;
        font-family: cursive;
        font-size: 30px;
    }
    .button {
        background-color: #4BA073;
        border: none;
        padding: 15px 30px;
        cursor: pointer;
        border-radius: 5px;
        margin: 30px 0px;
    }
</style>