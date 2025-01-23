<!-- url中加入query参数lan=en or lan=zh默认英文 -->
<template>
    {{ valtxt }}
</template>

<script setup>
import { ref, reactive, onMounted, watch, inject, computed } from 'vue'

import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const props = defineProps(['en', 'zh'])
const isZh = inject('isZh')

const valtxt = computed(() => {
    return isZh.value ? props.zh?.replace(/(?<!\\)\\n/g, '\n').replace(/\\\\n/g, '\\n') : props.en?.replace(/(?<!\\)\\n/g, '\n').replace(/\\\\n/g, '\\n')
})



</script>


<style scoped>

</style>