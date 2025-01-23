<template>
    <div class="Layout2">
        <div @mouseenter="activeIndex = idx" :class="{ item: 1, active: delay_idx == idx }" v-for="(i, idx) in list">

        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'

const list = reactive([
    {},
    {},
    {},
    {},
    {},
])

const activeIndex = ref(0)
const delay_idx = ref(0)

let timer = null
watch(activeIndex, () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        delay_idx.value = activeIndex.value
    }, 100)
})

</script>

<style scoped>
.Layout2 {
    --width: 50%;

    width: 100%;
    height: 600px;
    display: flex;
}

.item {
    height: 100%;
    width: calc(var(--width) / v-bind("list.length - 1"));
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: .4s;
}

.item.active {
    width: var(--width);
}
</style>