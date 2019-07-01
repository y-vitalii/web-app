<template>
    <div id="header-content">
        <div class="header">
            <div class="header-text">Site Name</div>
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

    .header-text {
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
        background-image: url(../assets/16757-200.png);
        filter: invert(100%);
        position: absolute;
        width: 200px;
        height: 200px;
        top: -83%;
        right: -60px;
        cursor: pointer;

        transform: scale(0.2, 0.2) translateY(-50%);
        -ms-transform: scale(0.2, 0.2) translateY(-50%);
        -webkit-transform: scale(0.2, 0.2) translateY(-50%);
    }
</style>