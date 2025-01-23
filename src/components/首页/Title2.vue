<template>
    <div class="Title2">
        <div class="left">
            <div class="icon"><img src="@/assets/logo.png" alt=""></div>
            <lan en="ZHT Aero" zh="ZHT Aero" />
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
.Title2 {
    font-size: 46px;
    color: var(--black);
    color: rgb(59, 59, 59);
    font-weight: bold;
    /* margin: 30px 0; */
    /* padding: 10px 0; */
    margin-top: 20px;
    height: 100px;
    padding: 0 28px;


    display: flex;
    align-items: center;
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
    padding: 18px 10px 0 10px;
    margin-right: 20px;
    font-size: 36px;
    color: white;
    border-radius: 10px;
}
.icon img{
    height: 60px;
    object-fit: cover;
    filter: invert(100%);

}
</style>