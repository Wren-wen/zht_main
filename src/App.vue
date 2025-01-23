<template>
    <div ref="scrollbox" class="scrollbox">
        <router-view v-slot="{ Component }">
            <nav-bar v-if="!configuration.on"></nav-bar>
            <transition name="fade">
                <component class="components" :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, provide } from 'vue'
import pubuse from '@/utils/pub-use'
import { useRoute, useRouter } from "vue-router"
import useScan from '@/hooks/useScan'
import { getIndex as getArticleIndex } from '@/api/configuration/article'
import { getIndex as getPictureIndex } from '@/api/configuration/picture'
import { getIndex as getProductIndex } from '@/api/configuration/product'


const route = useRoute()


const scrollbox = ref(null)
const scroll_dirct = useScan(scrollbox)


// 判断路由route的query参数lan是否为zh
const isZh = ref(false)
const configuration = reactive({
    on: false,
})
// 如果路由的lan发生变化则改变
watch(route, (newRoute) => {
    isZh.value = newRoute.query.lang === 'zh'
})
onMounted(() => {
    isZh.value = route.query.lang === 'zh'
})

const INDEX = reactive({});
// 获取所有文件的索引
const getConfiguration = async () => {
    getArticleIndex().then((e) => {
        INDEX.article = e
    })
    getPictureIndex().then((e) => {
        INDEX.picture = e
    })
    getProductIndex().then((e) => {
        INDEX.product = e
    })

}

const reloadIndex = () => {
    getConfiguration().then((e) => {
        setTimeout(() => {
            if (INDEX.article && INDEX.picture && INDEX.product) {
                setTimeout(() => {
                    reloadIndex()
                }, 60000);
            } else {
                ElMessage({
                    message: '获取索引失败',
                    type: 'error',
                })
                setTimeout(() => {
                    reloadIndex()
                }, 1000);
            }
        }, 4000);
    })
}

reloadIndex()

provide('isZh', isZh)
provide('scroll_dirct', scroll_dirct)
provide('configuration', configuration)
provide('INDEX', INDEX)
</script>


<style scoped>
.scrollbox {
    position: relative;
    overflow: auto;
    height: 100vh;
    width: 100vw;
}

.components {
    transition: .5s;
    transition-delay: .3s;
}

.fade-leave-to,
.fade-enter-from {
    opacity: 0;
    transform: translateY(10%);
    /* transform: rotate3d(0,0,1,60deg); */
}
</style>