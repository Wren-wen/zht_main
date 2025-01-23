<template>
    <div class="Title3">
        <div class="left">
            <div v-if="0" class="icon iconfont icon-news"></div>
            <lan v-if="0" en="NEWS" zh="新闻" />
        </div>
        <div class="right">
            <button0>
                <lan en="More News" zh="更多新闻" />
            </button0>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'
import pubuse from '@/utils/pub-use'


const urls = [
    pubuse('无人机/wurenji.png'),
    pubuse('无人机/wurenji1.png'),
    pubuse('无人机/wurenji2.png'),
]

</script>

<style scoped>
.Title3 {
    font-size: 46px;
    color: var(--black);
    color: rgb(59, 59, 59);
    font-weight: bold;
    /* margin: 30px 0; */
    /* padding: 10px 0; */
    margin-top: 10px;
    height: 180px;
    padding: 0 28px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    /* top: 0px; */
    background-color: rgb(199, 64, 64);
    background-color: rgba(255, 255, 255, 0.485);
    /* box-shadow: 0 -3px 6px rgba(0, 0, 0, .08); */
    backdrop-filter: blur(10px);
    overflow: hidden;
}

.left {
    display: flex;
    align-items: center;
}
.right {
    display: flex;
    align-items: center;
}

.text {
    font-size: 10px;
}

.icon {
    padding: 12px 0;
    margin-right: 20px;
    font-size: 60px;
    font-weight: normal;
    border-radius: 10px;
}
</style>