<template>
    <div class="Pop_d flex column">
        <router-link :to="{name:'assets',query:{...route.query}}" class="item nowrap flex center nose pointer">
            <lan en="资料下载" zh="资料下载" />
        </router-link>
        <router-link :to="{name:'picture',query:{...route.query}}" class="item nowrap flex center nose pointer">
            <lan en="图库中心" zh="图库中心" />
        </router-link>
        <router-link :to="{name:'videoCenter',query:{...route.query}}" class="item nowrap flex center nose pointer">
            <lan en="视频中心" zh="视频中心" />
        </router-link>
        <router-link :to="{name:'question',query:{...route.query}}" class="item nowrap flex center nose pointer">
            <lan en="常见问题" zh="常见问题" />
        </router-link>
        <router-link :to="{name:'afterSale',query:{...route.query}}" class="item nowrap flex center nose pointer">
            <lan en="售后咨询" zh="售后咨询" />
        </router-link>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted,  } from 'vue'
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()


</script>

<style scoped>
.Pop_d{
    /* width: 140px; */
    padding: 10px 0;
}
.item{
    width: 100%;
    padding: 18px 30px;
    font-size: 20px;
    color: black;
}
.item:hover{
    /* color: var(--red); */
    background-color: var(--hover);
    background-color: rgba(0, 0, 0, 0.08);
}
</style>