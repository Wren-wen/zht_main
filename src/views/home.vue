<template>
    <div class="home">
        <carousel></carousel>
        <title0>
            <lan en="KEEL Series Drone Frame" zh="模块化无人机机架" />
        </title0>
        <layout1></layout1>
        <title0>
            <lan en="KEEL Series Drone Frame" zh="无人机动力方案" />
        </title0>
        <layout2></layout2>
        <layout3></layout3>
        <title0>
            <lan en="KEEL Series Drone Frame" zh="一站式配套专区" />
        </title0>
        <layout4></layout4>
        <title3></title3>
        <layout6></layout6>
        <layout5></layout5>
        <title4></title4>
        <layout7></layout7>
    </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'

// const configuration = inject('configuration')
// onMounted(() => {
//     configuration.on = false
// })

</script>


<style scoped>
.home {
    width: 100%;
    --gap: 15px;
    /* overflow: hidden; */
    position: relative;

}
</style>