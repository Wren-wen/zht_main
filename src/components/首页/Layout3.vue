<template>
    <padding>
        <div class="Layout3">
            <transition name="show-card" mode="out-in">
                <div class="item item1" 
                    @mouseenter="isShowRealKeelCard1 = true"
                    @mouseleave="isShowRealKeelCard1 = false"
                    v-if="!isShowRealKeelCard1">
                    <!-- <img :src="card1_img_path" alt=""> -->
                    <div class="sub-title1">
                        <span v-if="!isZh">{{ card1_en[0] }}</span>
                        <span v-if="isZh">{{ card1_zh[0] }}</span>
                    </div>
                    <div class="title">
                        <span v-if="!isZh">{{ card1_en[1] }}</span>
                        <span v-if="isZh">{{ card1_zh[1] }}</span>
                    </div>
                    <div class="sub-title2">
                        <span v-if="!isZh">{{ card1_en[2] }}</span>
                        <span v-if="isZh">{{ card1_zh[2] }}</span>
                    </div>
                    <div class="more-btn" style="display: none;">
                        <div>了解更多</div>
                        <div class="triangle">▶</div>
                    </div>
                </div>
                <div class="item back back1" 
                    @mouseenter="isShowRealKeelCard1 = true"
                    @mouseleave="isShowRealKeelCard1 = false"
                    v-else>
                    <!-- <img :src="card1_img_path" alt=""> -->
                    <div class="wrapper">
                        <div class="sub-title1">
                            <span v-if="!isZh">{{ card1_en[0] }}</span>
                            <span v-if="isZh">{{ card1_zh[0] }}</span>
                        </div>
                        <div class="title">
                            <span v-if="!isZh">{{ card1_en[1].split(" ").slice(0, 2).join(" ") }}</span>
                            <span v-if="isZh">{{ card1_zh[1].split(" ").slice(0, 2).join(" ") }}</span>
                        </div>
                        <div class="sub-title2">
                            <span v-if="!isZh">{{ card1_en[2] }}</span>
                            <span v-if="isZh">{{ card1_zh[2] }}</span>
                        </div>
                        <div class="more-btn">
                            <div v-if="!isZh">Learn more</div>
                            <div v-if="isZh">了解更多</div>
                            <div class="triangle">▶</div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="show-card" mode="out-in">
                <div class="item item2" 
                    @mouseenter="isShowRealKeelCard2 = true"
                    @mouseleave="isShowRealKeelCard2 = false"
                    v-if="!isShowRealKeelCard2">
                    <!-- <img :src="card2_img_path" alt=""> -->
                    <div class="sub-title1">
                        <span v-if="!isZh">{{ card2_en[0] }}</span>
                        <span v-if="isZh">{{ card2_zh[0] }}</span>
                    </div>
                    <div class="title">
                        <span v-if="!isZh">{{ card2_en[1] }}</span>
                        <span v-if="isZh">{{ card2_zh[1] }}</span>
                    </div>
                    <div class="sub-title2">
                        <span v-if="!isZh">{{ card2_en[2] }}</span>
                        <span v-if="isZh">{{ card2_zh[2] }}</span>
                    </div>
                    <div class="more-btn" style="display: none;">
                        <div>了解更多</div>
                        <div class="triangle">▶</div>
                    </div>
                </div>
                <div class="item back back2" 
                    style="marginLeft: 20px;"
                    @mouseenter="isShowRealKeelCard2 = true"
                    @mouseleave="isShowRealKeelCard2 = false"
                    v-else>
                    <!-- <img :src="card2_img_path" alt=""> -->
                    <div class="wrapper">
                        <div class="sub-title1">
                            <span v-if="!isZh">{{ card2_en[0] }}</span>
                            <span v-if="isZh">{{ card2_zh[0] }}</span>
                        </div>
                        <div class="title">
                            <span v-if="!isZh">{{ card2_en[1].split(" ").slice(0, 2).join(" ") }}</span>
                            <span v-if="isZh">{{ card2_zh[1].split(" ").slice(0, 2).join(" ") }}</span>
                        </div>
                        <div class="sub-title2">
                            <span v-if="!isZh">{{ card2_en[2] }}</span>
                            <span v-if="isZh">{{ card2_zh[2] }}</span>
                        </div>
                        <div class="more-btn">
                            <div v-if="!isZh">Learn more</div>
                            <div v-if="isZh">了解更多</div>
                            <div class="triangle">▶</div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </padding>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from 'vue'
import pubuse from '@/utils/pub-use';
let props = defineProps(['card1_en', 'card1_zh', 'card2_en', 'card2_zh', 'card1_img_path', 'card2_img_path', 'back_card1', 'back_card2']); // 四个数组

let isZh = inject('isZh');
let isShowRealKeelCard1 = ref(false);
let isShowRealKeelCard2 = ref(false);

let card1_img_path = ref('url(' + props.card1_img_path + ')');
let card2_img_path = ref('url(' + props.card2_img_path + ')');
let back_card1 = ref('url(' + props.back_card1 + ')');
let back_card2 = ref('url(' + props.back_card2 + ')');

onMounted(() => {
    
})
</script>

<style lang="less" scoped>
.Layout3 {
    --height: 800px;
    --gap: 20px;


    // margin: 80px 0 0 0;
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
    background-size: 100% 100%;
    background-image: v-bind(card1_img_path);
}

.item2 {
    flex: 1;
    margin-left: var(--gap);
    height: var(--height);
    background-color: #efefef;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-size: 100% 100%;
    background-image: v-bind(card2_img_path);
}

.item1, .item2, .back {
    border-radius: 12px;
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
        position: relative;
        // bottom: 18px;
        display: inline-flex;
        align-items: center;
        background-color: #ff1215;
        color: #fffeff;
        text-align: center;
        letter-spacing: 1.5px;
        font-size: 14px;
        border-radius: 18px;
        padding: 4px 11px;
        // position: relative;
        // left: 50%;
        // transform: translateX(-50%);
        cursor: pointer;
        .triangle {
            font-size: 12px;
            margin-left: 4px;
        }
    }
}

.back1 {
    background-image: v-bind(back_card1);
}

.back2 {
    background-image: v-bind(back_card2);
}


.back {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    height: var(--height);
    background-color: #efefef;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-size: 100% 100%;
    .wrapper {
        margin-left: 40px;
        margin-bottom: 20px;
        .sub-title1 {
            text-align: unset;
        }
        .title {
            text-align: unset;
        }
        .sub-title2 {
            text-align: unset;
            font-size: 16px;
        }
        .more-btn {
            position: relative;
            bottom: 13px;
        }
    }
}


/* 过渡动画 */
.show-card-enter-from,
.show-card-leave-to {
    opacity: 0;
}

.show-card-enter-active {
    transition: opacity 0.3s ease;
}

.show-card-leave-active {
    transition: opacity 0.1s ease;
}

// .hide-card-enter-from,
// .hide-card-leave-to {
//     opacity: 1;
// }

// .hide-card-enter-active,
// .hide-card-leave-active {
//     transition: opacity 0.5s ease;
// }

// .hide-card-enter-to,
// .hide-card-leave-from {
//     opacity: 0;
// }
</style>