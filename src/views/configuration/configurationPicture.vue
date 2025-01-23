<template>
    <div class="configurationArticle">
        <div class="col">
            <div class="titlebar">
                <div class="title">图片组管理</div>
                <div @click="addnewFn" class="btn addnew nose pointer">找回/添加图片组 +</div>
            </div>
            <div class="bar">
                <div class="col1">
                    <div class="bar two">
                        <div>仓库索引中共 {{ Object.keys(opt.index_init).length }} 项</div>
                        <div class="iconfont icon-duigou1"></div>
                    </div>
                    <div class="content scrollBar left">
                        <article-item @click="opt.id_selected = parseInt(key)" :value="val"
                            v-for="(val, key) in opt.index_init" :key="key"></article-item>
                    </div>
                </div>
                <div class="col1 two">
                    <div class="bar two">
                        <div class="tit">{{ Object.keys(opt.article_edit).length }} 项有变更需索引</div>
                        <div class="iconfont icon-weibaocun"></div>
                    </div>
                    <div class="content scrollBar right">
                        <transition-group name="opacity">
                            <picture-item-mod @click="opt.id_selected = parseInt(key)" :value="val"
                                v-for="(val, key) in opt.article_edit" :key="key" />
                        </transition-group>
                    </div>
                </div>
            </div>
            <div class="col two nose">
                <div @click="downloadFn" :class="{
                    btn: 1,
                    pointer: 1,
                    nouse: !has_unsave
                }">
                    <div class="iconfont icon-xiazai"></div>
                    <div>1.批量下载有变更的图片组实例</div>
                </div>
                <div @click="mergeFn" :class="{
                    btn: 1,
                    daoru: 1,
                    pointer: 1,
                    nouse: has_unsave
                }">
                    <div class="iconfont icon-daoru"></div>
                    <div>2.下载合并的索引article_index</div>
                </div>
                <div v-if="refresh" @click="refreshFn" class="btn pointer refresh">
                    检测到索引文件更改<span>刷新</span>
                </div>
            </div>
        </div>
        <div class="content">
            <picture-content v-if="opt.id_selected" :key="opt.id_selected"></picture-content>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, inject, provide, watch, toRef } from 'vue'
import { computed } from 'vue'
import download_json from '@/hooks/configuration/download_json'
import { getIndex } from '@/api/configuration/picture'
import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router"

// 配置
const INDEX_PARAM = ['id', 'cover', 'title', 'title_en', 'timestamp', 'tags']
const PARAM_DEFAULT = {
    title: '',
    title_en: '',
    timestamp: ()=>new Date().getTime(),
    tags: ()=>({}),
    image: ()=>[],
}
const INFO_TYPE = {
    0: '文件$file不存在读取失败, 编辑完成后点击下载按钮, 将文件$file放在目录[public/configuration/picture]下',
    1: '文件$file存在变更, 点击下载按钮, 将文件$file放在目录[public/configuration/picture]以保存',
    2: '文件$file已存在, 等待合并索引文件picture_index.json 后以保存',
    3: '文件$file已是最新且在仓库索引picture_index.json 中, 无需保存',
    4: '文件$file已标记为删除, 合并索引文件picture_index.json 后生效',
}

const opt = reactive({
    INFO_TYPE: INFO_TYPE,
    INDEX_PARAM: INDEX_PARAM,
    PARAM_DEFAULT: PARAM_DEFAULT,
    id_selected: null,
    index_reload: { //本地最新

    },
    index_init: { //只读，不可更改

    },
    article_edit: {},
    info_article_edit: {},
})


// 添加新文章
const addnewFn = () => {
    // 生成一个index_init和article_edit中都没有的id，从1往上
    let id = 1
    while (opt.index_init.hasOwnProperty(id) || opt.article_edit.hasOwnProperty(id)) {
        id++
    }
    opt.id_selected = id;
}
const refresh = ref(false)
const refreshFn = () => {
    const num = Object.keys(opt.index_init).length
    opt.index_init = opt.index_reload
    const delta = Object.keys(opt.index_init).length - num
    ElMessage({
        message: `刷新成功，新增${delta}项`,
        type: 'success',
    })
    refresh.value = false
}
const has_unsave = computed(() => {
    // opt.info_article_edit中的都需要是2或3
    for (const key in opt.info_article_edit) {
        if (
            opt.info_article_edit[key] !== 2 &&
            opt.info_article_edit[key] !== 3 &&
            opt.info_article_edit[key] !== 4
        ) {
            return true
        }
    }
    return false
})
const downloadFn = () => {
    if (!has_unsave.value) {
        ElMessage({
            message: '当前无变更, 无需下载',
            type: 'warning',
        })
    } else {
        for (const key in opt.info_article_edit) {
            if (
                opt.info_article_edit[key] === 0 ||
                opt.info_article_edit[key] === 1
            ) {
                download_json(opt.article_edit[key], key)
            }
        }
    }
}
const mergeFn = () => {
    if (has_unsave.value) {
        ElMessage({
            message: '请先保存所有变更',
            type: 'error',
        })
    } else {
        // 将opt.article_edit中的合并到opt.index_init中且只保留opt.INDEX_PARAM中的字段
        let merge_index = {}
        // 1 - 过滤index_init
        for (const key in opt.index_init) {
            let index_article_edit = {}
            opt.INDEX_PARAM.forEach(k => {
                if (opt.index_init[key].hasOwnProperty(k)) {
                    index_article_edit[k] = opt.index_init[key][k]
                }
            })
            merge_index[key] = index_article_edit
        }
        // 2 - 合并article_edit
        for (const key in opt.article_edit) {
            let index_article_edit = {}
            opt.INDEX_PARAM.forEach(k => {
                index_article_edit[k] = opt.article_edit[key][k]
            })
            merge_index[key] = index_article_edit
        }
        // 3 - 去除info_article_edit中标记为4(删除字段)的
        for (const key in opt.info_article_edit) {
            if (opt.info_article_edit[key] === 4) {
                delete merge_index[key]
            }
        }
        // 下载json
        download_json(merge_index, 'picture_index')
    }
}
getIndex().then(res => {
    opt.index_init = res
}).catch(err => {
    // ElMessage.error(err.message)
    opt.index_init = {}
})

