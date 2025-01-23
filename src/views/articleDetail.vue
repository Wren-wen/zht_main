<template>
    <div class="articleDetail">
        <article-news :article="articleJson"></article-news>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch, inject } from 'vue'
import { useRoute, useRouter } from "vue-router"
import { getItem } from '@/api/configuration/article'


const route = useRoute()
const router = useRouter()

const article_id = ref(0)
const articleJson = ref()

watch(article_id, (to, from) => {
    getItem(to).then(res => {
        articleJson.value = res
    }).catch(err => {
        articleJson.value = null
        ElMessage.error('请求失败，暂无数据')
    })
})

// 监听路由params id参数变化
watch(route, (to, from) => {
    // console.log(to.params.id)
    article_id.value = to.params.id
}, { immediate: true })

</script>

<style scoped>
.articleDetail{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
}

</style>