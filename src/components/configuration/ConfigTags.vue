<template>
    <div class="ConfigTag">
        <div class="bar">
            <div class="inputbox">
                <div class="inputbar">
                    <div class="tip">中</div>
                    <input @keypress.enter="addnewFn" type="text" v-model="tagVal" placeholder=": 填写新的或选择已有tag">
                </div>
                <div class="inputbar">
                    <div class="tip">英</div>
                    <input @keypress.enter="addnewFn" type="text" v-model="tagVal_en" placeholder=": 填写新的或选择已有tag">
                </div>
            </div>
            <div @click="addnewFn" :class="{
                btn: 1,
                nose: 1,
                pointer: 1,
                nouse: !tagVal || !tagVal_en
            }">
                新建 +
            </div>
        </div>
        <div class="box scrollBar">
            <div @click="clickTagFn(key)" :class="{
                tag: 1,
                active: tags.hasOwnProperty(key)
            }" v-for="(value, key) in allTags" :key="key">
                <div class="tagbar">
                    <div class="num">{{ key }}.</div>
                    <div>中: {{ value.zh }}</div>
                </div>
                <div class="tagbar">
                    <div class="num"></div>
                    <div>英: {{ value.en }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, inject } from 'vue'

const opt = inject('opt')

const props = defineProps(['tags'])
const emits = defineEmits(['update:tags'])

const tagVal = ref()
const tagVal_en = ref()

const allTags = computed(() => {
    let tags = {};
    for (const key in opt.index_init) {
        Object.assign(tags, opt.index_init[key].tags)
    }
    for (const key in opt.article_edit) {
        Object.assign(tags, opt.article_edit[key].tags)
    }
    return tags;
})

const addnewFn = () => {
    if (!tagVal.value || !tagVal_en.value) return;
    // alltags中没有的key
    let id = 1;
    while (allTags.value.hasOwnProperty(id)) {
        id++;
    }
    emits('update:tags', {
        ...props.tags, [id]: {
            zh: tagVal.value,
            en: tagVal_en.value
        }
    })
    tagVal.value = ''
    tagVal_en.value = ''
}
const clickTagFn = (key) => {
    let o = { ...props.tags }
    if (o.hasOwnProperty(key)) {
        delete o[key]
        emits('update:tags', o)
    } else {
        emits('update:tags', { ...o, [key]: allTags.value[key] })
    }

}

// console.log('allTags', allTags.value);

</script>

<style scoped>
.ConfigTag {
    flex: 1;
    width: 100%;
    border-radius: 12px;
    background-color: #fff;
    border: solid 1px #e7eaef;
    overflow: hidden;
    position: relative;
}

.bar {
    display: flex;
    align-items: center;
    border-bottom: solid 1px #e7eaef;
}
.inputbox{
    flex: 1;
}
.inputbar{
    display: flex;
}
.tip{
    flex-shrink: 0;
    font-size: 18px;
    color: #c27e00;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    user-select: none;
}
input {
    flex: 1;
    width: 100%;
    font-size: 18px;
    padding: 9px 10px;
    padding-left: 0;
    background-color: transparent;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 76px;
    /* width: 380px; */
    padding: 0 16px;
    font-size: 17px;
    color: #000000;
    border: solid 3px #4cceac;
    border-radius: 8px;
    transition: .3s;
    margin-right: 3px;
}

.btn:hover {
    background-color: #f5f5f5;
}

.btn.nouse {
    filter: grayscale(100%) opacity(0.5);
    cursor: not-allowed;
}

.box {
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* padding: 6px; */
    max-height: 150px;
    overflow: auto;
}
.tagbar {
    display: flex;
    align-items: center;
}
.num{
    width: 20px;
}
.tag {
    padding: 4px 10px;
    border-radius: 15px;
    margin: 6px 6px;
    user-select: none;
    cursor: pointer;
    border: solid 2px #696c8373;
    color: #696c83;
    transition: .2s;
}

.tag:hover {
    background-color: #f1f1f1;
}

.tag.active:hover {
    background-color: #46c2a1;
}

.tag.active {
    background-color: #4cceac;
    color: white;
    border-color: transparent;
}
</style>