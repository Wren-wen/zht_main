<template>
    <teleport to="body">
        <transition name="bili">
            <div v-if="ox" :class="{
                Mask: 1,
                shake: doAni
            }" @click="doshake">
                <div :class="{
                    HoverPop: 1,
                    shake: doAni
                }" :style="{ padding: nopadding ? '0px' : '20px' }" @click.stop>
                    <slot></slot>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { ref, watch, onMounted, watchEffect } from 'vue';

let props = defineProps(["ox", "nopadding"]);
let emits = defineEmits(["keyenter", "close"]);

const doAni = ref(false)

const doshake = () => {
    emits("close");

    // doAni.value = false;
    // setTimeout(() => {
    //     doAni.value = true
    // }, 1)
}

const keyFn = (e) => {
    if (e.key == "Enter") {
        emits("keyenter")
    }
}

watchEffect(() => {
    if (props.ox) {
        document.addEventListener("keydown", keyFn)
    } else {
        doAni.value = false;
        document.removeEventListener("keydown", keyFn)

    }
})

</script>


<style scoped>
.Mask {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    /* background-color: rgba(0,0,0,0.2); */
    transition: .4s;
}


.HoverPop {
    position: absolute;
    top: calc(50% + 46px);
    left: 50%;
    z-index: 100;
    border-radius: 12px;
    border: solid 2px var(--theme-bg-0);
    box-shadow: 0 0 20px rgba(0, 0, 0, .16);
    background-color: var(--theme-bg-2);
    transition: .3s;
    transform: translate(-50%, -50%);
}

.HoverPop.shake {
    animation: shake 0.22s linear;
}

@keyframes scale-in-ease {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }

    50% {
        transform: translate(-50%, -50%) scale(1.1);
    }

    100% {
        transform: translate(-50%, -50%) scale(1);
    }

}

/* .bili-enter-from .HoverPop, */
/* .bili-leave-to .HoverPop { */
/* opacity: 0; */
/* transform: translate(calc(-60px - 100%), -50%); */
/* transform: translate(-50%, -50%) scale(.8); */
/* animation: scale-in-ease cubic-bezier(0.22, 0.58, 0.12, 0.98) 0.4s; */
/* } */

/* .bili-enter-to .HoverPop, */
/* .bili-leave-from .HoverPop { */
/* animation: scale-in-ease cubic-bezier(0.22, 0.58, 0.12, 0.98) 0.4s; */
/* } */
.bili-enter-active .HoverPop {
    animation: scale-in-ease cubic-bezier(0.22, 0.58, 0.12, 0.98) 0.34s;
}

.bili-leave-active .HoverPop {
    transform: translate(-50%, -50%) scale(0);
    opacity: .4;
}

@keyframes shake {
    25% {
        transform: translate(calc(10px - 50%), -50%);
    }

    50% {
        transform: translate(calc(-10px - 50%), -50%);
    }

    75% {
        transform: translate(calc(10px - 50%), -50%);
    }

    100% {
        transform: translate(-50%, -50%);
    }
}

@keyframes star {
    50% {
        background-color: rgba(255, 255, 255, 0.45);
    }

    100% {
        background-color: unset;
    }
}
</style>
