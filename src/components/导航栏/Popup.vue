<template>
    <transition name="popup">
        <div @mouseenter="inox=1" @mouseleave="inox=0" :class="['Popup', type]" v-if="delay_ox">
            <slot></slot>
        </div>
    </transition>
</template>

<script setup>
import { ref, reactive, onMounted, watch} from 'vue'

const props = defineProps(['ox', 'type', 'navi'])

const delay_ox = ref(0)
const inox = ref(0)

let timer = null

const left = ref(0)

onMounted(() => {
    delay_ox.value = props.ox||inox.value
})

watch(()=>(props.ox||inox.value), (aa) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        delay_ox.value = props.ox||inox.value
    },50)

    // 每次鼠标进出，都重新计算位置
    if(props.navi){
        left.value = props.navi.offsetLeft+props.navi.offsetWidth/2
    }
})

defineExpose({delay_ox})
</script>

<style scoped>
.Popup {
    position: relative;
    display: inline-block;
    z-index: 0;
    top: 100px;
    top: 0;
    left: 50%;
    /* width: 300px; */
    /* height: 300px; */
    /* padding: 30px 0; */
    transition:transform .5s, opacity .5s;
    /* color: white; */
    background-color: var(--black);
    background-color: rgba(35, 35, 35, var(--bgo));
    background-color: rgba(255, 255, 255, var(--bgo));
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5);
    transform: translateX(-50%);

    backdrop-filter: blur(10px) grayscale(100%);
}
.Popup.a{
    width: 100%;
}
.Popup.b{
    width: 100%;
}
.Popup.c{
    width: 100%;
}

.Popup.d{
    /* width: 120px; */
    left: 830px;
    left: v-bind(left + 'px');
    /* background-color: rgba(35, 35, 35, .8); */
}

.Popup.e{
    /* width: 120px; */
    left: 980px;
    left: v-bind(left + 'px');
    /* background-color: rgba(35, 35, 35, .8); */
}

.popup-leave-to,
.popup-enter-from {
    opacity: 0;
    transform: translateX(-50%) translateY(-24px);
}
.popup-leave-active {
    pointer-events: none;
    position: absolute;
    top: 100px;
}
</style>