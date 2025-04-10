<template>
    <padding>
        <div class="Layout4">
            <div class="lay1">
                <div class="item1">
                    <div class="wrapper">
                        <div class="title">
                            <span v-if="!isZh">Power System</span>
                            <span v-if="isZh">动力系统</span>
                        </div>
                        <div class="more-btn">
                            <div v-if="!isZh">Learn more</div>
                            <div v-if="isZh">了解更多</div>
                            <div class="triangle">▶</div>
                        </div>
                    </div>
                </div>
                <div class="item2">
                    <div class="wrapper">
                        <div class="title">
                            <span v-if="!isZh">Link</span>
                            <span v-if="isZh">链路</span>
                        </div>
                        <div class="more-btn">
                            <div v-if="!isZh">Learn more</div>
                            <div v-if="isZh">了解更多</div>
                            <div class="triangle">▶</div>
                        </div>
                    </div>
                </div>
                <div class="item3">
                    <div class="wrapper">
                        <div class="title">
                            <span v-if="!isZh">Payload Equipment</span>
                            <span v-if="isZh">载荷设备</span>
                        </div>
                        <div class="more-btn">
                            <div v-if="!isZh">Learn more</div>
                            <div v-if="isZh">了解更多</div>
                            <div class="triangle">▶</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lay2">
                <div class="item4">
                    <div class="wrapper">
                        <div class="title">
                            <span v-if="!isZh">Flight Control System</span>
                            <span v-if="isZh">飞控系统</span>
                        </div>
                        <div class="more-btn">
                            <div v-if="!isZh">Learn more</div>
                            <div v-if="isZh">了解更多</div>
                            <div class="triangle">▶</div>
                        </div>
                    </div>
                </div>
                <div class="item5">
                    <div class="wrapper">
                        <div class="title">
                            <span v-if="!isZh">Power Management</span>
                            <span v-if="isZh">电源管理</span>
                        </div>
                        <div class="more-btn">
                            <div v-if="!isZh">Learn more</div>
                            <div v-if="isZh">了解更多</div>
                            <div class="triangle">▶</div>
                        </div>
                    </div>
                </div>
                <div class="item6">
                    <div class="wrapper">
                        <div class="title">
                            <span v-if="!isZh">Other</span>
                            <span v-if="isZh">其他</span>
                        </div>
                        <div class="more-btn">
                            <div v-if="!isZh">Learn more</div>
                            <div v-if="isZh">了解更多</div>
                            <div class="triangle">▶</div>
                        </div>
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
.Layout4 {
    --height: 400px;
    --gap: 20px;


    width: 100%;
    display: flex;
    color: black;
    font-size: 50px;
    margin-top: 40px;
}

.lay1 {
    flex: 1;
    display: flex;
    flex-direction: column;

}
.lay2 {
    flex: 1;
    margin-left: var(--gap);
    display: flex;
    flex-direction: column;
}
.item1 {
    width: 100%;
    height: var(--height);
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}


.item2, .item3, .item6 {
    width: 100%;
    height: var(--height);
    margin-top: var(--gap);
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.item4 {
    flex: 1;
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}


.item5 {
    margin-top: var(--gap);
    flex: 1;
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.item1, .item2, .item3, .item4, .item5, .item6 {
    border-radius: 12px;
    .wrapper {
        position: relative;
        top: 25px;
        .title {
            text-align: center;
            font-size: 32px;
        }
        .more-btn {
            position: relative;
            bottom: 24px;
            display: inline-flex;
            align-items: center;
            background-color: #ff1215;
            color: #fffeff;
            text-align: center;
            letter-spacing: 0.8px;
            font-size: 14px;
            border-radius: 18px;
            padding: 4px 11px;
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
}

.item1 {
    background-image: url("@/assets/首页/accessory/动力系统.jpg");
    background-size: 100% 100%;
}

.item2 {
    background-image: url("@/assets/首页/accessory/链路.jpg");
    background-size: 100% 100%;
}

.item3 {
    background-image: url("@/assets/首页/accessory/载荷.jpg");
    background-size: 100% 100%;
}

.item4 {
    background-image: url("@/assets/首页/accessory/飞控系统.jpg");
    background-size: 100% 100%;
}

.item5 {
    background-image: url("@/assets/首页/accessory/电源管理.jpg");
    background-size: 100% 100%;
}

.item6 {
    background-image: url("@/assets/首页/accessory/其他.jpg");
    background-size: 100% 100%;
}

</style>