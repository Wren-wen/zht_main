<template>
    <div class="Pop_a">
        <div class="container">
            <div @click="goProduct(1)" class="item">
                <div class="title first-title"><lan en="KEEL Frame" zh="KEEL 机架" /></div>
                <div class="tip"><lan en="Modular design, classic and popular" zh="模块化设计, 经典畅销" /></div>
                <img src="@/assets/目录/frame/KEEL.jpg" alt="">
            </div>
            <div class="item mid">
                <div class="title"><lan en="KEEL MINI Frame" zh="KEEL MINI 机架" /></div>
                <div class="tip"><lan en="Ultra-light and compact, your first choice for DIY" zh="超轻超小巧, 您的DIY首选" /></div>
                <img src="@/assets/目录/frame/KEEL_MINI.jpg" alt="">
            </div>
            <div class="item">
                <div class="title"><lan en="KEEL PLUS Frame" zh="KEEL PLUS 机架" /></div>
                <div class="tip"><lan en="30kg heavy payload pioneer" zh="30公斤重载先锋" /></div>
                <img src="@/assets/目录/frame/KEEL_PLUS.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()


const goProduct = (id) => {
    router.push({ name: 'product', params: { id: id }, query: {...route.query} })
}

</script>

<style lang="less" scoped>
.Pop_a {
    padding: 0px 140px;
    padding-bottom: 40px;
    --margin: 30px;

    height: 600px;
    width: 100%;
    background-color: #dcdcdc;
}
.container{
    width: 100%;
    height: 100%;
    display: flex;
}
.item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.item.mid{
    margin: 0 var(--margin);
}
.title{
    font-size: 20px;
    color: black;
    height: 80px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.first-title {
    position: relative;
}
.first-title::after {
    content: "";
    position: absolute; 
    left: -150px;
    overflow-x: hidden;
    bottom: 0; 
    width: 100vw;
    height: 3px; 
    background-color: #bebebe;
}
.tip{
    color: black;
    font-size: 19px;
    height: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
img{
    width: 100%;
    /* height: 600px; */
    border-radius: 12px;
    cursor: pointer;
}
</style>