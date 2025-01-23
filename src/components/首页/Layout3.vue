<template>
    <padding>
        <div class="Layout3">
            <div class="item item1"><img src="@/assets/轮播图/1.png" alt=""></div>
            <div class="item item2"><img src="@/assets/轮播图/1.png" alt=""></div>
        </div>
    </padding>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'


</script>

<style scoped>
.Layout3 {
    --height: 800px;
    /* --gap: 20px; */


    margin: 80px 0;
    width: 100%;
    display: flex;
    color: black;
    font-size: 50px;
}
.item{
    overflow: hidden;
}
.item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.item1 {
    flex: 1;
    height: var(--height);
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.item2 {
    flex: 1;
    margin-left: var(--gap);
    height: var(--height);
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>