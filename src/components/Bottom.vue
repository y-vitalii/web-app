<template>
    <div id="bottom-content">
        <div class="layer1">
            <div class="l1-img">
                <img src="../assets/kartinki_design.png" width="420">
            </div>
            <div class="l1-txt">
                <h1>{{$t('b_text1')}}
                    <h5>{{$t('b_text2')}}</h5>
                </h1>
            </div>
        </div>
        <div class="layer2">
            <div>
                <img src="../assets/Jack-Daniels.png" width="200">
            </div>
            <div>
                <img src="../assets/morgan.png" width="200">
            </div>
            <div>
                <img src="../assets/bacardi.png" width="200">
            </div>
            <div>
                <img src="../assets/jose-cuervo.png" width="200">
            </div>
            <div>
                <img src="../assets/bombay-sapphire.png" width="200">
            </div>
        </div>
        <div class="layer3">

        </div>
        <div class="layer4">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Bottom"
    }
</script>

<style scoped>
    #bottom-content {
        /*display: flex;*/
        /*flex-direction: row;*/
        position: relative;
    }

    .layer1 {
        background-color: #1e1e1e;
        height: 100%;
        /*width: 100%;*/
        padding-top: 70px;
        padding-bottom: 70px;
        /*position: relative;*/
        display: flex;
        flex-direction: row;
        justify-content: right;
    }

    .l1-img {
        width: 50%;
        /*justify-content: right;*/
        display: flex;
        align-content: flex-end;
        align-items: end;
        align-self: end;
        justify-content: right;
    }

    .l1-img img {
        max-width: 100%;
        min-width: 50%;
        height: auto;
        display: flex;
        justify-content: right;
    }

    .l1-txt {
        width: 50%;
        display: flex;
    }

    /*.l1-img {*/
    /*    width: 40%;*/
    /*    height: 300px;*/
    /*    min-width: 400px;*/
    /*    text-align: right;*/
    /*    !*padding-right: 50px;*!*/
    /*    !*min-width: 420px;*!*/
    /*    !*align-items: self-end;*!*/
    /*    !*display: flex;*!*/
    /*    justify-content: right;*/
    /*    background: url('../assets/kartinki_design.png') no-repeat;*/
    /*    background-size: contain;*/
    /*    background-position: right;*/

    /*    display: inline-block;*/
    /*}*/

    /*.l1-img img {*/
    /*    !*width:540px;*!*/
    /*    !*height: auto;*!*/
    /*}*/

    /*.l1-txt {*/
    /*    !*display: flex;*!*/
    /*    justify-content: left;*/
    /*    !*overflow: hidden;*!*/
    /*    !*min-width: 300px;*!*/
    /*    !*padding-left: 100px;*!*/
    /*    min-width: 300px;*/
    /*    !*max-width: 500px;*!*/
    /*    text-align: left;*/
    /*    width: 50%;*/
    /*    display: inline-block;*/
    /*}*/

    /*.bottom-top {*/
    /*    position: relative;*/
    /*    background-color: #202020;*/
    /*    width: 100%;*/
    /*    height: 300px;*/
    /*}*/

    /*.bottom-down {*/
    /*    display: flex;*/
    /*    background-color: #000000;*/
    /*    text-align: center;*/
    /*    width: 100%;*/
    /*    height: 70px;*/
    /*}*/

    /*.bottom-text {*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    justify-content: center;*/
    /*    color: #898989;*/
    /*    position: absolute;*/
    /*    padding-top: 25px;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*    margin-left: auto;*/
    /*    margin-right: auto;*/
    /*    width: 300px;*/
    /*}*/

    /*.info {*/
    /*    padding-top: 50px;*/
    /*    width: 50%;*/
    /*    display: inline-block;*/
    /*}*/

    /*.copyright {*/
    /*    position: absolute;*/
    /*    color: #767676;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*    bottom: 0;*/
    /*    margin-left: auto;*/
    /*    margin-right: auto;*/
    /*}*/

    /*a {*/
    /*    padding-top: 7px;*/
    /*    text-decoration: none;*/
    /*    color: #A5A5A5;*/
    /*    -webkit-transition-duration: 0.5s;*/
    /*    transition-duration: 0.5s;*/
    /*}*/

    /*p {*/
    /*    margin-top: 10px;*/
    /*}*/

    /*h4 {*/
    /*    color: #f1f1f1;*/
    /*    font-weight: lighter;*/
    /*    font-size: 21px;*/
    /*}*/
    .layer2 {
        background-color: #5d5d5d;
        height: 100%;
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
    }

    .layer2 div {
        /*display: flex;*/
        justify-content: center;
        vertical-align: center;
        align-self: center;
        padding-right: 10px;
        padding-left: 10px;
    }

    .layer2 div img {
        max-width: 100%;
    }

    .layer3 {
        background-color: #333333;
        height: 200px;
    }

    .layer4 {
        background-color: #1e1e1e;
        height: 70px;
    }
</style>