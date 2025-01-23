<template>
    <div :class="{
        ArticleItem: 1,
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
import { getIndex, getArticle } from '@/api/configuration/article'

const props = defineProps(['value'])
const opt = inject('opt')

const info_type = computed(() => opt.info_article_edit[props.value.id])



</script>

<style scoped>
.ArticleItem {
    height: 56px;
    width: 100%;
    background-color: #c8fff02a;
    border-bottom: solid 1px #c9c9c9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    color: #7d5100;
    overflow: hidden;
    cursor: pointer;
}
.ArticleItem.active{
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