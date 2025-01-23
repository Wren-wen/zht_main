<template>
    <div class="Carousel nose">
        <div class="container">
            <div :class="{ item: 1, active: false }">
                <img class="itemimg" :src="urls[urls.length - 2]" alt="">
            </div>
            <div :class="{ item: 1, active: 0 == idx }">
                <img class="itemimg" :src="urls[urls.length - 1]" alt="">
            </div>
            <div :class="{ item: 1, active: i + 1 == idx }" v-for="(url, i) in urls">
                <img class="itemimg" :src="url" alt="">
            </div>
            <div :class="{ item: 1, active: urls.length + 1 == idx }">
                <img class="itemimg" :src="urls[0]" alt="">
            </div>
            <div :class="{ item: 1, active: false }">
                <img class="itemimg" :src="urls[1]" alt="">
            </div>
        </div>
        <div class="dotbox flex">
            <div @mouseenter="idx = i; trigger(0)" @mouseleave="trigger(1)" v-for="i in urls.length"
                :class="['dot', 'pointer', { active: i == idx || (i == 1 && idx == urls.length + 1) || (i == urls.length && idx == 0) }]">

            </div>
        </div>
        <div @click="tolast()" @mouseenter="trigger(0)" @mouseleave="trigger(1)"
            class="array pointer iconfont icon-jiantou0"></div>
        <div @click="tonext()" @mouseenter="trigger(0)" @mouseleave="trigger(1)"
            class="array pointer iconfont icon-jiantou1"></div>
    </div>
</template>

<script setup>
import pubuse from '@/utils/pub-use'
import { ref, reactive, onMounted, nextTick } from 'vue'

const urls = reactive([
    pubuse('轮播图/1.png'),
    pubuse('轮播图/2.png'),
    pubuse('轮播图/3.png'),
    pubuse('轮播图/4.png'),
    pubuse('轮播图/5.png'),
])

const idx = ref(1);
const oxAni = ref(true)

const tolast = () => {
    if (idx.value == 0) {
        oxAni.value = false
        idx.value = urls.length
        setTimeout(() => {
            idx.value = urls.length - 1
            oxAni.value = true
        }, 1)
    } else {
        idx.value = (idx.value - 1 + urls.length + 2) % (urls.length + 2)
    }
}
const tonext = () => {
    if (idx.value == urls.length + 1) {
        oxAni.value = false
        idx.value = 1
        setTimeout(() => {
            idx.value = 2
            oxAni.value = true
        }, 50)
    } else {
        idx.value = (idx.value + 1) % (urls.length + 2)
    }
}

let inter;

const trigger = (i) => {
    if (i) {
        inter = setInterval(() => {
            tonext()
        }, 3000)
    } else {
        clearInterval(inter)
    }
}

trigger(1)

</script>

<style scoped>
.Carousel {
    --width: 100%;
    --padding: 0px;


    width: 100%;
    overflow: hidden;
    position: relative;

}

.container {
    display: flex;
    align-items: flex-start;
    --offset: calc(100%/2 - var(--width)/2);
    transition: v-bind('oxAni ? ".5s" : "0s"');
    transform: translateX(calc(var(--offset) + var(--width) * -1 * v-bind("idx + 1")));
}

.item {
    width: var(--width);
    padding: var(--padding);
    flex-shrink: 0;
    /* transform: scale(.9); */
    transition: .54s;
    transition: v-bind('oxAni ? ".5s" : "0s"');
}

.item.active {
    transform: scale(1);
}

.itemimg {
    width: 100%;
}

.dotbox {
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
    width: 20%;
    display: flex;
    backdrop-filter: blur(10px);
    /* height: 12px; */
}
.dot {
    flex: 1;
    height: 7px;
    /* border-radius: 50%; */
    background-color: var(--hover);
    background-color: rgba(255, 255, 255, 0.4);
    margin: 0 8px;
    transition: .3s;
}

.dot.active {
    opacity: 1;
    height: 7px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
}

.array {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(35, 35, 35, 0.36);
    font-size: 26px;
    background-color: rgba(255, 255, 255, 0.0);
    padding: 40px 10px;
    transition: .3s;
    backdrop-filter: blur(2px);
    border-radius: 16px;
}

.array:hover {
    color: var(--hover);
    background-color: rgba(255, 255, 255, 0.567);
}

.icon-jiantou0 {
    left: 20px;
    font-size: 60px;
}

.icon-jiantou1 {
    right: 20px;
    font-size: 60px;
}
</style>