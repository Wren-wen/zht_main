<template>
    <div class="Searcher">
        <input :placeholder="isZh ? '搜索' : 'Search'" />
        <div class="iconfont icon-sousuo"></div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from 'vue'

const isZh = inject('isZh')

</script>

<style scoped>
.Searcher {
    width: 300px;
    height: 46px;
    outline: none;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 60px;
    overflow: hidden;
}
input{
    flex: 1;
    width: 2px;
    height: 100%;
    border: none;
    padding-left: 20px;
    font-size: 20px;
}
.icon-sousuo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 60px;
    font-size: 26px;
    cursor: pointer;
    flex-shrink: 0;
    color: #595758;
}

.icon-sousuo:hover {
    color: var(--red);
}
</style>