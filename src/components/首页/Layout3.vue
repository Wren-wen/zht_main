<template>
    <padding>
        <div class="Layout3">
            <div class="item item1">
                <!-- <img src="@/assets/轮播图/1.png" alt=""> -->
                <div class="sub-title1">
                    <span>NAGA 系列</span>
                </div>
                <div class="title">
                    <span>NAGA X4 测绘专家</span>
                </div>
                <div class="sub-title2">
                    <span>3公斤级轻盈灵动</span>
                </div>
                <div class="more-btn">
                    <div>了解更多</div>
                    <div class="triangle">▶</div>
                </div>
            </div>
            <div class="item item2">
                <!-- <img src="@/assets/轮播图/1.png" alt=""> -->
                <div class="sub-title1">
                    <span>NAGA 系列</span>
                </div>
                <div class="title">
                    <span>NAGA X8 稳载高手</span>
                </div>
                <div class="sub-title2">
                    <span>8公斤级高效稳健</span>
                </div>
                <div class="more-btn">
                    <div>了解更多</div>
                    <div class="triangle">▶</div>
                </div>
            </div>
        </div>
    </padding>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'


</script>

<style lang="less" scoped>
.Layout3 {
    --height: 800px;
    /* --gap: 20px; */


    margin: 80px 0 0 0;
    width: 100%;
    display: flex;
    color: black;
    font-size: 50px;
}
.item{
    overflow: hidden;
}
.item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.item1 {
    flex: 1;
    height: var(--height);
    background-color: #efefef;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.item2 {
    flex: 1;
    margin-left: var(--gap);
    height: var(--height);
    background-color: #efefef;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.item1, .item2 {
    .sub-title1 {
        margin-top: 35px;
        text-align: center;
        font-size: 22px;
        color: #9a9a9a;
    }
    .title {
        text-align: center;
        font-size: 32px;
        margin-top: 8px;
    }
    
    .sub-title2 {
        margin-top: 10px;
        text-align: center;
        font-size: 22px;
        color: #9a9a9a;
    }
    .more-btn {
        display: inline-flex;
        align-items: center;
        background-color: #ff1215;
        color: #fffeff;
        text-align: center;
        letter-spacing: 2px;
        font-size: 25px;
        border-radius: 12px;
        padding: 0 14px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        .triangle {
            font-size: 12px;
            margin-left: 4px;
        }
    }
}
</style>