<template>
    <div class="CardsIcon nose">
        <div :class="{ card: 1, active: i === idx}" :style="{
            left: `calc(var(--offset) * ${(i-idx+urls.length)%urls.length})`,
            transform: `translateX(${i===idx?0:'1rem'}) translateY(${i===idx?'.4rem':'0'}) scale(${1 - lit*((i-idx+urls.length)%urls.length)})`,
        }" v-for="(u, i) in urls">
            <img :src="u">
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, toRaw, } from 'vue'

const props = defineProps(['urls', 'height', 'offset'])

const idx = ref(0)
const lit = 0.22

setInterval(() => {
    idx.value = (idx.value + 1) % props.urls.length
}, 1500);

</script>

<style scoped>
.CardsIcon {
    --offset: calc(v-bind("props.offset") * 1px);
    --height: calc(v-bind("props.height") * 1px);
    position: relative;
    overflow: hidden;
    height: var(--height);
    width: calc(var(--height) + var(--offset) * v-bind("props.urls.length - 1"));
    transform: translateY(1px);
}

.card {
    position: absolute;
    top: 0;
    height: var(--height);
    width: var(--height);
    mask-image: linear-gradient(45deg, transparent, transparent 10%, rgba(0, 0, 0, 0.76) 30%, black);
    z-index: 1;
    transition: .3s;
    transform-origin: top left;
}

.card.active {
    z-index: 0;
    mask-image: none;
}
.card img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>