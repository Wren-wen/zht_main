<template>
    <div class="Layout6 nose">
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
        <div @click="tolast()" @mouseenter="trigger(0)" @mouseleave="trigger(1)"
            class="array pointer iconfont icon-jiantou0"></div>
        <div @click="tonext()" @mouseenter="trigger(0)" @mouseleave="trigger(1)"
            class="array pointer iconfont icon-jiantou1"></div>
    </div>
    <carousel-pic-dot></carousel-pic-dot>
    <div class="textbox">
        <lan :en="picture?.title_en" :zh="picture?.title" />
    </div>
</template>

<script setup>
import pubuse from '@/utils/pub-use'
import { ref, provide, onMounted, computed } from 'vue'

const props = defineProps(['picture'])

// const urls = reactive([])

const urls = computed(() => {
    return props.picture?.image?.map(i=>`configuration/image_bed/${i.src}`) || []
})

provide('urls', urls)


const idx = ref(1);
const oxAni = ref(true)

provide('idx', idx)
provide('oxAni', oxAni)


const tolast = () => {
    if (idx.value == 0) {
        oxAni.value = false
        idx.value = urls.value.length
        setTimeout(() => {
            idx.value = urls.value.length - 1
            oxAni.value = true
        }, 1)
    } else {
        idx.value = (idx.value - 1 + urls.value.length + 2) % (urls.value.length + 2)
    }
}
const tonext = () => {
    if (idx.value == urls.value.length + 1) {
        oxAni.value = false
        idx.value = 1
        setTimeout(() => {
            idx.value = 2
            oxAni.value = true
        }, 50)
    } else {
        idx.value = (idx.value + 1) % (urls.value.length + 2)
    }
}

let inter;

const trigger = (i) => {
    if (i) {
        return;
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
.Layout6 {
    --width: 38.5%;
    --widthImg: 123%;
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
    transform: scale(.47);
    transition: .54s;
    transition: v-bind('oxAni ? ".5s" : "0s"');
    border-radius: 30px;
    /* overflow: hidden; */
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
}
.item.active {
    border-radius: 0px;
    transform: scale(1);
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, .2));
}
.itemimg {
    width: var(--widthImg);
    position: relative;
    transition: v-bind('oxAni ? ".5s" : "0s"');
    filter: grayscale(1) brightness(0.7);
}

.item.active .itemimg{
    opacity: 1;
    filter: unset;
}
.dotbox {
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    display: flex;
    backdrop-filter: blur(10px);
    height: 20px;
}

.dot {
    flex: 1;
    height: 10px;
    /* border-radius: 50%; */
    background-color: var(--grey);
    background-color: rgba(255, 255, 255, 0.4);
    margin: 0 8px;
    transition: .3s;
}

.dot.active {
    opacity: 1;
    height: 20px;
    background-color: var(--black);
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
}

.array {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.6);
    color: rgba(4, 4, 4, 0.4);
    font-size: 30px;
    background-color: rgba(4, 4, 4, 0.3);
    background-color: rgba(255, 255, 255, 0.6);
    padding: 48px 16px;
    transition: .3s;
    backdrop-filter: blur(10px);
    border-radius: 50px;
    overflow: hidden;
}

.array:hover {
    color: var(--white);
    background-color: rgba(255, 255, 255, 0.567);
    background-color: rgba(4, 4, 4, 0.4);
    background-color: rgba(255, 255, 255, 0.6);
}

.icon-jiantou0 {
    left: 20px;
    font-size: 40px;
}

.icon-jiantou1 {
    right: 20px;
    font-size: 40px;
}
.textbox{
    width: 100%;
    text-align: center;
    white-space: pre-wrap;
    font-size: 20px;
    padding-bottom: 40px;
}
</style>