<template>
    <div id="bottom-text" class="layer4">
        <span>{{$t('b_text3')}}</span>
    </div>
</template>

<script>
    export default {
        name: "BottomText"
    }
</script>

<style scoped>
    .layer4 span {
        color: #5d5d5d;
        font-size: 12px;
        position: relative;
        top: 27px;
    }

    .layer4 {
        background-color: #1e1e1e;
        height: 70px;
    }
</style>