<template>
    <padding>
        <div class="Layout2">
            <div @mouseenter="activeIndex = idx" :class="{ item: 1, active: delay_idx == idx }" 
                v-for="(item, idx) in list" :style="{'background-image': 'url('+ (delay_idx == idx ? item.realPic : item.linePic) +')'}">
                <div class="wrapper" v-if="delay_idx != idx">
                    <div class="title">
                        <span v-if="!isZh">{{ item.en.name }} </span>
                        <span v-if="isZh">{{ item.zh.name }} &nbsp;</span>
                        <br v-if="!isZh">
                        <span v-if="!isZh">{{ item.en.title }}</span>
                        <span v-if="isZh">{{ item.zh.title }}</span>
                    </div>
                    <div class="tip">
                        <span v-if="!isZh">{{ item.en.tip }}</span>
                        <span v-if="isZh">{{ item.zh.tip }}</span>
                    </div>
                </div>
                <div class="back" v-else>
                    <div class="sub-title">
                        <span v-if="!isZh">{{ item.en.series }} </span>
                        <span v-if="isZh">{{ item.zh.series }} &nbsp;</span>
                    </div>
                    <div class="title">
                        <span v-if="!isZh">{{ item.en.name }} </span>
                        <span v-if="isZh">{{ item.zh.name }} &nbsp;</span>
                    </div>
                    <div class="tip">
                        <span v-if="!isZh">{{ item.en.tip }}</span>
                        <span v-if="isZh">{{ item.zh.tip }}</span>
                    </div>
                    <div class="more-btn">
                        <div v-if="!isZh">Learn more</div>
                        <div v-if="isZh">了解更多</div>
                        <div class="triangle">▶</div>
                    </div>
                </div>
            </div>
        </div>
    </padding>
</template>

<script setup>
import { ref, reactive, onMounted, watch, inject } from 'vue'
import pubuse from '@/utils/pub-use'

const list = reactive([
    {
        linePic: '/src/assets/首页/line_pic/KEEL_PLUS.jpg',
        realPic: '/src/assets/首页/real_pic/KEEL_PLUS.jpg',
        en: {
            series: 'KEEL Series',
            name: 'KEEL PLUS',
            title: 'Heavy Payload Pioneer',
            tip: 'Suitable for payload from 5 to 30 kg',
        },
        zh: {
            series: 'KEEL 系列',
            name: 'KEEL PLUS',
            title: '重载先锋',
            tip: '适用于5-30公斤载重',
        }
    },
    {
        linePic: '/src/assets/首页/line_pic/KEEL.jpg',
        realPic: '/src/assets/首页/real_pic/KEEL.jpg',
        en: {
            series: 'KEEL Series',
            name: 'KEEL',
            title: 'Long Endurance',
            tip: 'Suitable for payload from 1 to 10 kg',
        },
        zh: {
            series: 'KEEL 系列',
            name: 'KEEL',
            title: '长效续航',
            tip: '适用于1-10公斤载重',
        }
    },
    {
        linePic: '/src/assets/首页/line_pic/KEEL_MINI.jpg',
        realPic: '/src/assets/首页/real_pic/KEEL_MINI.jpg',
        en: {
            series: 'KEEL Series',
            name: 'KEEL MINI',
            title: 'Lightweight Racing',
            tip: 'Suitable for payload from 1 to 10 kg',
        },
        zh: {
            series: 'KEEL 系列',
            name: 'KEEL MINI',
            title: '轻巧竞速',
            tip: '适用于1-10公斤载重',
        }
    },
])

const activeIndex = ref(0)
const delay_idx = ref(0)

let isZh = inject('isZh');
let timer = null
let isShowCard = ref(false);

watch(activeIndex, () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        delay_idx.value = activeIndex.value
    }, 100)
})

</script>

<style lang="less" scoped>
.Layout2 {
    --width: 65%;

    width: 100%;
    height: 600px;
    display: flex;
}

.item {
    height: 100%;
    width: calc(calc(100% - var(--width)) / v-bind("list.length - 1"));
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: .4s;
    background-size: auto 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .wrapper {
        margin-left: 13px;
        margin-bottom: 15px;
        .title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .tip {
            font-size: 13px;
            color: #9a9a9a;
        }
    }

    .back {
        margin-left: 30px;
        margin-bottom: 30px;
        .sub-title {
            font-size: 18px;
            color: #9a9a9a;
            margin-bottom: 10px;
        }
        .title {
            font-size: 26px;
            font-weight: bold;
            margin-bottom: 5px;
            margin-bottom: 10px;
        }
        .tip {
            font-size: 13px;
            color: #9a9a9a;
            margin-bottom: 15px;
        }
        .more-btn {
            position: relative;
            // bottom: 18px;
            display: inline-flex;
            align-items: center;
            background-color: #ff1215;
            color: #fffeff;
            text-align: center;
            letter-spacing: 1.5px;
            font-size: 14px;
            border-radius: 18px;
            padding: 4px 11px;
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

    &:first-child {
        border-radius: 12px 0 0 12px;
    }
    &:nth-child(2) {
        border-radius: 12px 0 0 12px;
    }
    &:last-child {
        border-radius: 12px 12px 12px 12px;
    }
}
.item.active {
    width: var(--width);
}
</style>