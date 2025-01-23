<template>
    <div class="Pop_b">
        <div class="container">
            <div class="bar one">
                <div class="bar four">
                    <h1>
                        <lan en="KEEL系列" zh="KEEL系列" />
                    </h1>
                    <h3>
                        <lan en="10-100公斤级动力方案" zh="10-100公斤级动力方案" />
                    </h3>
                </div>
                <h3>
                    <lan en="模块化设计 · 一机应百变" zh="模块化设计 · 一机应百变" />
                </h3>
            </div>
            <div class="list">
                <div class="item one">
                    <div class="bar two">
                        <h2>
                            <lan en="KEEL" zh="KEEL" />
                        </h2>
                    </div>
                    <img class="one" src="@/assets/比例图/350x220.png" alt="">
                </div>
                <div class="item one">
                    <div class="bar two">
                        <h2>
                            <lan en="KEEL MINI" zh="KEEL MINI" />
                        </h2>
                    </div>
                    <img class="one" src="@/assets/比例图/350x220.png" alt="">
                </div>
                <div class="item one">
                    <div class="bar two">
                        <h2>
                            <lan en="KEEL PLUS" zh="KEEL PLUS" />
                        </h2>
                    </div>
                    <img class="one" src="@/assets/比例图/350x220.png" alt="">
                </div>
            </div>
            <div class="list">
                <div class="item two">
                    <div class="bar two">
                        <h2>
                            <lan en="KEEL PRO" zh="KEEL PRO" />
                        </h2>
                    </div>
                    <img class="two" src="@/assets/比例图/540x220.png" alt="">
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
                    <img class="two" src="@/assets/比例图/540x220.png" alt="">
                </div>
            </div>
        </div>
        <div class="container two">
            <div class="bar three">
                <h1>
                    <lan en="NAGA系列" zh="NAGA系列" />
                </h1>
                <h3 class="two">
                    <lan en="3-8公斤级动力方案" zh="3-8公斤级动力方案" />
                </h3>
            </div>
            <div class="item one">
                <div class="bar two">
                    <h2>
                        <lan en="NAGA X4" zh="NAGA X4" />
                    </h2>
                </div>
                <img class="one" src="@/assets/比例图/350x220.png" alt="">
            </div>
            <div class="item one">
                <div class="bar two">
                    <h2>
                        <lan en="NAGA X8" zh="NAGA X8" />
                    </h2>
                </div>
                <img class="one" src="@/assets/比例图/350x220.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'


</script>

<style scoped>
.Pop_b {
    height: 800px;
    padding: 0px 0px 40px 134px;
    display: flex;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container.two {
    margin-left: 170px;
}

.bar {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-items: center;
    font-size: 20px;
    height: 100px;
    display: flex;
    align-items: center;
}
.bar.four{
    width: 355px;

}
.list {
    display: flex;
    justify-content: space-between;
}

.item.two {
    margin-right: 30px;
}

.bar.two {
    /* margin-bottom: 20px; */
}

img.one {
    width: 355px;
    height: 220px;
}

img.two {
    width: 540px;
    height: 240px;
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

h3 {
    font-size: 20px;
    font-weight: light;
    color: #9a9a9a;
}

h3.two {
    font-size: 20px;
    /* width: 110px; */
}
</style>