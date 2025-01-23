<template>
    <div ref="dropDom" class="ConfigImage">
        <input type="text" :value="cover" @input="$emit('update:cover', $event.target.value)"
            placeholder=": 填写图片名或拖拽图片到下方">
        <div class="iconfont icon-loading" v-if="loading"></div>
        <div class="box">
            <div v-if="!correct_url" class="cover">
                <span>{{ cover ? '不在image_bed文件夹下/不是图片' : '图片需要放在image_bed文件夹' }}</span>
                <div>[将图片拖拽到此处]</div>
            </div>
            <img v-else :src="correct_url" alt="">
            <div v-if="isDragOver" class="dragtip">
                释放鼠标完成上传
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import useDrop from '@/hooks/configuration/useDrop'

const props = defineProps(['cover'])
const emits = defineEmits(['update:cover'])


const correct_url = ref()
const loading = ref(false)
const dropDom = ref()

const isDragOver = useDrop(dropDom, filename => {
    // console.log(filename);
    emits('update:cover', filename)
})

watch(() => props.cover, (to) => {
    // to为图片路径，需要判断是否在image_bed文件夹下
    // 创建图片检查是否成功加载
    correct_url.value = ''
    if(!to) return;
    const img = new Image()
    img.src = `configuration/image_bed/${to}`
    loading.value = true
    img.onload = () => {
        loading.value = false
        if(to !== props.cover) return;
        correct_url.value = `configuration/image_bed/${to}`
    }
    img.onerror = () => {
        loading.value = false
    }
}, { immediate: true })

</script>

<style scoped>
.ConfigImage {
    flex: 1;
    width: 100%;
    background-color: #fff;
    border-radius: 12px;
    border: solid 1px #e7eaef;
    overflow: hidden;
    position: relative;
}

input {
    width: 100%;
    font-size: 18px;
    padding: 9px 10px;
    padding-right: 30px;
    background-color: transparent;
    border-bottom: solid 1px #e7eaef;
}

.box {
    width: 100%;
    position: relative;
    pointer-events: none;
}

.cover {
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    color: #999;
    color: #3aa387;
    color: #3eb393;
}

.cover span {
    font-size: 18px;
    color: red;
    color: rgb(255, 89, 89);
}

.dragtip {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.425);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #454545;
    backdrop-filter: blur(10px);
    /* pointer-events: none; */
    /* cursor: ; */
}

img {
    width: 100%;
}
.icon-loading{
    position: absolute;
    font-size: 26px;
    top: 12px;
    right: 8px;
    color: rgba(0, 0, 0, 0.479);
    animation: rotate 1.5s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>