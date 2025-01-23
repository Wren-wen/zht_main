<template>
    <div class="ConfigTag">
        <div class="bar">
            <div class="pathbar">
                <div class="pathbox">
                    <div @click="pathNodeId = 0" class="path hover">
                        首页
                    </div>
                    <div @click="pathNodeId = node.id" class="path hover" v-for="node in path" :key="node.id">
                        / {{node.id}}.{{ node.zh }}
                    </div>
                    <div class="path new">
                        / 新增
                    </div>
                </div>
            </div>
            <div @click="clickPathFn(pathNodeId)" class="btn nose pointer one">
                {{ '← Back' }}
            </div>
        </div>
        <div class="box scrollBar">
            <div @click="pathNodeId = id" :class="{
                tag: 1,
                active: p.every(n=>path.includes(n))
            }" v-for="(p, id) in allPath" :key="id">
                <div class="tagbar">
                    <div class="num">{{ id }}.</div>
                    <div>中: {{ p[p.length - 1].zh }}</div>
                </div>
                <div class="tagbar">
                    <div class="num"></div>
                    <div>英: {{ p[p.length - 1].en }}</div>
                </div>
            </div>
        </div>
        <div class="bar">
            <div class="inputbox">
                <div class="inputbar">
                    <div class="tip">中</div>
                    <input @keypress.enter="addnewFn" type="text" v-model="pathVal" placeholder=": 新建路径节点">
                </div>
                <div class="inputbar">
                    <div class="tip">英</div>
                    <input @keypress.enter="addnewFn" type="text" v-model="pathVal_en" placeholder=": 新建路径节点">
                </div>
            </div>
            <div @click="addnewFn" :class="{
                btn: 1,
                nose: 1,
                pointer: 1,
                nouse: !pathVal || !pathVal_en
            }">
                新增路径节点 +
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed, inject } from 'vue'

const opt = inject('opt')

const props = defineProps(['path'])
const emits = defineEmits(['update:path'])

const pathVal = ref()
const pathVal_en = ref()

const pathNodeId = ref(props.path[props.path.length - 1]?.id)

// 获取所有path路径节点-路径 对照表
// {1:[1], 2:[1,2], 3:[1,2,3], 4:[1,2,4]}
// {1:[{id:1, zh:'', en:''}], 2:[{id:1, zh:'', en:''},{id:2, zh:'', en:''}]}
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
    for (const key in opt.index_init) {
        extractPath(opt.index_init[key].path)
    }
    for (const key in opt.article_edit) {
        extractPath(opt.article_edit[key].path)
    }
    return allPath;
})

watch(pathNodeId, (to) => {
    if (to) {
        emits('update:path', allPath.value[to])
    } else {
        emits('update:path', [])
    }
}, { immediate: true })

const addnewFn = () => {
    if (!pathVal.value || !pathVal_en.value) return;
    // alltags中没有的key
    let id = 1;
    while (allPath.value.hasOwnProperty(id)) {
        id++;
    }
    let n;
    if (pathNodeId.value) {
        // 如果存在pathNodeId，则添加子节点到pathNodeId
        n = [...allPath.value[pathNodeId.value], {
            id: id,
            zh: pathVal.value,
            en: pathVal_en.value
        }]
    } else {
        n = [{
            id: id,
            zh: pathVal.value,
            en: pathVal_en.value
        }]
    }
    emits('update:path', n)

    pathNodeId.value = id
    pathVal.value = ''
    pathVal_en.value = ''
}

const clickPathFn = (id) => {
    // 删当前回到前一个node
    let last_n_id = null
    for (const n of props.path) {
        if (n.id == id) {
            break;
        }
        last_n_id = n.id
    }
    pathNodeId.value = last_n_id
}

// console.log('allTags', allTags.value);

</script>

<style scoped>
.ConfigTag {
    flex: 1;
    width: 100%;
    border-radius: 12px;
    background-color: #fff;
    border: solid 1px #e7eaef;
    overflow: hidden;
    position: relative;
}

.bar {
    display: flex;
    align-items: center;
    border-bottom: solid 1px #e7eaef;
}

.inputbox {
    flex: 1;
}

.inputbar {
    display: flex;
}

.tip {
    flex-shrink: 0;
    font-size: 18px;
    color: #c27e00;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    user-select: none;
}

input {
    flex: 1;
    width: 100%;
    font-size: 18px;
    padding: 9px 10px;
    padding-left: 0;
    background-color: transparent;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 76px;
    /* width: 380px; */
    padding: 0 16px;
    font-size: 17px;
    color: #000000;
    border: solid 3px #4cceac;
    border-radius: 8px;
    transition: .3s;
    margin-right: 3px;
}

.btn:hover {
    background-color: #f5f5f5;
}

.btn.nouse {
    filter: grayscale(100%) opacity(0.5);
    cursor: not-allowed;
}

.box {
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* padding: 6px; */
    /* max-height: 150px; */
    overflow: auto;
}

.tagbar {
    display: flex;
    align-items: center;
}

.num {
    width: 20px;
}

.tag {
    padding: 4px 10px;
    border-radius: 15px;
    margin: 6px 6px;
    user-select: none;
    cursor: pointer;
    border: solid 2px #696c8373;
    color: #696c83;
    transition: .2s;
}

.tag:hover {
    background-color: #f1f1f1;
}

.tag.active:hover {
    background-color: #46c2a1;
}

.tag.active {
    background-color: #4cceac;
    color: white;
    border-color: transparent;
}
.pathbar{
    flex: 1;
    overflow: hidden;
    /* height: 40px; */
    padding: 0 10px;
}
.pathbox{
    height: 100%;
    display: inline-flex;
    /* justify-content: flex-end; */
    flex-wrap: wrap;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
}
.path{
    white-space: nowrap;
    user-select: none;
    font-size: 18px;
    padding: 4px 2px;
}
.path.hover{
    cursor: pointer;
}
.path.hover:hover{
    color: #46c2a1;
}
.path.new{
    color: #b9b9b9;
}
.btn.one{
    padding: 0 12px;
    height: 36px;
    font-weight: bold;
}
</style>