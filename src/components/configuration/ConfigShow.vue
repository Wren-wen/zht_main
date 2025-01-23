<template>
    <div @mouseenter="habit ? real = true : 0" @mouseleave="0" ref="configShow" :class="{ConfigShow:1,scrollBar:1,active: real}">
        <div class="title">
            <div class="tit">
                预览组件原始宽度约为&nbsp;<span>{{ trueWidth2Px }}</span>&nbsp;px, 用来参考左侧布局
            </div>
            <div class="line"></div>
            <div @click="switchLang" class="zhen pointer nose">
                <lan en="英" zh="中" />
            </div>
            <div @click="real = !real;habit=real;" class="real pointer nose">
                {{ real ? '原始宽' : '预览宽' }}
            </div>
        </div>
        <div ref="container" class="container">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, inject, onMounted, onUpdated } from 'vue'
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const isZh = inject('isZh')

const real = ref(false)

let habit = false

const scaleValue = ref(1)

const container = ref()
const configShow = ref()

const trueWidth2Px = ref()
const trueWidth2Rem = ref()
const getPx = () => {
    // 保留5位小数 
    return (container.value.offsetWidth/parseFloat(document.documentElement.style.fontSize)*16).toFixed(2)
}
const getRem = () => {
    // 保留5位小数 
    return (container.value.offsetWidth/parseFloat(document.documentElement.style.fontSize))
}
const refresh = () => {
    const containerWidth = container.value.offsetWidth
    const configShowWidth = configShow.value.offsetWidth - 0
    scaleValue.value = configShowWidth / containerWidth
    trueWidth2Px.value = getPx()
    trueWidth2Rem.value = getRem()
}
const switchLang = () => {
    if (isZh.value) {
        // 将当前路由的query参数lang改为en
        router.push({ query: { ...route.query, lang: 'en' } })
    } else {
        // 将当前路由的query参数lang改为zh
        router.push({ query: { ...route.query, lang: 'zh' } })
    }

}

onUpdated(refresh)
onMounted(refresh)
</script>

<style scoped>
.ConfigShow{
    width: 100%;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    position: relative;
    background-color: #fffae8;
}
.ConfigShow.active{
    right: 0;
    width: v-bind('trueWidth2Rem + "rem"');
    position: absolute;
    z-index: 999;
    box-shadow: -10px 0 10px rgba(0, 0, 0, 0.198);
}
.title{
    border-left: solid 4px red;
    border-right: solid 4px red;
    position: absolute;
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    height: 80px;
    width: 100%;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    color: red;
    background-color: rgba(255, 250, 232, 0.529);
    background-color: rgba(255, 255, 255, 0.6);
    transition: .3s;
}
.ConfigShow.active .title{
    transform: translateY(-80px);
}
.title .line{
    border: solid 3px red;
    width: 100%;
    position: absolute;
    z-index: -1;
    /* 中间挖空矩形 */
    /* clip-path: inset(0px 100px 0px 10px);  */
    mask-image: linear-gradient(to right,  red 0%,red 12%,transparent 12%, transparent 88%,red 88%);
}
.title .tit{
    /* background-color: rgba(255, 250, 232, 1); */

}
.zhen{
    position: absolute;
    width: 64px;
    height: 64px;
    right: min(3vh, 30px);
    top: calc(100vh - 120px);
    transform: translateY(-100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: bold;
    color: #232323;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.198);
    background-color: rgb(255, 255, 255);
    transition: .3s;
}
.ConfigShow.active .zhen{
    transform: translateY(calc(-100% + 80px));
}
.real{
    position: absolute;
    height: 64px;
    padding: 0 20px;
    right: min(3vh, 30px);
    top: calc(100vh - 30px);
    transform: translateY(-100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: bold;
    font-size: 22px;
    color: #232323;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.198);
    background-color: rgb(255, 255, 255);
    transition: .3s;
}
.ConfigShow.active .real{
    transform: translateY(calc(-100% + 80px));
}
.container{
    transition: top .3s;
    position: absolute;
    top: 80px;
    left: 0;
    transform-origin: 0 0;
    transform: scale(v-bind("scaleValue"));
}
.ConfigShow.active .container{
    top: 0;
}
</style>