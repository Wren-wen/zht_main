<template>
    <div class="Title1">
        <div class="left">
            <div class="icon iconfont icon-wurenji"></div>
            <lan en="PRODUCT RANGE" zh="PRODUCT RANGE" />
        </div>
        <div class="right">
            <cards-icon1 style="margin-right: 1rem;" height="70" offset="90" :urls="urls"></cards-icon1>
            <button0>
                <lan en="All Accessories" zh="全部配件" />
            </button0>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'
import pubuse from '@/utils/pub-use'


const urls = [
    pubuse('配件/6.png'),
    pubuse('配件/5.png'),
    pubuse('配件/4.png'),
    pubuse('配件/3.png'),
    pubuse('配件/2.png'),
    pubuse('配件/1.png'),
]
</script>

<style scoped>
.Title1 {
    font-size: 46px;
    color: var(--black);
    color: rgb(59, 59, 59);
    font-weight: bold;
    /* margin: 30px 0; */
    /* padding: 10px 0; */
    margin-top: 10px;
    height: 100px;
    padding: 0 28px;


    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0px;
    background-color: rgb(199, 64, 64);
    background-color: rgba(255, 255, 255, 0.485);
    /* box-shadow: 0 -3px 6px rgba(0, 0, 0, .08); */
    backdrop-filter: blur(10px);
    overflow: hidden;
}

.left {
    display: flex;
    align-items: center;
}
.right {
    display: flex;
    align-items: center;
}

.text {
    font-size: 10px;
}

.icon {
    padding: 12px 0;
    margin-right: 20px;
    font-size: 36px;
    color: white;
    border-radius: 10px;
    background-color: var(--black);
}
</style>