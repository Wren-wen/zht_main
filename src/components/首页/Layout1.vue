<template>
    <padding>
        <div class="Layout1">
            <div class="item item1"><img src="@/assets/轮播图/1.png" alt=""></div>
            <div class="lay1">
                <div class="item item2"><img src="@/assets/轮播图/2.png" alt=""></div>
                <div class="item item3">
                    <img src="@/assets/轮播图/3.png" alt="">
                </div>
            </div>
        </div>
    </padding>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'


</script>

<style scoped>
.Layout1 {
    --height: 800px;
    /* --gap: 20px; */


    width: 100%;
    display: flex;
    color: black;
    font-size: 50px;
    margin: 80px 0;
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
.lay1 {
    flex: 1;
    height: var(--height);
    margin-left: var(--gap);
    display: flex;
    flex-direction: column;

}

.item2 {
    flex: 1;
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.item3 {
    flex: 1;
    margin-top: var(--gap);
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

</style>