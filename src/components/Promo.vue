<template>
    <div id="promo-content" ref="bg">
        <div ref="promo">
            <img class="promo-img" src="../assets/parachutes.png" />
            <div class="promo">
                <div class="promo-text">{{$t('text1')}}</div>
                <div class="promo-text">{{$t('text2')}}</div>
            </div>
            <div class="promo-time">
                22:00-4:00
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Promo",
        props: ['headerImg'],
        methods: {
            handleScroll: function () {
                this.$refs.promo.style.opacity = (1 - (window.scrollY * 0.31 / 100)).toString();
                this.$refs.bg.style.backgroundPosition = '50% ' + (window.scrollY * 0.4) + 'px';
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>
    #promo-content {
        width: 100%;
        height: 450px;
        background-color: #BE6A00;
        background-image: url(../assets/header-bg.png);
        background-position: 50% 0px;
    }

    .promo {
        padding-top: 250px;
    }

    .promo :first-child {
        font-weight: bold;
        font-size: 27px;
    }

    .promo :last-child {
        font-size: 24px;
        font-weight: 300;
        margin-top: 7px;
    }

    .promo-text {
        color: white;
        font-size: 30px;
    }

    .promo-time {
        padding: 6px 20px;
        width: max-content;
        font-family: 'Digital', serif;
        font-size: 39px;
        color: white;
        margin: 50px auto;
        border: 2px solid white;
        border-radius: 5px;
    }

    .promo-img {
        width: 209px;
        height: auto;
        position: absolute;
        left: 0;
        right: 0;
        top: 95px;
        cursor: pointer;
        margin: auto;
        max-width: 105px;
    }

    .promo-img:hover {
        transition-duration: 0.3s;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>