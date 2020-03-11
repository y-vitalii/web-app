<template>
    <div id="success-order">
        <div class="s-content">
            <div class="s-top">
                <div><img src="../assets/unnamed.png" height="100px"></div>
                <div class="s-top-text">
                    <div style="padding-bottom: 15px; color: #cececc;">Ваш заказ успешно принят!</div>
                    <div style="color: #cececc;">Номер заказа 00000</div>
                </div>
            </div>
            <div class="s-bottom">
                <div style="color: #cececc; padding-bottom: 5px;">Ваш заказ 00000 от дата успешно создан</div>
                <div style="padding-bottom: 20px; color: #cececc;">Мы свяжемся с Вами в ближайшее время.</div>
                <div style="padding-bottom: 20px; color: #cececc;">Спасибо за заказ!</div>
                <router-link to="/" tag="div">
                    <button class="btn">Назад на главную</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SuccessOrder",
        props: {
            order: Object
        }
    }
</script>

<style scoped>
    #success-order {
        background-color: #505050;
        height: 100%;
        max-width: 500px;
        text-align: left;
        border-radius: 2px;
        /*margin: 50px 100px;*/
        margin: 0 auto;
        margin-bottom: 500px;
        margin-top: 70px;
    }

    .s-content {
        padding: 15px 15px;
    }

    .s-top {
        display: flex;
        border-bottom: 1px solid #cececc;
        padding-bottom: 10px;
    }

    .s-top-text {
        align-self: center;
    }

    .s-bottom {
        padding-top: 20px;
    }

    .btn {
        width: 100%;
        background-color: #44803d;
        font-size: 21px;
        font-weight: lighter;
        color: white;
        border: none;
        padding: 20px 15px;
        cursor: pointer;
        border-radius: 4px;
    }
</style>