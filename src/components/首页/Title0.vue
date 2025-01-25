<template>
    <div class="Title0">
        <div class="left">
            <slot></slot>
        </div>
        <div v-if="0" class="right">
            <!-- <cards-icon style="margin-right: 1rem;" height="100" offset="70" :urls="urls"></cards-icon> -->
            <button0>
                <lan en="More" zh="更多" />
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
.Title0 {
    font-size: 46px;
    color: var(--black);
    color: rgb(59, 59, 59);
    font-weight: bold;
    /* margin-top: 10px; */
    height: 180px;
    padding: 0 28px;


    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-content: center;
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
    font-size: 36px;
    color: white;
    border-radius: 10px;
    background-color: var(--black);
}
</style>