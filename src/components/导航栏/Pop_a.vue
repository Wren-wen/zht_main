<template>
    <div class="Pop_a">
        <div class="container">
            <div @click="goProduct(1)" class="item">
                <div class="title"><lan en="KEEL" zh="KEEL" /></div>
                <div class="tip"><lan en="模块化设计, 经典畅销" zh="模块化设计, 经典畅销" /></div>
                <img src="@/assets/比例图/1.png" alt="">
            </div>
            <div class="item mid">
                <div class="title"><lan en="KEEL MINI" zh="KEEL MINI" /></div>
                <div class="tip"><lan en="超轻超小巧, 您的DIY首选" zh="超轻超小巧, 您的DIY首选" /></div>
                <img src="@/assets/比例图/1.png" alt="">
            </div>
            <div class="item">
                <div class="title"><lan en="KEEL PLUS" zh="KEEL PLUS" /></div>
                <div class="tip"><lan en="30公斤重载先锋" zh="30公斤重载先锋" /></div>
                <img src="@/assets/比例图/1.png" alt="">
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

<style scoped>
.Pop_a {
    padding: 0px 140px;
    padding-bottom: 50px;
    --margin: 30px;

    height: 600px;
    width: 100%;
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
    height: 100px;
    display: flex;
    align-items: center;
}
.tip{
    color: #898989;
    font-size: 19px;
    height: 100px;
    display: flex;
    align-items: center;
}
img{
    width: 100%;
    /* height: 600px; */
}
</style>