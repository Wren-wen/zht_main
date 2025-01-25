<template>
    <padding>
        <div class="Layout1">
            <div class="item item1">
                <!-- <img src="@/assets/轮播图/1.png" alt=""> -->
                <div class="sub-title">
                    <span>您的DIY首选</span>
                </div>
                <div class="title">
                    <span>KEEL MINI 机架</span>
                </div>
                <div class="more-btn">
                    <div>了解更多</div>
                    <div class="triangle">▶</div>
                </div>
            </div>
            <div class="lay1">
                <div class="item item2">
                    <!-- <img src="@/assets/轮播图/2.png" alt=""> -->
                    <div class="sub-title">
                        <span>10kg长续航飞行平台</span>
                    </div>
                    <div class="title">
                        <span>KEEL 机架</span>
                    </div>
                    <div class="more-btn">
                        <div>了解更多</div>
                        <div class="triangle">▶</div>
                    </div>
                </div>
                <div class="item item3">
                    <!-- <img src="@/assets/轮播图/3.png" alt=""> -->
                    <div class="sub-title">
                        <span>30kg重载飞行平台</span>
                    </div>
                    <div class="title">
                        <span>KEEL PLUS 机架</span>
                    </div>
                    <div class="more-btn">
                        <div>了解更多</div>
                        <div class="triangle">▶</div>
                    </div>
                </div>
            </div>
        </div>
    </padding>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'


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
    .sub-title {
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
}
.item3 {
    flex: 1;
    margin-top: var(--gap);
    /* background-color: var(--white); */
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.item2, .item3 {
    .sub-title {
        margin-top: 35px;
        font-size: 22px;
        color: #9a9a9a;
    }
    .title {
        font-size: 36px;
        margin-top: 8px;
    }
    .more-btn {
        background-color: #ff1215;
        color: #fffeff;
        text-align: center;
        display: inline-flex;
        align-items: center;
        letter-spacing: 2px;
        font-size: 25px;
        border-radius: 12px;
        padding: 0 14px;
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

</style>