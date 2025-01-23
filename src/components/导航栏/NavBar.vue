<template>
    <div :class="['NavBar', { show: nav_show }]">
        <div class="blurContainer">
            <div class="header flex">
                <div class="navleft flex">
                    <a class="logo" href="#"><img src="@/assets/logo.png" alt=""></a>
                    <a class="nav-item" href="#">
                        <lan en="Home" zh="首页" />
                    </a>

                    <div :class="{
                        'nav-item': true,
                        'nav-item-hover': ms.pop_a?.delay_ox
                    }" href="#" @mouseenter="ms.a = 1" @mouseleave="ms.a = 0">
                        <lan en="无人机机架" zh="无人机机架" />
                    </div>
                    <div :class="{
                        'nav-item': true,
                        'nav-item-hover': ms.pop_b?.delay_ox
                    }" href="#" @mouseenter="ms.b = 1" @mouseleave="ms.b = 0">
                        <lan en="无人机动力方案" zh="无人机动力方案" />
                    </div>

                    <div :class="{
                        'nav-item': true,
                        'nav-item-hover': ms.pop_c?.delay_ox
                    }" href="#" @mouseenter="ms.c = 1" @mouseleave="ms.c = 0">
                        <lan en="配套专区" zh="配套专区" />
                    </div>
                    <div :class="{
                        'nav-item': true,
                        'nav-item-hover': ms.pop_d?.delay_ox
                    }" href="#" :ref="e => ms.navi_d = e" @mouseenter="ms.d = 1" @mouseleave="ms.d = 0">
                        <lan en="服务与支持" zh="服务与支持" />
                    </div>
                    <div :class="{
                        'nav-item': true,
                        'nav-item-hover': ms.pop_e?.delay_ox
                    }" href="#" :ref="e => ms.navi_e = e" @mouseenter="ms.e = 1" @mouseleave="ms.e = 0">
                        <lan en="关于我们" zh="关于我们" />
                    </div>
                </div>
                <div class="navright flex">
                    <searcher></searcher>
                    <div @click="switchLang" class="flex enzh nose pointer">
                        <div class="iconfont icon-enzh"></div>
                        <div class="text-enzh">
                            <lan en="中文" zh="English" />
                        </div>
                    </div>
                </div>
            </div>
            <popup :ref="e => ms.pop_a = e" :ox="ms.a" type="a">
                <pop_a />
            </popup>
            <popup :ref="e => ms.pop_b = e" :ox="ms.b" type="b">
                <pop_b />
            </popup>
            <popup :ref="e => ms.pop_c = e" :ox="ms.c" type="c">
                <pop_c />
            </popup>
        </div>
        <popup :ref="e => ms.pop_d = e" :ox="ms.d" type="d" :navi="ms.navi_d">
            <pop_d />
        </popup>
        <popup :ref="e => ms.pop_e = e" :ox="ms.e" type="e" :navi="ms.navi_e">
            <pop_e />
        </popup>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject, watchEffect } from 'vue'
import { useRoute, useRouter } from "vue-router"

const ms = reactive({})
const nav_show = ref(false)

const route = useRoute()
const router = useRouter()
const isZh = inject('isZh')
const switchLang = () => {
    if (isZh.value) {
        // 将当前路由的query参数lang改为en
        router.push({ query: { ...route.query, lang: 'en' } })
    } else {
        // 将当前路由的query参数lang改为zh
        router.push({ query: { ...route.query, lang: 'zh' } })
    }

}

const scroll_dirct = inject('scroll_dirct')
watchEffect(() => {
    if (scroll_dirct.value === 'down') {
        nav_show.value = false
    } else {
        nav_show.value = true
    }
})
</script>

<style scoped>
.NavBar {
    z-index: 99;
    position: sticky;
    top: -100px;
    width: 100%;
    height: 100px;
    /* background-color: var(--black); */
    background-color: rgba(0, 0, 0, 0.51);
    /* background-image: linear-gradient(to bottom, var(--hover), var(--black)); */

    --bgo: .8;
    transition: .23s;
    font-size: 20px;
}

.NavBar:hover {
    top: 0px;
}

.NavBar.show {
    top: 0px;
}

.blurContainer {
    width: 100%;
    position: relative;
    z-index: 1;
    backdrop-filter: blur(10px) grayscale(100%);
}

.header {
    position: relative;
    z-index: 1;
    height: 100px;
    width: 100%;
    overflow: hidden;
    justify-content: space-between;
    padding: 0 50px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, var(--bgo)), rgba(35, 35, 35, var(--bgo)));
}

.navleft {
    height: 100%;
}

.logo {
    height: 60px;
    display: inline-block;
}

.logo img {
    height: 100%;
}

.nav-item {
    margin-left: 50px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    /* height: 100%; */
    padding: 20px 0; 
    display: flex;
    align-items: center;
    transition: .3s;
    border-top: solid 3px var(--trans);
    border-bottom: solid 3px var(--trans);
    white-space: nowrap;
}

.nav-item-hover,
.nav-item:hover {
    /* color: var(--red); */
    border-bottom: solid 3px var(--red);
}

.enzh {
    margin-left: 40px;
    color: var(--white);
}

.enzh:hover {
    /* color: var(--red); */
}

.icon-enzh {
    font-size: 24px;
}

.text-enzh {
    /* font-size: 22px; */
    margin-left: 10px;
    white-space: nowrap;
}
</style>