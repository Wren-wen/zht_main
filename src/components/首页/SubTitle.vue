<template>
    <div class="sub-title">
        <div class="left">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'


</script>

<style scoped>
.sub-title {
    font-size: 20px;
    color: var(--black);
    color: rgb(59, 59, 59);
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 40px;
    padding: 0 28px;


    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-content: center;
    position: sticky;
    /* top: 0px; */
    /* box-shadow: 0 -3px 6px rgba(0, 0, 0, .08); */
    backdrop-filter: blur(10px);
    overflow: hidden;
}

.left {
    display: flex;
    align-items: center;
}

.text {
    font-size: 10px;
}

.icon {
    padding: 12px 0;
    margin-right: 20px;
    font-size: 36px;
    color: white;
    border-radius: 10px;
    background-color: var(--black);
}
</style>