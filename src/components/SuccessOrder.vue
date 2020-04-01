<template>
    <div id="success-order">
        <div class="s-content">
            <div class="s-top">
                <div><img src="../assets/unnamed.png" height="80px"></div>
                <div class="s-top-text" style="padding-left: 20px;">
                    <div style="padding-bottom: 25px; color: white; font-size: 24px; font-weight: bold;">Ваш заказ успешно принят!</div>
                    <div style="color: #cececc;">Номер заказа: {{order.orderId}}</div>
                </div>
            </div>
            <div class="s-bottom">
                <div style="color: #cececc; padding-bottom: 5px;">Ваш заказ №{{order.orderId}} от {{new Date().toLocaleString()}} успешно создан</div>
                <div style="padding-bottom: 20px; color: #cececc;">Мы свяжемся с Вами в ближайшее время.</div>
                <div style="padding-bottom: 20px; color: #cececc;">Спасибо за заказ!</div>
                <router-link to="/" tag="div" style="text-align: center;">
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
        max-width: 600px;
        text-align: left;
        border-radius: 4px;
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
        padding-bottom: 30px;
    }

    .s-top-text {
        align-self: center;
    }

    .s-bottom {
        padding-top: 30px;
    }

    .btn {
        margin: 0 auto;
        background-color: #4ba073;
        font-size: 21px;
        font-weight: lighter;
        color: white;
        border: none;
        padding: 15px 50px;
        cursor: pointer;
        border-radius: 4px;
    }
</style>