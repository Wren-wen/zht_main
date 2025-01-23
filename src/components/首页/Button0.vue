<template>
    <router-link :to="{name:'news',query:{...route.query}}" class="Button0 pointer nose">
        <slot></slot>
        <div class="iconfont icon-right"></div>
    </router-link>
</template>

<script setup>
import { ref, reactive, onMounted,  } from 'vue'
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()


</script>

<style scoped>
.Button0{
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    padding: 10px 28px;
    padding-right: 18px;
    border-radius: 24px;
    color: var(--black);
    border: solid 4px var(--black);
    background-color: rgba(255, 255, 255, 0.339);
    transition: .3s;
    transform: scale(.8);
}
.Button0:hover{
    color: var(--red);
    border-color: var(--red);
}
.Button0:hover .icon-right{
    margin-left: 16px;
}
.icon-right{
    font-size: 20px;
    margin-left: 10px;
    transition: margin-left .3s;
}
</style>