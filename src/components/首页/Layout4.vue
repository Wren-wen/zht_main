<template>
    <padding>
        <div class="Layout4">
            <div class="lay1">
                <div class="item1">
                    <div class="wrapper">
                        <div class="title">
                            <span>动力系统</span>
                        </div>
                        <div class="more-btn">
                            <div>了解更多</div>
                            <div class="triangle">▶</div>
                        </div>
                    </div>
                </div>
                <div class="item2">
                    <div class="wrapper">
                        <div class="title">
                            <span>飞行控制系统</span>
                        </div>
                        <div class="more-btn">
                            <div>了解更多</div>
                            <div class="triangle">▶</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lay2">
                <div class="item3">
                    <div class="wrapper">
                        <div class="title">
                            <span>载荷设备</span>
                        </div>
                        <div class="more-btn">
                            <div>了解更多</div>
                            <div class="triangle">▶</div>
                        </div>
                    </div>
                </div>
                <div class="item4">
                    <div class="wrapper">
                        <div class="title">
                            <span>其他</span>
                        </div>
                        <div class="more-btn">
                            <div>了解更多</div>
                            <div class="triangle">▶</div>
                        </div>
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
.Layout4 {
    --height: 400px;
    --gap: 20px;


    width: 100%;
    display: flex;
    color: black;
    font-size: 50px;
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


.item2 {
    width: 100%;
    height: var(--height);
    margin-top: var(--gap);
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.item3 {
    flex: 1;
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}


.item4 {
    margin-top: var(--gap);
    flex: 1;
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.item1, .item2, .item3, .item4 {
    .wrapper {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        .title {
            text-align: center;
            font-size: 32px;
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

}

</style>