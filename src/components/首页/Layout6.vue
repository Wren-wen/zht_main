<template>
    <div class="Layout6 nose">
        <div class="top">
            <div class="container">
                <!-- <div :class="{ item: 1, active: false }">
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
                </div> -->
                <div :class="{ item: 1, active: idx == index - 1 }" v-for="(item, index) in data">
                    <img class="itemimg" :src="`configuration/image_bed/${item?.cover}`" alt="">
                    <div class="red-line"></div>
                    <div class="title-wrapper">
                        <span v-if="!isZh">{{ item?.title_en }}</span>
                        <span v-else>{{ item?.title }}</span>
                    </div>
                </div>
            </div>
            <div v-if="0" class="dotbox flex">
                <div @mouseenter="idx = i; trigger(0)" @mouseleave="trigger(1)" v-for="i in urls.length"
                    :class="['dot', 'pointer', { active: i == idx || (i == 1 && idx == urls.length + 1) || (i == urls.length && idx == 0) }]">

                </div>
            </div>
            <div @click="tolast()" @mouseenter="trigger(0)" @mouseleave="trigger(1)"
                class="array pointer iconfont icon-jiantou0"></div>
            <div @click="tonext()" @mouseenter="trigger(0)" @mouseleave="trigger(1)"
                class="array pointer iconfont icon-jiantou1"></div>
        </div>
        <div class="bottom">
            <div class="more-btn">
                <div v-if="!isZh">More news</div>
                <div v-else>更多新闻</div>
                <div class="triangle">▶</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import pubuse from '@/utils/pub-use'
import { ref, reactive, onMounted, nextTick, inject } from 'vue'


const idx = ref(2); // now choose
const oxAni = ref(true)

let INDEX = inject('INDEX');
let isZh = inject('isZh');
let data = ref([]);

const tolast = () => {
    if (idx.value == 0) {
        oxAni.value = false
        idx.value = data.value.length
        setTimeout(() => {
            idx.value = data.value.length - 1
            oxAni.value = true
        }, 1)
    } else {
        idx.value = (idx.value - 1 + data.value.length + 2) % (data.value.length + 2)
    }
}
const tonext = () => {
    if (idx.value == data.value.length + 1) {
        oxAni.value = false
        idx.value = 1
        setTimeout(() => {
            idx.value = 2
            oxAni.value = true
        }, 50)
    } else {
        idx.value = (idx.value + 1) % (data.value.length + 2)
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

onMounted(() => {
    data.value = Object.values(INDEX.article)?.slice(0, 5).filter(a => {
        return Object.values(a?.tags)[0].zh === '公司新闻';
    })
})
</script>

<style lang="less" scoped>
.Layout6 {
    --width: 620px;
    --padding: 0px;


    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
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
    transform: scale(.9);
    transition: .54s;
    transition: v-bind('oxAni ? ".5s" : "0s"');
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    .red-line {
        height: 5px;
        background-color: #ff1315;
    }
    .title-wrapper {
        background-color: #e7e7e7;
        height: 45px;
        line-height: 45px;
        font-size: 17px;
        font-weight: bold;
        letter-spacing: 0.3px;
        text-indent: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
.item::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    // background-color: var(--hover);
    transition: .4s;
    transition: v-bind('oxAni ? ".4s" : "0s"');
}
.item.active {
    border-radius: 12px;
    transform: scale(1);
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, .2));
}
.item.active::after{
    opacity: 0;
}
.itemimg {
    width: 100%;
    height: calc(var(--width) / 1.77);
    object-fit: cover;
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
    font-size: 30px;
    background-color: rgba(4, 4, 4, 0.3);
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
}

.icon-jiantou0 {
    left: 20px;
    font-size: 40px;
}

.icon-jiantou1 {
    right: 20px;
    font-size: 40px;
}

.bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    .more-btn {
        position: relative;
        // bottom: 18px;
        display: inline-flex;
        align-items: center;
        background-color: #ff1215;
        color: #fffeff;
        text-align: center;
        letter-spacing: 1px;
        font-size: 16px;
        border-radius: 18px;
        padding: 6px 11px;
        // position: relative;
        // left: 50%;
        // transform: translateX(-50%);
        cursor: pointer;
        .triangle {
            font-size: 12px;
            margin-left: 4px;
        }
    }
}
</style>