<template>
    <div :class="{Layout7:1, nose:1}">
        <div :class="{flow:1, stop:stop[0]}" @mouseenter="stop[0]=1" @mouseleave="stop[0]=0">
            <div class="bar"></div>
            <div class="content">
                <div class="item pointer" v-for="u in url0">
                    <img :src="u">
                </div>
                <div class="item pointer" v-for="u in url0">
                    <img :src="u">
                </div>
            </div>
            <!-- <div class="bar"></div> -->
        </div>
        <div :class="{flow:1,reverse:1, stop:stop[1]}" @mouseenter="stop[1]=1" @mouseleave="stop[1]=0">
            <div class="bar"></div>
            <div class="content">
                <div class="item pointer" v-for="u in url0">
                    <img :src="u">
                </div>
                <div class="item pointer" v-for="u in url0">
                    <img :src="u">
                </div>
            </div>
            <!-- <div class="bar"></div> -->
        </div>
        <div :class="{flow:1, stop:stop[2]}" @mouseenter="stop[2]=1" @mouseleave="stop[2]=0">
            <div class="bar"></div>
            <div class="content">
                <div class="item pointer" v-for="u in url0">
                    <img :src="u">
                </div>
                <div class="item pointer" v-for="u in url0">
                    <img :src="u">
                </div>
            </div>
            <div class="bar"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted,  } from 'vue'
import pubuse from '@/utils/pub-use'

const dotN = 5
const stop = reactive([])

const url0 = [
    pubuse('无人机/wurenji.png'),
    pubuse('无人机/wurenji1.png'),
    pubuse('无人机/wurenji2.png'),
    pubuse('配件/1.png'),
    pubuse('配件/2.png'),
    pubuse('配件/3.png'),
    pubuse('配件/4.png'),
    pubuse('配件/5.png'),
    pubuse('配件/6.png'),
]


</script>

<style scoped>
.Layout7{
    --height: 200px;
    --width: 350px;
    --margin: 5px;

    margin-bottom: 60px;
    overflow: hidden;
    width: 100%;
    background-color: var(--black);
    background-color: rgba(0, 0, 0, 0.045);
    background-color: var(--white);
    background: linear-gradient(45deg, #fef3ff, #d9ebff);
    background: #ffffff;
}
.flow.stop{
    animation-play-state: paused;
}
.flow{
    animation: flow 20s linear infinite;
    width: fit-content;
}
.flow.reverse{
    animation: flow_reverse 20s linear infinite;
}
.flow.stop.reverse{
    animation-play-state: paused;
}
@keyframes flow {
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(-50%);
    }
}
@keyframes flow_reverse {
    0%{
        transform: translateX(-50%);
    }
    100%{
        transform: translateX(0);
    }
}
.content{
    display: flex;
    width: fit-content;
    /* background-color: var(--black); */
}
.item{
    flex-shrink: 0;
    margin: 0 var(--margin);
    width: var(--width);
    height: var(--height);
    overflow: hidden;
    /* background-color: #fff; */
    font-size: 0px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
}
.item img{
    background-color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 0.045);
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.bar{
    width: 100%;
    height: 10px;
    /* background-color: var(--black); */
    margin: 0 var(--margin);
}
</style>