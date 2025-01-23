<template>
    <div class="ConfigText">
        <div class="inputbox">
            <div class="tip">
                中
            </div>
            <input placeholder="设置中文" type="text" :value="props.zh" @input="$emit('update:zh', $event.target.value)">
        </div>
        <div class="inputbox">
            <div class="tip">
                英
            </div>
            <input placeholder="设置英文" type="text" :value="props.en" @input="$emit('update:en', $event.target.value)">
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted,  } from 'vue'

const props = defineProps(['zh', 'en'])

</script>

<style scoped>
.ConfigText{
    flex: 1;
    width: 100%;
}
.inputbox{
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    background-color: #e7eaef;
    background-color: #fff;
    border: solid 1px #e7eaef;
    border-radius: 5px;
}
.tip{
    padding: 6px;
    font-size: 18px;
    display: flex;
    color: #c27e00;
    align-items: center;
    justify-content: center;
}
input{
    font-size: 18px;
    flex: 1;
    padding: 8px 6px;
    background-color: transparent;
    width: 0;
}
</style>