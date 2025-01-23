<template>
    <div class="configuration">
        <h1>您已进入管理员模式，可以对网页以下板块数据进行编辑</h1>
        <div class="bar">
            <ConfigItem1></ConfigItem1>
            <ConfigItem2></ConfigItem2>
            <ConfigItem3></ConfigItem3>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject, onUnmounted } from 'vue'


const configuration = inject('configuration')
onMounted(() => {
    configuration.on = true
})
onUnmounted(() => {
    configuration.on = false
})

</script>

<style scoped>
.configuration {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-size: 50px;
    color: #f39393;
    border-bottom:  dashed 5px #404040;
    margin-top: 140px;
}

.bar {
    margin-top: 64px;
    display: flex;
}
</style>