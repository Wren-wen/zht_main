<template>
    <div class="category">
        <div class="header">
            <div class="path">
                <div @click="goPath(0)" class="node">
                    首页
                </div>
                <div @click="goPath(n.id)" class="node" v-for="n in allPath[category_id]">
                    /
                    <lan :en="n.en" :zh="n.zh" />
                </div>
            </div>
        </div>
        <div class="banner">

        </div>
        <div class="container">
            <div class="content">
                <div class="item" v-for="item in data">
                    <div class="cover">
                        <img :src="`configuration/image_bed/${item?.cover?.src}`" alt="">
                    </div>
                    <div class="botbox">
                        <div class="txtbar">
                            <lan :en="item.title_en" :zh="item.title" />
                        </div>
                        <div @click="goProduct(item.id)" class="btn">
                            <lan en="了解更多" zh="了解更多" /> >
                        </div>
                    </div>
                </div>
            </div>
            <div class="switchbox">
                <div class="switch">
                    <div @click="pagen <= 0?0:pagen--" :class="{
                        prev:1,
                        btnp:1,
                        nouse: pagen == 0
                    }">
                        {{ '<' }}
                    </div>
                    <div v-if="allpagen>0" @click="pagen = 0" :class="{
                        prev:1,
                        btnp:1,
                        active: pagen == 0
                    }">
                        1
                    </div>
                    <div v-if="allpagen>1" @click="pagen = 1" :class="{
                        prev:1,
                        btnp:1,
                        active: pagen == 1
                    }">
                        2
                    </div>
                    <div v-if="pagen>2" @click="pagen--" class="btnp prev">
                        ...
                    </div>
                    <div v-if="allpagen>4 && pagen>1 && pagen<allpagen-2" :class="{
                        prev:1,
                        btnp:1,
                        active:1
                    }">
                        {{ pagen + 1 }}
                    </div>
                    <div v-if="pagen<allpagen-3" @click="pagen++" class="btnp prev">
                        ...
                    </div>
                    <div v-if="allpagen>3" @click="pagen = allpagen-2" :class="{
                        prev:1,
                        btnp:1,
                        active: pagen == allpagen-2
                    }">
                        {{ allpagen-1 }}
                    </div>
                    <div v-if="allpagen>2" @click="pagen = allpagen-1" :class="{
                        prev:1,
                        btnp:1,
                        active: pagen == allpagen-1
                    }">
                        {{ allpagen }}
                    </div>
                    <div @click="(pagen >= allpagen-1)?0:pagen++" :class="{
                        prev:1,
                        btnp:1,
                        nouse: pagen == allpagen-1
                    }">
                        {{ '>' }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted,onUnmounted, computed, inject, } from 'vue'
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const INDEX = inject('INDEX')

const allPath = computed(() => {
    let allPath = {};
    const extractPath = (path) => {
        let lastNode = null
        for (const node of path) {
            if (!allPath[node.id]) {
                if (lastNode) {
                    allPath[node.id] = [...allPath[lastNode.id], node]
                } else {
                    allPath[node.id] = [node]
                }
            }
            lastNode = allPath[node.id][allPath[node.id].length - 1]
        }
    }
    for (const key in INDEX.product) {
        extractPath(INDEX.product[key].path)
    }
    return allPath;
})

const data = ref([])
const category_id = ref(0)
const pagen = ref()
const allpagen = ref(0)
const eachN = 8


watch(category_id, (to, from) => {
    if(!to) return;
    pagen.value = 0
    if(!allPath.value[category_id.value]){
        ElMessage.error('分类不存在')
        data.value = []
    }
})

watch([pagen, category_id], (to, from) => {
    if(!allPath.value[category_id.value]) return;
    let dataAll = []
    // 当页数改变则请求数据，数据为INDEX.product中path列表属性中有category_id的项 根据页数截取对应的8个
    dataAll = Object.values(INDEX.product)?.filter(path=>{
        return path?.path?.some(node=>node.id==category_id.value)
    })
    allpagen.value = Math.ceil(dataAll.length / eachN)
    data.value = dataAll.slice(pagen.value * eachN, (pagen.value+1) * eachN);
    // console.log(data.value);
    
})

const goProduct = (id) => {
    router.push({ name: 'product', params: { id: id }, query: {...route.query} })
}

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

// 监听路由params id参数变化
watch(route, (to, from) => {
    // console.log(to.params.id)
    // 如果路由名字不是category则不执行
    if (to.name != 'category') return;
    category_id.value = to.params.id
}, { immediate: true })


const configuration = inject('configuration')
onMounted(() => {
    configuration.on = true
})
onUnmounted(() => {
    configuration.on = false
})


</script>

<style lang="less" scoped>
.category {
    position: relative;
    width: 100%;
}



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

.banner {
    width: 100%;
    height: 420px;
    background-color: #e6e6e6;
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
.container{
    width: 100%;
    background-color: #f5f5f5;
}
.content{
    min-height: 70vh;
    width: 100%;
    position: relative;
    --gap: 30px;
    padding: 0 calc(150px - var(--gap)/2);
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}
.item{
    /* width: 377px; */
    width: calc(calc(100% - var(--gap)*4) / 4);
    height: 480px;
    margin: calc(var(--gap)/2);
    margin-top: 100px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
}
.cover{
    flex: 1;
    overflow: hidden;
}
.cover img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.botbox{
    height: 120px;
    margin: 0 30px;
    border-top: solid 2px #666;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    justify-content: space-evenly;
}
.txtbar{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
}
.btn{
    color: white;
    padding: 4px 14px;
    border-radius: 8px;
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