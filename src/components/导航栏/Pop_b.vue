<template>
    <div class="Pop_b">
        <div class="wrapper">
            <div class="container">
                <div class="bar one">
                    <div class="bar four">
                        <h1>
                            <lan en="KEEL series" zh="KEEL系列" />
                        </h1>
                        <span class="tip" style="marginLeft: 1rem;">
                            <lan en="0-160kg payload solution" zh="0-160公斤负载方案" />
                        </span>
                    </div>
                    <span class="tip mid">
                        <lan en="Modular design · One drone for a variety of applications" zh="模块化设计 · 一机应百变" />
                    </span>
                </div>
                <div class="list">
                    <div class="item one">
                        <div class="bar two">
                            <h2>
                                <lan en="KEEL" zh="KEEL" />
                            </h2>
                        </div>
                        <img class="one" src="@/assets/目录/system/KEEL.jpg" alt="">
                    </div>
                    <div class="item one">
                        <div class="bar two">
                            <h2>
                                <lan en="KEEL MINI" zh="KEEL MINI" />
                            </h2>
                        </div>
                        <img class="one" src="@/assets/目录/system/KEEL_MINI.jpg" alt="">
                    </div>
                    <div class="item one">
                        <div class="bar two">
                            <h2>
                                <lan en="KEEL PLUS" zh="KEEL PLUS" />
                            </h2>
                        </div>
                        <img class="one" src="@/assets/目录/system/KEEL_PLUS.jpg" alt="">
                    </div>
                </div>
                <div class="list">
                    <div class="item two">
                        <div class="bar two">
                            <h2>
                                <lan en="KEEL PRO" zh="KEEL PRO" />
                            </h2>
                        </div>
                        <img class="two" src="@/assets/目录/system/KEEL_PRO.jpg" alt="">
                    </div>
                    <div class="item one">
                        <div class="bar two">
                            <h2>
                                <lan en="KEEL MAX" zh="KEEL MAX" />
                            </h2>
                            <h3>
                                <!-- <lan en="30-100公斤级动力方案" zh="30-100公斤级动力方案" /> -->
                            </h3>
                        </div>
                        <img class="two" src="@/assets/目录/system/KEEL_MAX.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="container two">
                <div class="bar three">
                    <h1>
                        <lan en="NAGA series" zh="NAGA系列" />
                    </h1>
                    <span class="tip two">
                        <lan en="0-8kg payload solution" zh="0-8公斤负载方案" />
                    </span>
                </div>
                <div class="item one">
                    <div class="bar two">
                        <h2>
                            <lan en="NAGA X4" zh="NAGA X4" />
                        </h2>
                    </div>
                    <img class="three" src="@/assets/目录/system/NAGA_X4.jpg" alt="">
                </div>
                <div class="item one">
                    <div class="bar two">
                        <h2>
                            <lan en="NAGA X8" zh="NAGA X8" />
                        </h2>
                    </div>
                    <img class="three" src="@/assets/目录/system/NAGA_X8.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from 'vue'
let isZh = inject('isZh');

</script>

<style lang="less" scoped>
.Pop_b {
    height: 830px;
    padding: 0px 0px 40px 0;
    display: flex;
    background-color: #dcdcdc;
}

.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

.container {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
}

.container.two {
    margin-left: 120px;
}

.bar {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-items: center;
    font-size: 20px;
    height: 60px;
    display: flex;
    align-items: center;
}
.bar.four{

}
.list {
    display: flex;
    justify-content: space-between;
}

.item.two {
    margin-right: 30px;
}

.bar.one {
    position: relative;
    ::after {
        content: "";
        position: absolute; 
        left: -2000px;
        overflow-x: hidden;
        bottom: 0; 
        width: 2000vw;
        height: 3px; 
        background-color: #bebebe;
    }
}

.bar.two {
    /* margin-bottom: 20px; */
}

img.one {
    width: 280px;
    height: 240px;
}
 
img.two {
    width: 445px;
    height: 350px;
}

img.three {
    width: 350px;
    height: 295px;
}

img {
    border-radius: 12px;
}

h1,
h2,
h3 {
    font-weight: normal;
}

h1 {
    font-size: 20px;
}

h2 {
    font-size: 19px;
}

h3.two {
    font-size: 20px;
    /* width: 110px; */
}
.tip {
    font-size: 20px;
    font-weight: 1;
    color: #9a9a9a;
}

.tip.mid {
    font-size: v-bind("isZh ? '1.25rem' : '0.9375rem'");
    color: v-bind("isZh ? '#9a9a9a' : '#5e5c5d'");
    font-weight: v-bind("isZh ? '100': '700'");
}
</style>