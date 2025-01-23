<template>
    <div class="videoCenter">
        <div class="title">
            <lan en="视频中心" zh="视频中心" />
        </div>
        <div class="container">
            <div class="tabbar">
                <div @click="tabidx = tab.tag" :class="{
                    tab: 1,
                    active: tab.tag == tabidx
                }" v-for="(tab, idx) in tablist">
                    <div>{{ tab.name }}</div>
                    <div class="dot"></div>
                </div>
            </div>
            <div class="content">
                <div @click="goArticle(item.id)" class="item" v-for="item in data">
                    <div class="cover">
                        <img :src="`configuration/image_bed/${item?.cover}`" alt="">
                    </div>
                </div>
            </div>
            <div class="switchbox">
                <div class="switch">
                    <div @click="pagen <= 0 ? 0 : pagen--" :class="{
                        prev: 1,
                        btnp: 1,
                        nouse: pagen == 0
                    }">
                        {{ '<' }} </div>
                            <div v-if="allpagen > 0" @click="pagen = 0" :class="{
                                prev: 1,
                                btnp: 1,
                                active: pagen == 0
                            }">
                                1
                            </div>
                            <div v-if="allpagen > 1" @click="pagen = 1" :class="{
                                prev: 1,
                                btnp: 1,
                                active: pagen == 1
                            }">
                                2
                            </div>
                            <div v-if="pagen > 2" @click="pagen--" class="btnp prev">
                                ...
                            </div>
                            <div v-if="allpagen > 4 && pagen > 1 && pagen < allpagen - 2" :class="{
                                prev: 1,
                                btnp: 1,
                                active: 1
                            }">
                                {{ pagen + 1 }}
                            </div>
                            <div v-if="pagen < allpagen - 3" @click="pagen++" class="btnp prev">
                                ...
                            </div>
                            <div v-if="allpagen > 3" @click="pagen = allpagen - 2" :class="{
                                prev: 1,
                                btnp: 1,
                                active: pagen == allpagen - 2
                            }">
                                {{ allpagen - 1 }}
                            </div>
                            <div v-if="allpagen > 2" @click="pagen = allpagen - 1" :class="{
                                prev: 1,
                                btnp: 1,
                                active: pagen == allpagen - 1
                            }">
                                {{ allpagen }}
                            </div>
                            <div @click="(pagen >= allpagen - 1) ? 0 : pagen++" :class="{
                                prev: 1,
                                btnp: 1,
                                nouse: pagen == allpagen - 1
                            }">
                                {{ '>' }}
                            </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed, inject, } from 'vue'
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const INDEX = inject('INDEX')

const data = ref([])
// const category_id = ref(0)
const tabidx = ref(1)
const pagen = ref(0)
const allpagen = ref(0)
const eachN = 8

const tablist = [
    {
        name: '教学视频',
        tag: 1, // 分类id，可自己指定用于筛选类别
    },
    {
        name: '测试视频',
        tag: 2, // 分类id，可自己指定用于筛选类别
    },
    {
        name: '宣传视频',
        tag: 3, // 分类id，可自己指定用于筛选类别
    },
    {
        name: '售后维护',
        tag: 4, // 分类id，可自己指定用于筛选类别
    },
]


const allTags = computed(() => {
    let tags = {};
    for (const key in INDEX.article) {
        Object.assign(tags, INDEX.article[key].tags)
    }
    return tags;
})

watch(tabidx, (to, from) => {
    if (!to) return;
    pagen.value = 0
})

watch([pagen, tabidx], (to, from) => {
    if (!allTags.value[tabidx.value]) {
        ElMessage.error('tag不存在')
        data.value = []
        return
    };
    let dataAll = []
    // 当页数改变则请求数据，数据为INDEX.product中path列表属性中有category_id的项 根据页数截取对应的8个
    dataAll = Object.values(INDEX.article)?.filter(art => {
        return Object.keys(art?.tags)?.some(k => k == tabidx.value)
    })
    allpagen.value = Math.ceil(dataAll.length / eachN)
    data.value = dataAll.slice(pagen.value * eachN, (pagen.value + 1) * eachN);
    // console.log(data.value);

}, { immediate: true })

const goArticle = (id) => {
    router.push({ name: 'articleDetail', params: { id: id }, query: { ...route.query } })
}
</script>

<style scoped>
.videoCenter {
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
    min-height: 60vh;
    width: 100%;
    position: relative;
    --gap: 30px;
    padding: 0 calc(150px - var(--gap)/2);
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}

.tabbar {
    padding: 0 150px;
    width: 100%;
    display: flex;
}

.tab {
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

.dot {
    position: absolute;
    height: 4px;
    width: 50px;
    bottom: -2px;
    background-color: rgb(172, 172, 172);
}

.tab.active .dot {
    background-color: red;
}

.item {
    /* width: 377px; */
    width: calc(calc(100% - var(--gap)*4) / 4);
    height: 380px;
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

.switchbox{
    width: 100%;
    padding: 50px 150px;
    display: flex;
    justify-content: flex-end;
}
.switch{
    display: flex;
}
.prev{
    border-radius: 50%;
    background-color: #fff;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
}
.btnp{
    transition: .2s;
    user-select: none;
    cursor: pointer;
    margin-left: 10px;
}
.btnp:hover{
    filter: brightness(.92);
}
.btnp.nouse{
    color: #ccc;
    cursor: not-allowed;
}
.btnp.nouse:hover{
    filter: unset;
}
.btnp.active{
    color: white;
    background-color: #ff5555;
}
</style>