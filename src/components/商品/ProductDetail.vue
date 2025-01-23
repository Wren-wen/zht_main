<template>
    <div class="header">
        <div class="path">
            <div @click="goPath(0)" class="node">
                首页
            </div>
            <div @click="goPath(n.id)" class="node" v-for="n in product?.path">
                /
                <lan :en="n.en" :zh="n.zh" />
            </div>
        </div>
        <div class="btnbox">
            <div class="btn1">
                <lan en="desc" zh="介绍" />
            </div>
            <div @click="videopop = true" class="btn1">
                <lan en="video" zh="视频" />
            </div>
            <div @click="parampop = true" class="btn1">
                <lan en="params" zh="参数" />
            </div>
            <div class="btn2">
                <lan en="ask now" zh="立即咨询" />
            </div>
        </div>
    </div>
    <div class="container">
        <div class="content">
            <div class="page1">
                <div class="pleft">
                    <div class="imagebox">
                        <div class="image" :style="{
                            backgroundImage: `url('configuration/image_bed/${product?.image[imgidx]?.src}')`
                        }">

                        </div>
                    </div>
                    <div class="imagebar">
                        <div @click="imgidx = idx" :class="{ litimg: 1, active: idx == imgidx }"
                            v-for="(i, idx) in product?.image">
                            <img :src="`configuration/image_bed/${i.src}`" alt="">
                        </div>
                    </div>
                </div>
                <div class="pright">
                    <div class="tit">
                        <lan :en="product?.title_en" :zh="product?.title" />
                    </div>
                    <div class="tip" v-for="t in product?.tip">
                        <lan :en="t.en" :zh="t.zh" />
                    </div>
                </div>
            </div>
            <frame-container :frame="product?.frame"></frame-container>
            <div class="page2">
                <div class="recommend">
                    <a :href="product?.recommend[recommendidx]?.href ? product?.recommend[recommendidx]?.href : 'javascript:void(0)'"
                        :target="product?.recommend[recommendidx]?.href ? '_blank' : ''">
                        <img :src="`configuration/image_bed/${product?.recommend[recommendidx]?.src}`" alt="">
                    </a>
                    <div class="tabbox">
                        <div @click="recommendidx = idx" :class="{ tab: 1, active: recommendidx == idx }"
                            v-for="(r, idx) in product?.recommend">
                            <div class="tab-txt">
                                <lan :en="r.en" :zh="r.zh" />
                            </div>
                            <div class="tab-dot">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <popup-any :ox="videopop" nopadding="1" @close="videopop = false">
                <div class="popbox">
                    <video :src="`configuration/image_bed/${product?.video}`" controls></video>
                </div>
            </popup-any>
            <popup-any :ox="parampop" nopadding="1" @close="parampop = false">
                <div class="popbox">
                    <img :src="`configuration/image_bed/${product?.table}`" alt="">
                </div>
            </popup-any>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'
import formatDate from '@/utils/time/time'
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const props = defineProps(['product'])

const imgidx = ref(0)

const goPath = (id) => {
    if (id) {
        router.push({
            path: `/category/${id}`, query: {...route.query}
        })
    } else {
        // 首页
        router.push({
            path: '/', query: {...route.query}
        })
    }
}

const recommendidx = ref(0)

const videopop = ref(false)

const parampop = ref(false)

</script>

<style scoped>
.header {
    width: 1920px;
    max-width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    font-size: 22px;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 1;
}

.path {
    display: flex;
    align-items: center;
}

.node {
    padding: 0 4px;
    cursor: pointer;
    user-select: none;
}

.node:hover {
    color: #ff0000;
}

.btnbox {
    display: flex;
    align-items: center;
}

.btn1 {
    margin-left: 20px;
    cursor: pointer;
    user-select: none;
}

.btn1:hover {
    color: #ff0000;
}

.btn2 {
    margin-left: 20px;
    cursor: pointer;
    user-select: none;
    padding: 7px 18px;
    color: white;
    border-radius: 300px;
    background-color: #ff1315;
    transition: .2s;
}

.btn2:hover {
    filter: brightness(.9);
}

.container {
    width: 100%;
    padding: 30px 230px;
    background-color: #f5f5f5;
}

.content {
    width: 100%;
    position: relative;
    background-color: #fff;
    padding: 30px;
}

.page1 {
    display: flex;
    padding-bottom: 20px;
    border-bottom: solid 2px #ccc;
}

.pleft {
    width: 50%;
}

.image {
    width: 100%;
    height: 500px;
    transition: .2s linear;
    background: no-repeat center center /contain;
}

.imagebar {
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding: 0 20px;
}

.litimg {
    flex: 1;
    height: 100px;
    opacity: .5;
    cursor: pointer;
    overflow: hidden;
}

.litimg.active,
.litimg:hover {
    opacity: 1;
}

.litimg img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.pright {
    flex: 1;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* justify-content: space-around; */
}

.tit {
    font-size: 30px;
    padding: 24px 0;
    border-bottom: solid 2px #ccc;
}

.tip {
    font-size: 22px;
}

.page2 {
    display: flex;
    justify-content: center;
}

.recommend {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.recommend img {
    width: 1200px;
    height: 600px;
}

.tabbox {
    margin-top: 20px;
    display: flex;
}

.tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 26px;
    cursor: pointer;
    user-select: none;
}
.tab-txt{
    width: 200px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.tab-dot {
    margin-top: 10px;
    width: 200px;
    height: 10px;
    background-color: #dddddd;
}

.tab.active .tab-dot {
    background-color: #ff1315;
}
.popbox{
    background-color: #fff;
    padding: 30px;
    border-radius: 30px;
}
.popbox video{
    width: 66vw;
    height: auto;
    max-height: 80vh;
}
.popbox img{
    width: auto;
    height: auto;
    max-width: 66vw;
    max-height: 80vh;
}
</style>