<template>
    <div class="ConfigFrame">
        <div v-drag:frameText.root="frameBackup" class="content">
            <TransitionGroup name="drag-list">
                <div class="tool" v-for="(tool_, idx) in frameBackup" :key="tool_.id">
                    <div @click="tool_.flod = !tool_.flod" class="flodbar">
                        <div @click.stop v-drag:frameText.target="tool_" class="iconfont icon-tuozhuai"></div>
                        <div class="title">
                            <span>文字</span>{{ tool_.raw.zh }}
                        </div>
                        <div @click.stop="deleteTool(tool_)" v-if="!tool_.flod" class="iconfont icon-shanchu"></div>
                        <div :class="{
                            iconfont: 1,
                            'icon-sanjiao': 1,
                            closed: tool_.flod,
                        }">
                        </div>
                    </div>
                    <transition name="opacity">
                        <div v-show="!tool_.flod" class="floder">
                            <div class="bar">
                                <div class="tit">文字</div>
                                <config-text v-model:zh="tool_.raw.zh" v-model:en="tool_.raw.en"></config-text>
                            </div>
                        </div>
                    </transition>
                </div>
            </TransitionGroup>
        </div>
        <div ref="toolbox" class="toolbox">
            <div @click="addTool(i.init)" class="toolbtn nose pointer" v-for="i in TOOLS_CONFIG">
                {{ i.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, nextTick } from 'vue'

const props = defineProps(['frame'])
const emits = defineEmits(['update:frame'])

const toolbox = ref()

const TOOLS_CONFIG = [
    {
        name: '文字',
        init: () => ({  //初始化字段
            zh: '',
            en: '',
        })
    },
]

// 初始备份集成frame
const frameBackup = reactive(props.frame.map((tool, id) => {
    return {
        id: id, // 唯一标识用于换续
        flod: true, // 是否折叠
        raw: tool,
    }
}))

watch(frameBackup, (to) => {
    emits('update:frame', to.map(tool_ => tool_.raw))
})


const addTool = (init) => {

    const backup = frameBackup.reduce((accumulator, currentValue, currentIndex, array) => {
        accumulator[currentValue.id] = true;
        return accumulator;
    }, {})

    let id = 0;
    while (backup[id]) {
        id++;
    }

    frameBackup.push({
        id: id,
        flod: false,
        raw: init(),
    })
    if (toolbox.value) {
        toolbox.value.scrollIntoView({ behavior: 'auto', block:'end'})
    }
    nextTick(() => {
        if (toolbox.value) {
            toolbox.value.scrollIntoView({ behavior: 'smooth', block:'end' })
        }
    })

}
const deleteTool = (tool_) => {
    // 先找tool_的index
    const toolIndex = frameBackup.findIndex(tool => tool.id === tool_.id)
    frameBackup.splice(toolIndex, 1)
}

</script>

<style scoped>
.ConfigFrame {
    flex: 1;
    width: 100%;
    background-color: #fff;
    border-radius: 12px;
    border: solid 1px #e7eaef;
    overflow: hidden;
    position: relative;
}

.content {
    width: 100%;
    overflow: hidden;
}

.toolbox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
}

.toolbtn {
    width: 31%;
    margin: 0 1%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 4px rgba(96, 96, 96, 0.366);
    border-radius: 6px;
    transition: .2s;
    font-size: 18px;
}

.toolbtn:hover {
    background-color: #ecedf6aa;
}

.tool {
    width: 100%;
    background-color: #fff;
    position: relative;
}

.flodbar {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    user-select: none;
    cursor: pointer;
}

.title {
    flex: 1;
    color: #9397af;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 4px;
}

.title span {
    font-weight: bold;
    margin-right: 8px;
    color: #000;
}

.icon-tuozhuai {
    flex: 0;
    margin-right: 10px;
    color: #a5a5a5;
    font-size: 22px;
    padding: 4px 4px 4px 0;
    transition: .2s;
}

.icon-tuozhuai:hover {
    color: #000;
}

.icon-shanchu {
    color: red;
    font-size: 18px;
    padding: 4px;
    margin: 0 4px;
    border-radius: 50%;
    transition: .12s;
}

.icon-shanchu:hover {
    color: #fff;
    background-color: red;
}

.icon-sanjiao {
    color: #bdbdbd;
    font-size: 18px;
    transition: .2s;
}

.icon-sanjiao.closed {
    transform: rotate(-90deg);
}

.flodbar:hover .icon-sanjiao {
    color: #8a8a8a;
}

.bar {
    padding: 0 20px;
    margin-bottom: 10px;
}

.tit {
    color: #3aa387;
    margin-bottom: 4px;
}

.tip {
    margin-left: 10px;
    font-size: 17px;
}

.floder {
    transition: opacity .2s;
    border-bottom: solid 2px #e7eaef;
}

.opacity-enter-from,
.opacity-leave-to {
    opacity: 0;
}

.opacity-leave-active {
    position: absolute;
}
</style>