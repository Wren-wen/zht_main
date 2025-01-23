<template>
    <div class="PictureDetail">
        <carousel-pic :picture="picture"></carousel-pic>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'
import formatDate from '@/utils/time/time'
const props = defineProps(['picture'])

console.log(props);


</script>

<style scoped>
.PictureDetail{
    width: 1600px;
    background-color: #fff;
    padding-top: 60px;
}

</style>