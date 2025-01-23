<template>
    <div class="Pop_c">
        <div class="item-container">
            <div :class="{
                item: 1,
                item3: idx == 2,
            }" v-for="(i, idx) in infos">
                <h1>
                    <lan :en="i.h1" :zh="i.h1" />
                </h1>
                <div @click="goCategory(j.category)" class="bar nose pointer" v-for="j in i.bar">
                    <img class="one" :src="j.img" alt="">
                    <h2>
                        <lan :en="j.h2" :zh="j.h2" />
                    </h2>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="item2" v-for="i in info2">
                <h3>
                    <lan :en="i.h3" :zh="i.h3" />
                </h3>
                <img class="two" :src="i.img" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'
import pubuse from '@/utils/pub-use'
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()


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
        h3: '超轻碳纤维桨',
        img: pubuse('比例图/350x300.png'),
    },
    {
        h3: '双RTK厘米级定位',
        img: pubuse('比例图/350x300.png'),
    },
    {
        h3: '四光4K方形吊舱',
        img: pubuse('比例图/350x300.png'),
    },
    {
        h3: '高能量倍率电池',
        img: pubuse('比例图/350x300.png'),
    },
])

const infos = reactive([
    {
        h1: '动力系统',
        bar: [
            {
                img: pubuse('比例图/1x1.png'),
                h2: '螺旋桨',
                category: '1' //分类路径节点
            },
            {
                img: pubuse('比例图/1x1.png'),
                h2: '电机'
            },
            {
                img: pubuse('比例图/1x1.png'),
                h2: '电调'
            },
            {
                img: pubuse('比例图/1x1.png'),
                h2: '单轴动力'
            },
            {
                img: pubuse('比例图/1x1.png'),
                h2: '共轴动力'
            },
        ],
    },
    {
        h1: '飞控系统',
        bar: [
            {
                img: pubuse('比例图/1x1.png'),
                h2: '飞控'
            },
            {
                img: pubuse('比例图/1x1.png'),
                h2: 'GPS/RTK'
            },
        ],
    },
    {
        h1: '链路',
        bar: [
            {
                img: pubuse('比例图/1x1.png'),
                h2: '图传数传'
            },
            {
                img: pubuse('比例图/1x1.png'),
                h2: '遥控器'
            },
        ],
    },
    {
        h1: '电源管理',
        bar: [
            {
                img: pubuse('比例图/1x1.png'),
                h2: '电源模块'
            },
            {
                img: pubuse('比例图/1x1.png'),
                h2: '电池'
            },
            {
                img: pubuse('比例图/1x1.png'),
                h2: '充电器'
            }
        ],
    },
    {
        h1: '载荷设备',
        bar: [
            {
                img: pubuse('比例图/1x1.png'),
                h2: '吊舱'
            },
            {
                img: pubuse('比例图/1x1.png'),
                h2: '抛放装置'
            },
            {
                img: pubuse('比例图/1x1.png'),
                h2: '喊话器'
            },
            {
                img: pubuse('比例图/1x1.png'),
                h2: '探照灯'
            },
        ],
    },
    {
        h1: '其他',
        bar: [
            {
                img: pubuse('比例图/1x1.png'),
                h2: '线材配件'
            },
            {
                img: pubuse('比例图/1x1.png'),
                h2: '非标配件'
            },
        ],
    },
])

</script>

<style scoped>
.Pop_c {
    height: 800px;
    padding: 0px 0 40px 180px;
}

.item-container {
    display: flex;
    align-items: flex-start;
}

.item {
    margin-right: 190px;
}

.item3 {
    margin-right: 232px;
}

h1,
h2,
h3 {
    font-weight: normal;
}

h1 {
    color: black;
    font-size: 20px;
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
    left: 50px;
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
    background-color: #efefef
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