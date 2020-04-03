<template>
    <div id="bottom-content">
        <div v-if="true" class="layer1">
            <div class="layer1-content">
                <div class="l1-img">
                    <img src="../assets/kartinki_design.png" width="420">
                </div>
                <div class="l1-txt">
                    <div class="l1-txt-content">
                        <h1 style="color:#D28B06; font-weight: lighter;">{{$t('b_text0')}}</h1>
                        <h1 style="color:white; font-weight: lighter; padding-bottom: 25px">{{$t('b_text1')}}</h1>
                        <h5 style="font-size: 16px; color: #5d5d5d">{{$t('b_text2')}}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="true" class="layer2">
            <div>
                <img src="../assets/Jack-Daniels.png" width="200">
            </div>
            <div>
                <img src="../assets/morgan.png" width="200">
            </div>
            <div>
                <img src="../assets/bacardi.png" width="160">
            </div>
            <div>
                <img src="../assets/jose-cuervo.png" width="200">
            </div>
            <div>
                <img src="../assets/bombay-sapphire.png" width="200">
            </div>
        </div>
        <div class="layer3">
            <div class="bottom-block-info">
                <div>
                    <span style="font-weight: bold; color: #fff">{{$t('b_text1_1')}}</span>
                    <span>{{$t('b_text1_2')}}</span>
                    <span>{{$t('b_text1_3')}}</span>
                    <span>{{$t('b_text1_4')}}</span>
                </div>
            </div>
            <div class="bottom-block-info">
                <span style="font-weight: bold; color: #fff">{{$t('b_text2_1')}}</span>
                <span>{{$t('b_text2_2')}}</span>
                <span>{{$t('b_text2_3')}}</span>
            </div>
            <div v-bind:class="['bottom-block-info img', isMobile ? 'mobile' : '']">
                <!--                <img class="social-img" src="../assets/facebook.png" width="60">-->
                <!--                <img class="social-img" src="../assets/vk.png" width="60">-->
                <img class="social-img" src="../assets/instagram.png" width="60">
                <span>@posle22com</span>
            </div>
        </div>
    </div>
</template>

<script>
    import * as utils from '../utils/index';

    export default {
        data: function () {
            return {
                isMobile: utils.isMobile()
            }
        },
        name: "Bottom"
    }
</script>

<style scoped>
    #bottom-content {
        position: relative;
    }

    .layer1 {
        background-color: #1e1e1e;
        height: 100%;
        padding-top: 70px;
        padding-bottom: 70px;
        display: flex;
        flex-direction: row;
        justify-content: right;
    }

    .layer1-content {
        display: flex;
        max-width: 900px;
        margin: 0 auto;
    }

    .l1-img {
        width: 50%;
        text-align: right;
        padding-right: 30px;
        box-sizing: border-box;
    }

    .l1-img img {
        max-width: 100%;
        min-width: 50%;
    }

    .l1-txt {
        width: 50%;
        text-align: left;
    }

    .l1-txt-content {
        /*max-width: 55%;*/
        margin-left: 85px;
    }

    .bottom-block-info {
        display: inline-block;
        width: 33.33333%;
        align-self: center;
    }

    .bottom-block-info img:first-child {
        /*margin-right: 25px;*/
    }

    .bottom-block-info div {
        margin: 0 auto;
        margin-right: 25px;
        display: block;
        max-width: max-content;
    }

    .bottom-block-info span {
        color: #bbbbb9;
        font-size: 14px;
        display: block;
        padding-bottom: 17px;
    }

    .bottom-block-info img {
        /*margin-right: 40px;*/
    }

    .layer2 {
        background-color: #5d5d5d;
        height: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
    }

    .layer2 div {
        justify-content: center;
        vertical-align: center;
        align-self: center;
        padding-right: 15px;
        padding-left: 15px;
    }

    .layer2 div img {
        max-width: 100%;
    }

    .layer3 {
        background-color: #323232;
        padding-top: 70px;
        padding-bottom: 70px;
        display: inline-flex;
        max-width: 1000px;
        width: 100%;
    }

    .bottom-block-info.img.mobile img {
        display: block;
        margin: 0 auto;
        margin-right: 15px;
    }

    .social-img {
        padding-bottom: 15px;
    }

    @media only screen and (max-width: 900px) {
        .l1-txt-content {
            max-width: 100%;
            margin: 5px 5px;
        }

        .l1-img {
            padding-left: 5px;
            padding-right: 5px;
        }
    }

    @media only screen and (max-width: 635px) {
        .layer1-content {
            display: block;
            /*padding-top: 0;*/
        }

        .l1-txt {
            width: 100%;
        }

        .l1-txt-content {
            max-width: 100%;
            margin: 5px 5px;
        }

        .l1-img {
            width: 100%;
            text-align: center;
            padding: 30px 5px;
            box-sizing: border-box;
        }

        .bottom-block-info.img {
            text-align: right;
        }

        .bottom-block-info img {
            margin-right: 0;
        }

        .bottom-block-info img:first-child {
            margin-right: 0;
        }
    }

    @media only screen and (max-width: 385px) {
        .bottom-block-info.img {
            display: block;
            margin: 0 auto;
            margin-right: 5px;
        }
    }
</style>