<template>
    <padding>
        <div class="Layout1">
            <div class="item item1">
                <!-- <img src="@/assets/轮播图/1.png" alt=""> -->
                <div class="sub-title">
                    <span v-if="!isZh">Suitable for 10kg payload and long endurance scenarios</span>
                    <span v-if="isZh">适用于10kg负载长航时场景</span>
                </div>
                <div class="title">
                    <span v-if="!isZh">KEEL Frame</span>
                    <span v-if="isZh">KEEL 机架</span>
                </div>
                <div class="more-btn">
                    <div v-if="!isZh">Learn more</div>
                    <div v-if="isZh">了解更多</div>
                    <div class="triangle">▶</div>
                </div>
            </div>
            <div class="lay1">
                <div class="item item2">
                    <!-- <img src="@/assets/轮播图/2.png" alt=""> -->
                    <div class="sub-title">
                        <span v-if="!isZh">10kg payload small and compact design</span>
                        <span v-if="isZh">10kg负载小型紧凑设计</span>
                    </div>
                    <div class="title">
                        <span v-if="!isZh">KEEL MINI Frame</span>
                        <span v-if="isZh">KEEL MINI 机架</span>
                    </div>
                    <div class="more-btn">
                        <div v-if="!isZh">Learn more</div>
                        <div v-if="isZh">了解更多</div>
                        <div class="triangle">▶</div>
                    </div>
                </div>
                <div class="item item3">
                    <!-- <img src="@/assets/轮播图/3.png" alt=""> -->
                    <div class="sub-title">
                        <span v-if="!isZh">30kg heavy-payload flying platform</span>
                        <span v-if="isZh">30kg重载飞行平台</span>
                    </div>
                    <div class="title">
                        <span v-if="!isZh">KEEL PLUS Frame</span>
                        <span v-if="isZh">KEEL PLUS 机架</span>
                    </div>
                    <div class="more-btn">
                        <div v-if="!isZh">Learn more</div>
                        <div v-if="isZh">了解更多</div>
                        <div class="triangle">▶</div>
                    </div>
                </div>
            </div>
        </div>
    </padding>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from 'vue'

let isZh = inject('isZh');

</script>

<style lang="less" scoped>
.Layout1 {
    --height: 800px;
    /* --gap: 20px; */


    width: 100%;
    display: flex;
    color: black;
    font-size: 50px;
    /* margin: 80px 0; */
}
.item{
    overflow: hidden;
    background-color: #efefef;
}
.item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.item1 {
    flex: 1;
    height: var(--height);
    /* background-color: var(--white); */
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-image: url("@/assets/首页/frame/KEEL.jpg");
    background-size: 100% 100%;
    border-radius: 12px;
    .sub-title {
        margin-top: 35px;
        text-align: center;
        font-size: 20px;
        color: #9a9a9a;
    }
    .title {
        text-align: center;
        font-size: 26px;
        margin-top: 8px;
    }
    .more-btn {
        position: relative;
        bottom: 18px;
        display: inline-flex;
        align-items: center;
        background-color: #ff1215;
        color: #fffeff;
        text-align: center;
        letter-spacing: 1.5px;
        font-size: 14px;
        border-radius: 18px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        padding: 4px 11px;
        .triangle {
            font-size: 12px;
            margin-left: 4px;
        }
    }
}
.lay1 {
    flex: 1;
    height: var(--height);
    margin-left: var(--gap);
    display: flex;
    flex-direction: column;

}

.item2 {
    flex: 1;
    /* background-color: var(--white); */
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-image: url("@/assets/首页/frame/KEEL_MINI.jpg");
    background-size: 100% 100%;
    border-radius: 12px;
}
.item3 {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: var(--gap);
    /* background-color: var(--white); */
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-image: url("@/assets/首页/frame/KEEL_PLUS.jpg");
    background-size: 100% 100%;
    border-radius: 12px;
}

.item2, .item3 {
    .sub-title {
        margin-top: 35px;
        font-size: 22px;
        color: #9a9a9a;
    }
    .title {
        font-size: 26px;
        margin-top: 8px;
    }
    .more-btn {
        width: fit-content;
        position: relative;
        bottom: 18px;
        background-color: #ff1215;
        color: #fffeff;
        text-align: center;
        display: inline-flex;
        align-items: center;
        letter-spacing: 1.5px;
        font-size: 14px;
        border-radius: 18px;
        padding: 4px 11px;
        cursor: pointer;
        .triangle {
            font-size: 12px;
            margin-left: 4px;
        }
    }
    .sub-title, .title, .more-btn {
        margin-left: 40px;
    }
}

// 此处item3的btn有一部分样式和item2不同，需要单独调整
.item3 {
    .more-btn {
        bottom: 0px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
}

</style>