<template>
    <div class="ConfigTime">
        <el-date-picker style="width: 100%;" v-model="valTime" type="datetime" size="large"
            placeholder="Select date and time" />
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watchEffect, watch } from 'vue'

const props = defineProps(['timestamp'])
const emit = defineEmits(['update:timestamp'])

const valTime = ref(props.timestamp)

// watchEffect(() => {
//     emit('update:timestamp', valTime.value)
// },{flush: 'post'})

watch(valTime, (newVal) => {
    emit('update:timestamp', valTime.value)
})

</script>

<style scoped>
.ConfigTime {
    flex: 1;
    width: 100%;
}

</style>