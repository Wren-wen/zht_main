<template>
    <div class="home">
        <carousel></carousel>

        <title0 color="#ff1215">
            <lan en="KEEL Series" zh="KEEL 系列" />
        </title0>
        <sub-title>
            <lan 
                en="Suitable for 0-30kg modular and highly adaptable frame solutions" 
                zh="适用于0-30kg模块化、高适配型机架方案" 
            />
        </sub-title>
        <layout1></layout1>

        <title0 color="#ff1215">
            <lan en="20-160kg Drone System" zh="20-60kg整机方案" />
        </title0>
        <sub-title>
            <lan 
                en="One drone can adapt to various scenarios, large payload delivery scenarios" 
                zh="一机应百变，大载重运输场景" 
            />
        </sub-title>
        <layout3
            :card1_en="['KEEL series', 'KEEL MAX 100kg Class Delivery Drone', 'Suitable for payload from 20 to 160 kg']"
            :card2_en="['KEEL series', 'KEEL PRO Medium Transport Drone', 'Suitable for payload from 30 to 70 kg']"
            :card1_zh="['KEEL 系列', 'KEEL MAX 百公斤级运载机', '适用于20-160公斤载重']"
            :card2_zh="['KEEL 系列', 'KEEL PRO 中型运载机', '适用于30-70公斤载重']"
            :card1_img_path="keel_max_line"
            :card2_img_path="keel_pro_line"
            :back_card1="keel_max_real"
            :back_card2="keel_pro_real"
        ></layout3>

        <title0 color="#ff1215">
            <lan 
                en="0-30kg Drone System" 
                zh="0-30kg整机方案" 
            />
        </title0>
        <sub-title>
            <lan 
                en="Flexible deployment, efficient operation in all scenarios" 
                zh="灵活部署，全场景高效作业" 
            />
        </sub-title>
        <layout2></layout2> <!-- 手风琴 -->

        <title0 color="#ff1215">
            <lan en="0-8kg Drone System" zh="0-8kg整机方案" />
        </title0>
        <sub-title>
            <lan 
                en="Smart appearance, extraordinary flying experience" 
                zh="灵动外观，非凡飞行体验" 
            />
        </sub-title>
        <layout3
            :card1_en="['NAGA series', 'NAGA X4 Surveying and Mapping Experts', '3kg payload lightweight and agile']"
            :card2_en="['NAGA series', 'NAGA X8 Payload Stability Master', '8kg payload efficient and stable']"
            :card1_zh="['NAGA 系列', 'NAGA X4 测绘专家', '3公斤级轻盈灵动']"
            :card2_zh="['NAGA 系列', 'NAGA X8 稳载高手', '8公斤级高效稳健']"
            :card1_img_path="naga_x4_line"
            :card2_img_path="naga_x8_line"
            :back_card1="naga_x4_real"
            :back_card2="naga_x8_real"
        ></layout3>

        <title0 color="#000">
            <lan en="One-stop Accessories Area" zh="一站式配套专区" />
        </title0>
        <layout4></layout4>

        <title3></title3>
        <layout6></layout6>

        <layout5></layout5>

        <title4></title4>
        <layout7></layout7>
        <footer-bar></footer-bar>
    </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'

let keel_max_line = '/src/assets/首页/line_pic/KEEL_MAX.jpg'
let keel_max_real = '/src/assets/首页/real_pic/KEEL_MAX.jpg'

let keel_pro_line = '/src/assets/首页/line_pic/KEEL_PRO.jpg'
let keel_pro_real = '/src/assets/首页/real_pic/KEEL_PRO.jpg'

let naga_x4_line = '/src/assets/首页/line_pic/NAGA_X4.jpg'
let naga_x4_real = '/src/assets/首页/real_pic/NAGA_X4.jpg'

let naga_x8_line = '/src/assets/首页/line_pic/NAGA_X8.jpg'
let naga_x8_real = '/src/assets/首页/real_pic/NAGA_X8.jpg'

// const configuration = inject('configuration')
// onMounted(() => {
//     configuration.on = false
// })
</script>


<style lang="less" scoped>
.home {
    width: 100%;
    --gap: 15px;
    /* overflow: hidden; */
    position: relative;
    background-color: #f1f1f1;
}
</style>