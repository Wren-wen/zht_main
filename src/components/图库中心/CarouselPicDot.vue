<template>
    <div class="carouseldot nose">
        <div class="container">
            <div @click="idx = i+1;" :class="{ item: 1, active: i+1 == idx || (i == 0 && idx == urls.length + 1) || (i+1 == urls.length && idx == 0) }" v-for="(url, i) in urls">
                <img class="itemimg" :src="url" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import pubuse from '@/utils/pub-use'
import { ref, inject, onMounted, computed } from 'vue'

const urls = inject('urls')
const idx = inject('idx')

const oxAni = inject('oxAni')

</script>

<style scoped>
.carouseldot {
    --width: 180px;
    --widthImg: 100%;
    --padding: 10px;


    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    margin: 50px 0;
    justify-content: center;

}

.container {
    display: flex;
    align-items: center;
    --offset: calc(100%/2 - var(--width)/2);
    transition: v-bind('oxAni ? ".5s" : "0s"');
}

.item {
    width: var(--width);
    padding: var(--padding);
    flex-shrink: 0;
    transform: scale(1);
    transition: .54s;
    transition: v-bind('oxAni ? ".5s" : "0s"');
    border-radius: 30px;
    /* overflow: hidden; */
    position: relative;
    cursor: pointer;
}

.item.active {
    border-radius: 0px;
    transform: scale(1);
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, .2));
}

.itemimg {
    width: var(--widthImg);
    position: relative;
    transition: v-bind('oxAni ? ".5s" : "0s"');
    filter: grayscale(1) brightness(0.7);
}

.item.active .itemimg {
    opacity: 1;
    filter: unset;
}

.dotbox {
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    display: flex;
    backdrop-filter: blur(10px);
    height: 20px;
}
</style>