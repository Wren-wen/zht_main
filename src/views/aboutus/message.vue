<template>
    <div class="message">
        <div class="header-pic">
            <div class="header-text">
                <lan en="Leave a message" zh="留言窗口" />
            </div>
        </div>
        <message-window class="msg-window" />
        <footer-bar></footer-bar>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'


</script>

<style lang="less" scoped>
.message {
    height: 100%;
    background-color: #f0f0f0;
    overflow-x: hidden;
    .header-pic {
        aspect-ratio: 1920 / 400;
        background-image: url("@/assets/关于我们/留言窗口/背图.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 0 -1px;
        .header-text {
            font-size: 50px;
            display: inline-block;
            position: relative;
            top: 50%;
            transform: translateY(-75%);
            color: #fff;
            left: 200px;
        }
    }
    .msg-window {
        margin-top: 80px;
        margin-bottom: 80px;
        display: flex;
        justify-self: center;
    }
}

</style>