<template>
    <div class="assets">
        <div class="title">
            <lan en="资料下载" zh="资料下载" />
        </div>
        <div class="container">
            <div class="tabbar">
                <div @click="tabidx = idx" :class="{
                    tab: 1,
                    active: idx === tabidx
                }" v-for="(tab,idx) in tablist">
                    <div>{{ tab.name }}</div>
                    <div class="dot"></div>
                </div>
            </div>
            <div class="content">
                <div class="item" v-for="item in data">
                    <div class="cover">
                        <img :src="`configuration/image_bed/${item?.cover?.src}`" alt="">
                    </div>
                    <div class="botbox">
                        <div @click="0" class="btn">
                            <lan en="在线观看" zh="在线观看" />
                        </div>
                        <div @click="0" class="btn">
                            <lan en="下载" zh="下载" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'

const tabidx = ref(0)

const tablist = [
    {
        name: 'KEEL',
        tag: 1, // 分类id，可自己指定用于筛选类别
    },
    {
        name: 'KEEL MINI',
        tag: 1, // 分类id，可自己指定用于筛选类别
    },
    {
        name: 'KEEL PLUS',
        tag: 1, // 分类id，可自己指定用于筛选类别
    },
    {
        name: 'KEEL PRO',
        tag: 1, // 分类id，可自己指定用于筛选类别
    },
    {
        name: 'KEEL MAX',
        tag: 1, // 分类id，可自己指定用于筛选类别
    },
]
const data = reactive([{}])
</script>

<style scoped>
.assets {
    width: 100%;
}

.title {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
}

.tabbar {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    width: 100%;
    background-color: #fff;
}

.content {
    min-height: 70vh;
    width: 100%;
    position: relative;
    --gap: 30px;
    padding: 0 calc(150px - var(--gap)/2);
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}
.tabbar{
    padding: 0 150px;
    width: 100%;
    display: flex;
}
.tab{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: 26px;
    position: relative;
    padding-bottom: 10px;
    border-bottom: solid 2px #666;
    user-select: none;
    cursor: pointer;
}
.dot{
    position: absolute;
    height: 4px;
    width: 50px;
    bottom: -2px;
    background-color: rgb(172, 172, 172);
}
.tab.active .dot{
    background-color: red;
}
.item {
    /* width: 377px; */
    width: calc(calc(100% - var(--gap)*4) / 4);
    height: 480px;
    margin: calc(var(--gap)/2);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px #ccc;
}

.cover {
    flex: 1;
    overflow: hidden;
}

.cover img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.botbox {
    height: 120px;
    margin: 0 30px;
    border-top: solid 2px #666;
    display: flex;
    align-items: center;
    font-size: 20px;
    justify-content: space-evenly;
}

.txtbar {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
}

.btn {
    color: white;
    padding: 4px 0;
    width: 100px;
    text-align: center;
    border-radius: 8000px;
    cursor: pointer;
    user-select: none;
    background-color: #ff1315;
}
</style>