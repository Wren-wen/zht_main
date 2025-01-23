<template>
    <div class="product">
        <product-detail :product="productJson"></product-detail>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted,onUnmounted, watch, inject } from 'vue'
import { useRoute, useRouter } from "vue-router"
import { getItem } from '@/api/configuration/product'
import { ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()

const product_id = ref(0)
const productJson = ref()

watch(product_id, (to, from) => {
    getItem(to).then(res => {
        productJson.value = res
    }).catch(err => {
        productJson.value = null
        ElMessage.error('请求失败，暂无数据')
    })
})

// 监听路由params id参数变化
watch(route, (to, from) => {
    // console.log(to.params.id)
    product_id.value = to.params.id
}, { immediate: true })


const configuration = inject('configuration')
onMounted(() => {
    configuration.on = true
})
onUnmounted(() => {
    configuration.on = false
})

</script>

<style scoped>
.product{
    width: 100%;
    position: relative;
}

</style>