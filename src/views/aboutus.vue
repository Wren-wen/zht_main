<template>
    <div class="aboutus">
        <!-- 子路由 -->
        <!-- <div class="bigMountain">
            <div class="mask">
                <h1>
                    <lan en="About Us" zh="关于我们" />
                </h1>
            </div>
        </div> -->
        <router-view></router-view>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'


</script>

<style scoped>
.aboutus {
    width: 100%;
    position: relative;
}
/* @keyframes dashan {
    from{
        background-size: 130% ;
    }
    to{
        background-size: 100%;
    }
}
.bigMountain{
    width: 100%;
    height: 400px;
    background: url('@/assets/大山/mountain.png') no-repeat center center / cover;
    animation: dashan 5.5s linear;
}
.mask{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .5);
}
h1{
    color: white;
    font-size: 56px;
} */
</style>