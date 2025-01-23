<template>
    <padding>
        <div class="Layout4">
            <div class="lay1">
                <div class="item1"></div>
                <div class="item2"></div>
            </div>
            <div class="lay2">
                <div class="item3"></div>
                <div class="item4"></div>
            </div>
        </div>
    </padding>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'


</script>

<style scoped>
.Layout4 {
    --height: 400px;
    --gap: 20px;


    width: 100%;
    display: flex;
    color: black;
    font-size: 50px;
}

.lay1 {
    flex: 1;
    display: flex;
    flex-direction: column;

}
.lay2 {
    flex: 1;
    margin-left: var(--gap);
    display: flex;
    flex-direction: column;
}
.item1 {
    width: 100%;
    height: var(--height);
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}


.item2 {
    width: 100%;
    height: var(--height);
    margin-top: var(--gap);
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.item3 {
    flex: 1;
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}


.item4 {
    margin-top: var(--gap);
    flex: 1;
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

</style>