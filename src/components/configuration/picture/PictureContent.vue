<template>
    <div class="ArticleContent">
        <div class="editbox scrollBar">
            <div class="bar sticky">
                <div class="bar one">
                    <div class="tit bold">
                        图片组id:
                    </div>
                    <div class="bold">
                        {{ article_edit?.id }}
                    </div>

                </div>
                <div @click="downloadFn" class="btn addnew">
                    <span>下载</span> {{ article_edit?.id }}.json
                </div>
            </div>
            <div class="bar">
                <div v-if="info_article_edit == 0 || info_article_edit == 1" class="bar one">
                    <div class="tit iconfont icon-gantan"></div>
                    <div>未保存</div>
                </div>
                <div v-else-if="info_article_edit == 2" class="bar one">
                    <div class="tit iconfont icon-daoru"></div>
                    <div>待合并</div>
                </div>
                <div v-else-if="info_article_edit == 4" class="bar one">
                    <div class="tit iconfont icon-shanchu"></div>
                    <div>待删除</div>
                </div>
                <div v-else-if="info_article_edit == 3" class="bar one">
                    <div class="tit iconfont icon-duigou1"></div>
                    <div>无需操作</div>
                </div>
                <div v-else></div>
                <div class="bar one">
                    <div class="tit">
                        {{ isDel ? '待删除' : '点击标记为删除' }}
                    </div>
                    <el-switch v-model="isDel" size="large"
                        style="--el-switch-on-color: #ff4949; --el-switch-off-color: #d6d3ca" />
                </div>
            </div>
            <div class="bar">
                <div class="file">
                    {{ opt.INFO_TYPE[info_article_edit]?.replace(/\$file/g, ` ${article_edit?.id}.json `) }}
                </div>
            </div>
            <div class="bar flexStart">
                <div class="tit marginTop">
                    底部文字:
                </div>
                <config-text v-if="article_edit?.hasOwnProperty('title') && article_edit?.hasOwnProperty('title_en')"
                    v-model:zh="article_edit.title" v-model:en="article_edit.title_en"></config-text>
            </div>
            <div class="bar flexStart">
                <div class="tit marginTop">
                    发布时间:
                </div>
                <config-time v-if="article_edit?.hasOwnProperty('timestamp')"
                    v-model:timestamp="article_edit.timestamp"></config-time>
            </div>
            <div class="bar flexStart">
                <div class="tit marginTop">
                    标签:
                </div>
                <config-tags v-if="article_edit?.hasOwnProperty('tags')" v-model:tags="article_edit.tags"></config-tags>
            </div>
            <div class="bar flexStart">
                <div class="tit marginTop">
                    图片组:
                </div>
                <config-frame-picture v-if="article_edit?.hasOwnProperty('image')" v-model:frame="article_edit.image"></config-frame-picture>
            </div>
        </div>
        <div class="showbox">
            <config-show>
                <picture-detail :picture="article_edit"></picture-detail>
            </config-show>
        </div>
    </div>
</template>

<script setup>
import { ref, toRaw, onMounted, onUnmounted, inject, toRef, watch, computed } from 'vue'
import { getIndex, getArticle } from '@/api/configuration/picture'
import download_json from '@/hooks/configuration/download_json'

const opt = inject('opt')

const article_edit = toRef(opt.article_edit, opt.id_selected)

const info_article_edit = toRef(opt.info_article_edit, opt.id_selected)

const isDel = ref(false)
watch(isDel, (val) => {
    if (val) {
        info_article_edit.value = 4
    } else {
        info_article_edit.value = 0
    }
})
watch(info_article_edit, val => {
    if (val == 4) {
        isDel.value = true
    } else {
        isDel.value = false
    }
}, { immediate: true })

const downloadFn = () => {
    if (info_article_edit.value !== 1 && info_article_edit.value !== 0) {
        ElMessage({
            message: '当前无需下载',
            type: 'warning',
        })
    }
    // console.log(toRaw(article_edit.value));
    
    download_json(article_edit.value, article_edit.value.id)
}
onMounted(() => {
    // 若article_edit中没id需要添加
    // console.log(article_edit,info_article_edit);

    if (!article_edit.value?.id) {
        getArticle(opt.id_selected).then(res => {
            article_edit.value = res

        }).catch(e => {
            article_edit.value = opt.index_init[opt.id_selected]
            if (!article_edit.value?.id) {
                // 判定为创建新文件
                article_edit.value = { id: opt.id_selected }
            }
        })
    }
})
watch(article_edit, (to, from) => {
    if(!to) return;
    let params = {}
    for (const key in opt.PARAM_DEFAULT) {
        if (!article_edit.value.hasOwnProperty(key)) {
            // 如果opt.PARAM_DEFAULT[key]是函数
            if (typeof opt.PARAM_DEFAULT[key] === 'function') {
                params[key] = opt.PARAM_DEFAULT[key]()
            } else {
                params[key] = opt.PARAM_DEFAULT[key]
            }
        }
    }
    Object.assign(article_edit.value, params)
    // 最后加上cover字段，cover为计算属性自动计算image列表中第一张
    article_edit.value.cover = computed(() => {
        return article_edit.value.image[0]
    })
    
})
</script>

<style scoped>
.ArticleContent {
    height: 100%;
    width: 100%;
    display: flex;
}

.editbox {
    width: 500px;
    overflow: auto;
    border-right: 3px solid rgb(203, 203, 203);
}

.showbox {
    flex: 1;
    position: relative;
}

.bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    margin-bottom: 30px;
}

.bar.flexStart {
    align-items: flex-start;
}

.sticky {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: rgba(255, 250, 232, 0.367);
    padding: 20px 24px;
    margin-bottom: 0;
    backdrop-filter: blur(10px);
}

.bar.one {
    display: flex;
    align-items: center;
    padding: 0;
    font-size: 20px;
    margin: 0;
}

.tit {
    margin-right: 10px;
    font-size: 20px;
}

.bold {
    font-weight: bold;
}

.file {
    /* background: white; */
    color: #60667d;
    padding: 3px 14px;
    border: dashed 3px black;
    border: dashed 3px rgba(189, 189, 189, 0.504);
    font-size: 20px;

}

.btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 58px;
    width: 380px;
    padding: 0 12px;
    background-color: #fff;
    font-size: 19px;
    font-weight: bold;
    color: #000000;
    border: solid 3px #ffa500;
    border-radius: 18px;
    transition: .3s;
    user-select: none;
    cursor: pointer;
}

.btn:hover {
    background-color: #f5f5f5;
}

.btn.addnew {
    color: #000;
    width: 160px;
    height: 46px;
    border-color: #ffa500;
}

.addnew span {
    color: #ffa500;
}

.icon-gantan {
    color: red;
    background-color: rgb(255, 201, 201);
    padding: 4px;
    font-size: 15px;
    border-radius: 50%;
}

.icon-daoru {
    color: #56deba;
    font-weight: bold;
    font-size: 22px;
}

.icon-shanchu {
    color: #b8b8b8;
    color: #7e7e7e;
    font-size: 22px;
}

.icon-duigou1 {
    color: #56deba;
    font-size: 22px;
}

.marginTop {
    margin-top: 6px;
}
</style>