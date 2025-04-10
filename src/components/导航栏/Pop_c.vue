<template>
    <div class="Pop_c">
        <div class="item-container">
            <div :class="{
                item: 1,
                item3: idx == 2,
            }" v-for="(i, idx) in infos">
                <div class="title">
                    <lan :en="i.en" :zh="i.zh" />
                </div>
                <div @click="goCategory(j.category)" class="bar nose pointer" :class="`bar${idx}_${j_idx}`" v-for="(j, j_idx) in i.bar">
                    <img class="one" :src="j.img" alt="">
                    <h2>
                        <lan :en="j.en" :zh="j.zh" />
                    </h2>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="item2" v-for="i in info2">
                <h3>
                    <lan :en="i.en" :zh="i.zh" />
                </h3>
                <img class="two" :src="isZh ? i.imgZh : i.imgEn" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from 'vue'
import pubuse from '@/utils/pub-use'
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

let isZh = inject('isZh');


const goCategory = (id) => {
    router.push({
        name: 'category',
        query: {
            ...route.query,
        },
        params: {
            id: id
        }
    })
}

const info2 = reactive([
    {
        zh: '超轻碳纤维桨',
        en: 'Ultra-light Carbon Fiber Propellers',
        imgEn: pubuse('目录/accessory/螺旋桨_EN.jpg'),
        imgZh: pubuse('目录/accessory/螺旋桨_CN.jpg'),
    },
    {
        zh: '双RTK厘米级定位',
        en: 'Dual RTK Centimeter-level Positioning',
        imgEn: pubuse('目录/accessory/ZED-F9P_EN.jpg'),
        imgZh: pubuse('目录/accessory/ZED-F9P_CN.jpg'),
    },
    {
        zh: '方形智能四光吊舱',
        en: 'Intelligent Multi-sensor Pod',
        imgEn: pubuse('目录/accessory/ZH30ATL_EN.jpg'),
        imgZh: pubuse('目录/accessory/ZH30ATL_CN.jpg'),
    },
    {
        zh: '高能量倍率电池',
        en: 'High Energy Density Battery',
        imgEn: pubuse('目录/accessory/大电池_EN.jpg'),
        imgZh: pubuse('目录/accessory/大电池_CN.jpg'),
    },
])

const infos = reactive([
    {
        zh: '动力系统',
        en: 'Power System',
        bar: [
            {
                img: pubuse('目录/accessory/螺旋桨.jpg'),
                zh: '螺旋桨',
                en: 'Propeller',
                category: '1' //分类路径节点
            },
            {
                img: pubuse('目录/accessory/电机.jpg'),
                zh: '电机',
                en: 'Motor'
            },
            {
                img: pubuse('目录/accessory/电调.jpg'),
                zh: '电调',
                en: 'ESC',
            },
            {
                img: pubuse('目录/accessory/单轴动力.jpg'),
                zh: '单轴动力',
                en: 'Standard',
            },
            {
                img: pubuse('目录/accessory/共轴动力.jpg'),
                zh: '共轴动力',
                en: 'Coaxial'
            },
        ],
    },
    {
        zh: '飞控系统',
        en: 'Flight Control System',
        bar: [
            {
                img: pubuse('目录/accessory/飞控.jpg'),
                zh: '飞控',
                en: 'Flight Control'
            },
            {
                img: pubuse('目录/accessory/GPS_RTK.jpg'),
                zh: 'GPS/RTK',
                en: 'GPS/RTK'
            },
        ],
    },
    {
        zh: '链路',
        en: 'Link',
        bar: [
            {
                img: pubuse('目录/accessory/图传数传.jpg'),
                zh: '图传数传',
                en: 'Image/data',
            },
            {
                img: pubuse('目录/accessory/遥控器.jpg'),
                zh: '遥控器',
                en: 'Remote Control',
            },
        ],
    },
    {
        zh: '电源管理',
        en: 'Power Management',
        bar: [
            {
                img: pubuse('目录/accessory/电源模块.jpg'),
                zh: '电源模块',
                en: 'Power module',
            },
            {
                img: pubuse('目录/accessory/电池.jpg'),
                zh: '电池',
                en: 'Battery',
            },
            {
                img: pubuse('目录/accessory/充电器.jpg'),
                zh: '充电器',
                en: 'Battery charger',
            }
        ],
    },
    {
        zh: '载荷设备',
        en: 'Payload Equipment',
        bar: [
            {
                img: pubuse('目录/accessory/吊舱.jpg'),
                zh: '吊舱',
                en: 'Gmbal',
            },
            {
                img: pubuse('目录/accessory/抛投装置.jpg'),
                zh: '抛投装置',
                en: 'Air drop device',
            },
            {
                img: pubuse('目录/accessory/喊话器.jpg'),
                zh: '喊话器',
                en: 'Megaphone',
            },
            {
                img: pubuse('目录/accessory/探照灯.jpg'),
                zh: '探照灯',
                en: 'Searchlight'
            },
        ],
    },
    {
        zh: '其他',
        en: 'Other',
        bar: [
            {
                img: pubuse('目录/accessory/线材配件.jpg'),
                zh: '线材配件',
                en: 'Wire fitting',
            },
            {
                img: pubuse('目录/accessory/非标配件.jpg'),
                zh: '非标配件',
                en: 'Non-standard parts',
            },
        ],
    },
])

</script>

<style lang="less" scoped>
.Pop_c {
    height: 760px;
    padding: 0px 0 40px 210px;
    background-color: #dcdcdc;
}

.item-container {
    display: flex;
    align-items: flex-start;
}

.item {
    // margin-right: 190px;
    width: 240px;
    margin-right: 35px;
}


.title {
    position: relative;
    font-size: 20px;
    font-weight: 500;
    padding-top: 20px;
    padding-bottom: 20px;
}

.title::after {
    content: "";
    position: absolute;
    left: -1000px;
    overflow-x: hidden;
    width: 1000vw;
    bottom: 0;
    height: 3px;
    background-color: #bebebe;
}

.item3 {
    // margin-right: 232px;
}

h1,
h2,
h3 {
    font-weight: normal;
}

h1 {
    color: black;
    font-size: 21px;
    height: 100px;
    display: flex;
    align-items: center;
}

.bar {
    display: flex;
    margin-top: 35px;
    align-items: center;
    position: relative;
}

img.one {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #595758;
}

h2 {
    color: #595758;
    font-size: 19px;
    white-space: nowrap;
    position: absolute;
    left: 45px;
    line-height: 30px;
}

h3 {
    color: #595758;
    margin-top: 80px;
    margin-bottom: 30px;
    font-size: 20px;
}

img.two {
    width: 350px;
    height: 240px;
    background-color: #efefef;
    border-radius: 12px;
}

.item2 {
    margin-right: 30px;
}

.item2 h3 {
    height: 100px;
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 19px;
    color: black;
}
</style>