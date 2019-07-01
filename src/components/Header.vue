<template>
    <div id="header-content">
        <div class="header">
            <div id="header-text">Site Name</div>
            <div class="barket"></div>
        </div>
        <Promo />
    </div>
</template>

<script>
    import Promo from './Promo'

    export default {
        name: "Header",
        components: {Promo}
    }
</script>

<style scoped>
    #header-content {

    }

    #header-text {
        color: #ce7b00;
        top: 50%;
        left:25px;
        text-shadow: -1px 0 #f99700, 0 1px #f99700, 1px 0 #f99700, 0 -1px #f99700;
        cursor: pointer;
        margin: 0;
        text-align: center;
        text-transform: uppercase;
        font-weight: lighter;
        font-size: 19px;
        position: absolute;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .header {
        background-color: #323232;
        text-align: center;
        height: 60px;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 200;
    }

    .barket {
        background-image: url(../assets/basket.png);
        position: absolute;
        cursor: pointer;
        background: white;
        margin: 0;
        height: 200px;
        width: 200px;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);

        transform: scale(0.5, 0.5);
        -ms-transform: scale(0.5, 0.5);
        -webkit-transform: scale(0.5, 0.5);
    }
</style>