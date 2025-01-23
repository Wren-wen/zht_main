<template>
    <div class="Frame" v-if="frame">
        <div v-for="tool in frame" class="tool-container">
            <div v-if="tool.type === 1" :style="{
                color: tool.color,
                fontSize: (tool.fontSize / 16) + 'rem',
                fontWeight: tool.fontWeight,
            }" :class="['decoration-' + tool.decoration]">
                <lan :en="tool.txt_en" :zh="tool.txt" />
            </div>
            <div v-else-if="tool.type === 2" :style="{
                color: tool.color,
                fontSize: (tool.fontSize / 16) + 'rem',
                fontWeight: tool.fontWeight,
                height: (tool.height / 16) + 'rem',
            }"></div>
            <a v-else-if="tool.type === 3" :style="{
            }" :href="tool.href ? tool.href : 'javascript:void(0)'" :target="tool.href ? '_blank' : ''" class="image">
                <img :src="`configuration/image_bed/${tool.src}`" alt="">
            </a>
            <div v-else-if="tool.type === 4" :style="{
            }" class="video">
                <video :src="`configuration/image_bed/${tool.src}`" controls></video>
            </div>
            <a v-else-if="tool.type === 5" :href="tool.href ? tool.href : 'javascript:void(0)'"
                :target="tool.href ? '_blank' : ''" :style="{
                    color: tool.color,
                    backgroundColor: tool.backgroundColor,
                }" class="button">
                <lan :en="tool.txt_en" :zh="tool.txt" />
            </a>
            <div v-else-if="tool.type === 6" :style="{
                height: (tool.height / 16) + 'rem',
            }" class="widget-container">
                <div v-for="w in tool.widget" class="widget" :style="{
                    zIndex: w.zIndex,
                    top: (w.top / 16) + 'rem',
                    left: (w.left / 16) + 'rem',
                    width: (w.width / 16) + 'rem',
                    height: (w.height / 16) + 'rem',
                    borderRadius: w.borderRadius + 'px',
                }">
                    <div v-if="w.type === 1" :style="{
                        color: w.color,
                        fontSize: (w.fontSize / 16) + 'rem',
                        fontWeight: w.fontWeight,
                    }">
                        <lan :en="w.txt_en" :zh="w.txt" />
                    </div>
                    <a v-else-if="w.type === 2" :style="{
                    }" :href="w.href ? w.href : 'javascript:void(0)'" :target="w.href ? '_blank' : ''" class="image w">
                        <img :src="`configuration/image_bed/${w.src}`" alt="">
                    </a>
                    <div v-else-if="w.type === 3" :style="{
                    }" class="video w">
                        <video :src="`configuration/image_bed/${w.src}`" controls></video>
                    </div>
                    <a v-else-if="w.type === 4" :href="w.href ? w.href : 'javascript:void(0)'"
                        :target="w.href ? '_blank' : ''" :style="{
                            color: w.color,
                            fontWeight: w.fontWeight,
                            fontSize: (w.fontSize / 16) + 'rem',
                            backgroundColor: w.backgroundColor,
                        }" class="button w">
                        <lan :en="w.txt_en" :zh="w.txt" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'

const props = defineProps(['frame'])

console.log(props);

</script>

<style scoped>
.Frame {
    width: 100%;
    font-size: 20px;
    position: relative;
}


.tool-container {
    width: 100%;
    position: relative;
}

.decoration-1 {
    border-left: solid 6px #ccc;
    padding-left: 20px;
    margin: 0 40px;
    font-style: italic;
}

.decoration-2 {
    text-align: center;
}

.video video {
    width: 100%;
    height: auto;
}

.image {
    width: 100%;
    display: block;
}

.image img {
    width: 100%;
    height: auto;
}

.button {
    border-radius: 99999px;
    overflow: hidden;
    font-size: 24px;
    padding: 10px 20px;
    transition: .2s;
    font-weight: bold;
    box-shadow: 0 0 10px #ccc;
}

.button:hover {
    filter: grayscale(24%);
}

.widget-container {
    position: relative;
    overflow: hidden;
}

.widget {
    overflow: hidden;
    position: absolute;
}
.image.w{
    width: 100%;
    height: 100%;
}
.image.w img{
    width: 100%;
    height: 100%;
}
.video.w{
    width: 100%;
    height: 100%;
}
.video.w video {
    width: 100%;
    height: 100%;
}

.button.w {
    width: 100%;
    height: 100%;
    border-radius: unset;
    padding: unset;
    font-size: unset;
    font-weight: unset;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>