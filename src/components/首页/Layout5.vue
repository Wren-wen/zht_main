<template>
    <div class="Layout5">
        <img class="cover" src="@/assets/轮播图/5.png" alt="">
        <div class="ui">
            <img class="logo" src="@/assets/logo.png" alt="">
            <h1>
                <lan en="专注于无人机研发设计和集成化解决方案" zh="专注于无人机研发设计和集成化解决方案" />
            </h1>
            <div class="bar">
                <div class="item" v-for="i in 4">
                    <img src="@/assets/首页/test.png" alt="">
                    <h3><lan en="模块化理念" zh="模块化理念" /></h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'


</script>

<style scoped>
.Layout5 {
    height: 950px;
    width: 100%;
    margin: 80px 0;
    position: relative;
}

.cover {
    width: 100%;
    height: 100%;
}

.ui {
    position: absolute;
    top: 160px;
    bottom: 240px;
    /* width: 100%; */
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.logo {
    height: 120px;
}

h1 {
    color: white;
    font-size: 50px;
    font-weight: normal;
    margin-bottom: 10px;
}

.bar {
    width: 80%;
    display: flex;
    justify-content: space-between;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 20px;
    font-weight: normal;
}
h3{
    font-size: 24px;
    font-weight: normal
}
.item img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px
}
</style>