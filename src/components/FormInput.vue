<template>
    <div class="root">
        <div class="title">
            <div class="required-identifier">*</div>
            <lan :en="title_en" :zh="title" />
        </div>
        <div class="input">
            <input v-if="isZh" type="text" :placeholder="placeholder">
            <input v-else type="text" :placeholder="placeholder_en">
        </div>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue'
const props = defineProps(['title', 'title_en', 'placeholder', 'placeholder_en', 'required', 'rect'])

const isZh = inject('isZh')

const identifierOpacity = computed(() => props.required ? 1 : 0)
</script>

<style lang="less" scoped>
.root {
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    .title {
        margin-left: 2px;
        display: flex;
        font-size: 18px;
        font-weight: bold;
        .required-identifier {
            color: #c1282f;
            font-size: 20px;
            margin-right: 8px;
            opacity: v-bind(identifierOpacity);
        }
    }
    .input {
        margin-top: 10px;
        input {
            width: v-bind("rect.width");
            height: v-bind("rect.height");
            background-color: #f5f5f5;
            border-radius: 7px;
            padding-left: 18px;
            font-size: 17px;
        }
    }
}
</style>