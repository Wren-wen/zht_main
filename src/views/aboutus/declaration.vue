<template>
    <div class="declaration">
        <div class="title">
            <lan en="Declaration" zh="声明" />
        </div>
        <div class="sep-line"></div>
        <div class="description">
            <lan en="All products supplied by ZHT Aero shall only be used for civil end use." 
            zh="所有由中航通创新提供的产品，应当仅用于民用终端用途。" />
        </div>
    </div>
    <footer-bar></footer-bar>
</template>

<script setup>
import { ref, reactive, onMounted,  } from 'vue'


</script>

<style lang="less" scoped>
.declaration{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    .title {
        font-size: 49px;
        color: #645444;
    }
    .sep-line {
        margin-top: 35px;
        margin-bottom: 35px;
        width: 100%;
        height: 3px;
        background-color: #645444;
        opacity: 0.3;
    }
    .description {
        font-size: 27px;
        color: #645444;
    }
}

</style>