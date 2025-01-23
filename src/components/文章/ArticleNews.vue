<template>
    <div class="ArticleNews">
        <h1>
            <lan :en="article?.title_en" :zh="article?.title" />
        </h1>
        <div class="between">
            <div class="flex">
                <div class="tag" v-for="tag in article?.tags">
                    <lan :en="tag.en" :zh="tag.zh" />
                </div>
            </div>
            <div>{{ formatDate(article?.timestamp) }}</div>
        </div>
        <frame-container :frame="article?.frame"></frame-container>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'
import formatDate from '@/utils/time/time'
const props = defineProps(['article'])

console.log(props);


</script>

<style scoped>
.ArticleNews {
    width: 1200px;
    padding: 36px 36px;
    background-color: #fff;
    font-size: 20px;
    color: black;
}

h1 {
    font-size: 36px;
}

.between {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 18px;
    align-items: center;
}

.flexend {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.tag {
    margin-right: 10px;
    padding: 5px 14px;
    border-radius: 666px;
    border: solid 2px #ccc;
    font-size: 18px;
    /* background-color: red; */
}

</style>