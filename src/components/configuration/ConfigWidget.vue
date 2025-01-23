<template>
    <div class="ConfigWidget">
        <div class="content">
            <div class="tool" v-for="tool_ in frameBackup">
                <div @click="tool_.flod = !tool_.flod" class="flodbar">
                    <div class="title">
                        <template v-if="tool_.raw.type == 1">
                            <span>画布-文字</span>{{ tool_.raw.txt }}
                        </template>
                        <template v-else-if="tool_.raw.type == 2">
                            <span>画布-图片</span>{{ tool_.raw.src }}
                        </template>
                        <template v-else-if="tool_.raw.type == 3">
                            <span>画布-视频</span>{{ tool_.raw.src }}
                        </template>
                        <template v-else-if="tool_.raw.type == 4">
                            <span>画布-按钮</span>{{ tool_.raw.txt }}
                        </template>
                    </div>
                    <div @click.stop="deleteTool(tool_)" v-if="!tool_.flod" class="iconfont icon-shanchu"></div>
                    <div :class="{
                        iconfont: 1,
                        'icon-sanjiao': 1,
                        closed: tool_.flod,
                    }">
                    </div>
                </div>
                <div v-show="!tool_.flod" class="floder">
                    <div v-for="(val, key) in tool_.raw">
                        <div class="bar">
                            <template v-if="key == 'txt'">
                                <div class="tit">文字text</div>
                                <config-text v-model:zh="tool_.raw.txt" v-model:en="tool_.raw.txt_en"></config-text>
                            </template>
                            <template v-else-if="key == 'color'">
                                <div class="tit">颜色color</div>
                                <el-color-picker size="large" v-model="tool_.raw.color" show-alpha />
                                <span class="tip">{{ tool_.raw.color }}</span>
                            </template>
                            <template v-else-if="key == 'backgroundColor'">
                                <div class="tit">背景色backgroundColor</div>
                                <el-color-picker size="large" v-model="tool_.raw.backgroundColor" show-alpha />
                                <span class="tip">{{ tool_.raw.backgroundColor }}</span>
                            </template>
                            <template v-else-if="key == 'fontSize'">
                                <div class="tit">字号fontSize</div>
                                <el-input-number :min="0" v-model="tool_.raw.fontSize" />
                                <span class="tip">{{ tool_.raw.fontSize }}px</span>
                            </template>
                            <template v-else-if="key == 'fontWeight'">
                                <div class="tit">字重fontWeight</div>
                                <el-radio-group fill="#4cceac" v-model="tool_.raw.fontWeight">
                                    <el-radio-button label="normal" size="">正常</el-radio-button>
                                    <el-radio-button label="bold" size="">粗体</el-radio-button>
                                </el-radio-group>
                            </template>
                            <template v-else-if="key == 'zIndex'">
                                <div class="tit">层叠高度zIndex</div>
                                <el-input-number :min="0" v-model="tool_.raw.zIndex" />
                                <span class="tip">z-index: {{ tool_.raw.zIndex }}</span>
                            </template>
                            <template v-else-if="key == 'top'">
                                <div class="tit">垂直边距Y</div>
                                <el-input-number :step="10" v-model="tool_.raw.top" />
                                <span class="tip">top: {{ tool_.raw.top }}px</span>
                            </template>
                            <template v-else-if="key == 'left'">
                                <div class="tit">水平边距X</div>
                                <el-input-number :step="10" v-model="tool_.raw.left" />
                                <span class="tip">left: {{ tool_.raw.left }}px</span>
                            </template>
                            <template v-else-if="key == 'width'">
                                <div class="tit">元素宽度width</div>
                                <el-input-number :min="0" :step="10" v-model="tool_.raw.width" />
                                <span class="tip">width: {{ tool_.raw.width }}px</span>
                            </template>
                            <template v-else-if="key == 'height'">
                                <div class="tit">元素高度height</div>
                                <el-input-number :min="0" :step="10" v-model="tool_.raw.height" />
                                <span class="tip">height: {{ tool_.raw.height }}px</span>
                            </template>
                            <template v-else-if="key == 'src' && tool_.raw.type == 3">
                                <div class="tit">图床视频/任意文件名字src</div>
                                <config-file v-model:cover="tool_.raw.src"></config-file>
                            </template>
                            <template v-else-if="key == 'src'">
                                <div class="tit">图床图片src</div>
                                <config-image v-model:cover="tool_.raw.src"></config-image>
                            </template>
                            <template v-else-if="key == 'href'">
                                <div class="tit">点击转跳链接href</div>
                                <el-input v-model="tool_.raw.href" size="large" style="width: 100%"
                                    placeholder=":链接(相对: /#/product; 绝对: https://)" />
                            </template>
                            <template v-else-if="key == 'borderRadius'">
                                <div class="tit">元素圆角borderRadius</div>
                                <el-input-number :min="0" v-model="tool_.raw.borderRadius" />
                                <span class="tip">border-radius: {{ tool_.raw.borderRadius }}px</span>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="toolbox">
            <div @click="addTool(i.init)" class="toolbtn nose pointer" v-for="i in TOOLS_CONFIG">
                {{ i.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'

const props = defineProps(['widget'])
const emits = defineEmits(['update:widget'])


const TOOLS_CONFIG = [
    {
        name: '画布文字',
        init: () => ({  //初始化字段
            type: 1,
            txt: 'xxxxxxx',
            txt_en: 'xxxxx',
            color: '#f00',
            fontSize: 22,
            fontWeight: 'normal',
            zIndex: 1,
            top: 0,
            left: 0,
            width: 500,
            height: 100,
        })
    },
    {
        name: '画布图片',
        init: () => ({
            type: 2,
            src: '',
            href: '',
            borderRadius: 0,
            zIndex: 1,
            top: 0,
            left: 0,
            width: 600,
            height: 400,
        })
    },
    {
        name: '画布视频',
        init: () => ({  //初始化字段
            type: 3,
            src: '',
            borderRadius: 0,
            zIndex: 1,
            top: 0,
            left: 0,
            width: 600,
            height: 400,
        })
    },
    {
        name: '画布按钮',
        init: () => ({  //初始化字段
            type: 4,
            txt: 'xxxxxxx',
            txt_en: 'xxxxx',
            color: '#fff',
            backgroundColor: '#f00',
            href: '',
            fontSize: 18,
            fontWeight: 'normal',
            borderRadius: 10,
            zIndex: 1,
            top: 0,
            left: 0,
            width: 100,
            height: 40,
        })
    },
]

// 初始备份集成frame
const frameBackup = reactive(props.widget.map(tool => {
    return {
        flod: true, // 是否折叠
        raw: tool,
    }
}))

watch(frameBackup, (to) => {
    emits('update:widget', to.map(tool_ => tool_.raw))
})


const addTool = (init) => {
    frameBackup.push({
        flod: false,
        raw: init(),
    })
}
const deleteTool = (tool_) => {
    // 先找tool_的index
    const toolIndex = frameBackup.indexOf(tool_)
    frameBackup.splice(toolIndex, 1)
}

</script>

<style scoped>
.ConfigWidget {
    flex: 1;
    width: 100%;
    background-color: #fff;
    border-bottom: solid 1px #e7eaef;
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
    /* border-bottom: solid 2px #e7eaef; */
}

.opacity-enter-from,
.opacity-leave-to {
    opacity: 0;
}

.opacity-leave-active {
    position: absolute;
}
</style>