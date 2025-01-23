<template>
    <div class="pictureDetailContainer">
        <picture-detail :picture="pictureJson"></picture-detail>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch, inject } from 'vue'
import { useRoute, useRouter } from "vue-router"
import { getItem } from '@/api/configuration/picture'


const route = useRoute()
const router = useRouter()

const picture_id = ref(0)
const pictureJson = ref()

watch(picture_id, (to, from) => {
    getItem(to).then(res => {
        pictureJson.value = res
    }).catch(err => {
        pictureJson.value = null
        ElMessage.error('请求失败，暂无数据')
    })
})

// 监听路由params id参数变化
watch(route, (to, from) => {
    // console.log(to.params.id)
    picture_id.value = to.params.id
}, { immediate: true })


</script>

<style scoped>
.pictureDetailContainer {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>