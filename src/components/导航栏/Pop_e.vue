<template>
    <div class="Pop_e flex column">
        <router-link :to="{name:'news',query:{...route.query}}" class="item nowrap flex center nose pointer">
            <lan en="新闻动态" zh="新闻动态" />
        </router-link>
        <router-link :to="{name:'introduction',query:{...route.query}}" class="item nowrap flex center nose pointer">
            <lan en="公司介绍" zh="公司介绍" />
        </router-link>
        <router-link :to="{name:'contact',query:{...route.query}}" class="item nowrap flex center nose pointer">
            <lan en="联系我们" zh="联系我们" />
        </router-link>
        <router-link :to="{name:'declaration',query:{...route.query}}" class="item nowrap flex center nose pointer">
            <lan en="声明" zh="声明" />
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
.Pop_e{
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