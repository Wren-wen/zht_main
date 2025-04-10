<template>
    <div class="Layout5">
        <div class="ui">
            <div class="btn" @click="router.push({ name: 'introduction' })">
                <div>
                    <lan en="Company Introduction" zh="公司介绍" />
                </div>
                <div class="triangle">▶</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject, watch } from 'vue'
import pubuse from '@/utils/pub-use'
import { useRouter } from 'vue-router'

const router = useRouter()

let isZh = inject('isZh');
let path = ref("url(" + pubuse('首页/intro/公司介绍_EN.jpg') + ")");

watch(isZh, (newVal) => {
    path.value = newVal ? "url(" + pubuse('首页/intro/公司介绍_CN.jpg') + ")" : "url(" + pubuse('首页/intro/公司介绍_EN.jpg') + ")";
})

onMounted(() => {
    
})
</script>

<style lang="less" scoped>
.Layout5 {
    height: 950px;
    width: 100%;
    margin: 60px 0 0 0;
    position: relative;
}

.cover {
    width: 100%;
    height: 100%;
}

.ui {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    background-size: 100% 100%;
    background-image: v-bind(path);
}

.logo {
    height: 120px;
}

h1 {
    color: white;
    font-size: 50px;
    font-weight: normal;
    margin-bottom: 10px;
}

.bar {
    width: 80%;
    display: flex;
    justify-content: space-between;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 20px;
    font-weight: normal;
}
h3{
    font-size: 24px;
    font-weight: normal
}
.item img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px
}

.btn {
    position: relative;
    bottom: 60px;
    right: 100px;
    display: inline-flex;
    align-items: center;
    background-color: #ff1215;
    color: #fffeff;
    text-align: center;
    letter-spacing: 0.8px;
    font-size: 25px;
    border-radius: 18px;
    padding: 4px 14px;
    cursor: pointer;
    margin-top: 300px;
    .triangle {
        font-size: 12px;
        margin-left: 4px;
    }
}
</style>