let inter;
const trigger = (op) => {
    if (op == 0) {
        clearInterval(inter)
    } else {
        clearInterval(inter)
        inter = setInterval(() => {
            getIndex().then(res => {
                opt.index_reload = res
            }).catch(err => {
                // ElMessage.error(err.message)
                opt.index_reload = {}
            })
        }, 1000)
    }
}
trigger(1)
onUnmounted(() => {
    trigger(0)
})

watch(e => opt.index_reload, (to) => {
    if (JSON.stringify(to) !== JSON.stringify(opt.index_init)) {
        refresh.value = true
    } else {
        refresh.value = false
    }
})


// 监听当用户刷新页面或者离开时提示页面数据会消失
onBeforeRouteLeave((to, from, next) => {
    if (Object.keys(opt.article_edit).length > 0) {
        const r = confirm("内容可能未保存，确定离开吗？");
        if (r == true) {
            next()
        }
        else {
            next(false)
        }
    } else {
        next()
    }
})

window.addEventListener("beforeunload", (event) => {
    // 判断
    if (Object.keys(opt.article_edit).length > 0) {
        // 取消事件，防止页面关闭
        event.preventDefault();
    }
});

const configuration = inject('configuration')
onMounted(() => {
    configuration.on = true
})
onUnmounted(() => {
    configuration.on = false
})
provide('opt', opt)

</script>

<style scoped>
.configurationArticle {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #fffae8;
}

.col {
    width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 3px solid rgb(203, 203, 203);
}

.titlebar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 3px solid rgb(203, 203, 203);
    height: 80px;
}

.btn.addnew {
    color: #000;
    width: 210px;
    height: 46px;
    border-color: #4cceac;
}

.title {
    font-size: 30px;
    color: rgb(61, 61, 61);
    font-weight: bold;
}

.bar {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.col1 {
    flex: 1;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.col1.two {
    border-left: 3px solid rgb(203, 203, 203);
}

.bar.two {
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-size: 20px;
    color: rgb(144, 147, 154);
    font-weight: bold;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 6%);
    color: #4cceac;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
    overflow: unset;
}

.iconfont {
    color: #4cceac;
    font-weight: normal;
}

.icon-weibaocun {
    color: orange;
    font-size: 20px;
}

.icon-duigou1 {
    font-size: 20px;
}

.tit {
    color: orange;
}

.col.two {
    width: 100%;
    height: 200px;
    border: none;
    box-shadow: 0 -4px 10px 0 rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px;
    padding-bottom: 36px;
    justify-content: space-around;
    position: relative;
    flex-shrink: 0;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 58px;
    width: 380px;
    padding: 0 20px;
    background-color: #fff;
    font-size: 19px;
    font-weight: bold;
    color: #000000;
    border: solid 3px #ffa500;
    border-radius: 18px;
    transition: .3s;
}

.btn:hover {
    background-color: #f5f5f5;
}

.btn.nouse {
    filter: grayscale(100%) opacity(0.5);
    cursor: not-allowed;

}

.icon-xiazai {
    color: #ffa500;
    font-size: 30px;
    font-weight: bold;
}

.btn.daoru {
    border: solid 3px #4cceac;
}

.icon-daoru {
    color: #4cceac;
    font-size: 29px;
    font-weight: bold;
}

.btn.refresh {
    position: absolute;
    bottom: calc(100% + 20px);
    width: 260px;
    height: 44px;
    border-color: #4cceac;
    border-color: #000;
    font-size: 17px;
}

.btn.refresh span {
    color: #4cceac;
    display: inline-block;
}

.content {
    flex: 1;
    position: relative;
}
.content.scrollBar{
    overflow: auto;
}



.opacity-enter-active {
    transition: .2s;
}

.opacity-move {
    transition: .3s;
}

.opacity-enter-from,
.opacity-leave-to {
    opacity: 1;
}

.opacity-leave-to,
.opacity-leave-from {
    position: absolute;
}
</style>