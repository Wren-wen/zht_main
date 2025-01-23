<template>
    <div :class="{
        ArticleItemMod: 1,
        active: value.id === opt.id_selected
    }">
        <div class="txt">
            {{ value.id }}<span>. {{ value.title }}</span>
        </div>
        <div v-if="info_type == 0 || info_type == 1" class="iconfont icon-gantan"></div>
        <div v-else-if="info_type == 2" class="iconfont icon-daoru"></div>
        <div v-else-if="info_type == 4" class="iconfont icon-shanchu"></div>
    </div>
</template>

<script setup>
import { ref, toRef, reactive, onUnmounted, inject, watch, computed } from 'vue'
import { getArticle } from '@/api/configuration/product'

const props = defineProps(['value'])
const opt = inject('opt')

const info_type = computed(() => opt.info_article_edit[props.value.id])

const article_reload = ref()

let inter;
const trigger = (op, immediate = false) => {
    if (op == 0) {
        clearInterval(inter)
    } else {
        clearInterval(inter)
        const interFn = () => {
            getArticle(props.value.id).then(res => {
                article_reload.value = res
            }).catch(err => {
                // ElMessage.error(err.message)
                article_reload.value = null
                if (info_type.value != 4) {
                    opt.info_article_edit[props.value.id] = 0
                }
            })
        }
        if (immediate) {
            interFn()
        }
        inter = setInterval(interFn, 1000)
    }
}
trigger(1, true)
onUnmounted(() => {
    trigger(0)
})

watch([article_reload, () => props.value, () => opt.index_init], ([to, to1, to2], [fr, fr1, fr2]) => {
    let state;
    // 判断props.value对象和to对象是否相等
    if (JSON.stringify(to) !== JSON.stringify(props.value)) {
        state = 1
        // 若不一样，则开启interval
        trigger(1)
    } else {
        state = 2
        // 若相等，说明用户已上传，关闭interval
        if (opt.id_selected !== props.value.id) {
            trigger(0)
        }
        // 判断index_init中是否有索引
        if (opt.index_init[props.value.id]) {
            // 有, 提取props.value的INDEX_PARAM字段
            let idx = {};
            opt.INDEX_PARAM.forEach(key => {
                idx[key] = props.value[key]
            });
            if (JSON.stringify(idx) === JSON.stringify(opt.index_init[props.value.id])) {
                state = 3
            }
        }
    }
    if (info_type.value != 4) {
        opt.info_article_edit[props.value.id] = state
    }
})

watch(info_type, to => {
    if (to === 3 && opt.id_selected !== props.value.id) {
        // 若都保存，则移出当前选项 且 为选中
        delete opt.info_article_edit[props.value.id]
        delete opt.article_edit[props.value.id]
    } else {
        trigger(1, true)
    }
})
watch(() => opt.id_selected, (to, from) => {
    if (to === props.value.id) {
        // 若用户点中了该文章，则开启interval
        trigger(1, true)
    }

    if (to !== props.value.id) {
        // 当移出，判断索引和文件是否都保存
        // console.log(info_type);
        if(info_type.value === 4) {
            trigger(0)
        };

        if (info_type.value === 3) {
            // 若都保存，则移出当前选项
            delete opt.info_article_edit[props.value.id]
            delete opt.article_edit[props.value.id]
        }
    }
})



</script>

<style scoped>
.ArticleItemMod {
    height: 56px;
    width: 100%;
    background-color: rgb(255, 245, 225);
    border-bottom: solid 1px #c9c9c9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    color: #7d5100;
    overflow: hidden;
    cursor: pointer;
}

.ArticleItemMod.active {
    background-color: #ffe8e2;
    border-bottom: solid 1px #ff0000;
    color: rgb(200, 0, 0);
}

.txt {
    display: flex;
    align-items: center;
    flex: 1;
    font-weight: bold;
    overflow: hidden;
    font-size: 19px;
    white-space: nowrap;
}

.txt span {
    font-size: 18px;
    font-weight: normal;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
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
</style>