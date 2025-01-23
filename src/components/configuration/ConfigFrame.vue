<template>
    <div class="ConfigFrame">
        <div v-drag:frame1.root="frameBackup" class="content">
            <TransitionGroup name="drag-list">
                <div class="tool" v-for="tool_ in frameBackup" :key="tool_.id">
                    <template v-if="tool_.raw.type == 1">
                        <div @click="tool_.flod = !tool_.flod" class="flodbar">
                            <div @click.stop v-drag:frame1.target="tool_" class="iconfont icon-tuozhuai"></div>
                            <div class="title">
                                <span>文字</span>{{ tool_.raw.txt }}
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
                                    <div class="tit">1. 文字</div>
                                    <config-text v-model:zh="tool_.raw.txt" v-model:en="tool_.raw.txt_en"></config-text>
                                </div>
                                <div class="bar">
                                    <div class="tit">2. 颜色color</div>
                                    <el-color-picker size="large" v-model="tool_.raw.color" show-alpha />
                                    <span class="tip">{{ tool_.raw.color }}</span>
                                </div>
                                <div class="bar">
                                    <div class="tit">3. 字号fontSize</div>
                                    <el-input-number v-model="tool_.raw.fontSize" />
                                    <span class="tip">{{ tool_.raw.fontSize }}px</span>
                                </div>
                                <div class="bar">
                                    <div class="tit">4. 字重fontWeight</div>
                                    <el-radio-group fill="#4cceac" v-model="tool_.raw.fontWeight">
                                        <el-radio-button label="normal" size="">正常</el-radio-button>
                                        <el-radio-button label="bold" size="">粗体</el-radio-button>
                                    </el-radio-group>
                                </div>
                                <div class="bar">
                                    <div class="tit">5. 装饰decoration</div>
                                    <el-radio-group fill="#4cceac" v-model="tool_.raw.decoration">
                                        <el-radio-button :label="0" size="">无</el-radio-button>
                                        <el-radio-button :label="1" size="">样式1</el-radio-button>
                                        <el-radio-button :label="2" size="">居中</el-radio-button>
                                    </el-radio-group>
                                </div>
                            </div>
                        </transition>
                    </template>
                    <template v-if="tool_.raw.type == 2">
                        <div @click="tool_.flod = !tool_.flod" class="flodbar">
                            <div @click.stop v-drag:frame1.target="tool_" class="iconfont icon-tuozhuai"></div>
                            <div class="title">
                                <span>间距</span>{{ tool_.raw.height }}px
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
                                    <div class="tit">1. 垂直间隔height</div>
                                    <el-input-number v-model="tool_.raw.height" />
                                    <span class="tip">{{ tool_.raw.height }}px</span>
                                </div>
                            </div>
                        </transition>
                    </template>
                    <template v-if="tool_.raw.type == 3">
                        <div @click="tool_.flod = !tool_.flod" class="flodbar">
                            <div @click.stop v-drag:frame1.target="tool_" class="iconfont icon-tuozhuai"></div>
                            <div class="title">
                                <span>图片</span>{{ tool_.raw.src }}
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
                                    <div class="tit">1. 图床图片src</div>
                                    <config-image v-model:cover="tool_.raw.src"></config-image>
                                </div>
                                <div class="bar">
                                    <div class="tit">2. 点击转跳链接href</div>
                                    <el-input v-model="tool_.raw.href" size="large" style="width: 100%"
                                        placeholder=":链接(相对: /#/product; 绝对: https://)" />
                                </div>
                            </div>
                        </transition>
                    </template>
                    <template v-if="tool_.raw.type == 4">
                        <div @click="tool_.flod = !tool_.flod" class="flodbar">
                            <div @click.stop v-drag:frame1.target="tool_" class="iconfont icon-tuozhuai"></div>
                            <div class="title">
                                <span>视频</span>{{ tool_.raw.src }}
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
                                    <div class="tit">1. 图床视频/任意文件名字src</div>
                                    <config-file v-model:cover="tool_.raw.src"></config-file>
                                </div>
                            </div>
                        </transition>
                    </template>
                    <template v-if="tool_.raw.type == 5">
                        <div @click="tool_.flod = !tool_.flod" class="flodbar">
                            <div @click.stop v-drag:frame1.target="tool_" class="iconfont icon-tuozhuai"></div>
                            <div class="title">
                                <span>按钮</span>text: {{ tool_.raw.txt }}
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
                                    <div class="tit">1. 文字</div>
                                    <config-text v-model:zh="tool_.raw.txt" v-model:en="tool_.raw.txt_en"></config-text>
                                </div>
                                <div class="bar">
                                    <div class="tit">2. 颜色color</div>
                                    <el-color-picker size="large" v-model="tool_.raw.color" show-alpha />
                                    <span class="tip">{{ tool_.raw.color }}</span>
                                </div>
                                <div class="bar">
                                    <div class="tit">2. 背景色backgroundColor</div>
                                    <el-color-picker size="large" v-model="tool_.raw.backgroundColor" show-alpha />
                                    <span class="tip">{{ tool_.raw.backgroundColor }}</span>
                                </div>
                                <div class="bar">
                                    <div class="tit">2. 点击转跳链接href</div>
                                    <el-input v-model="tool_.raw.href" size="large" style="width: 100%"
                                        placeholder=":链接(相对: /#/product; 绝对: https://)" />
                                </div>
                            </div>
                        </transition>
                    </template>
                    <template v-if="tool_.raw.type == 6">
                        <div @click="tool_.flod = !tool_.flod" class="flodbar">
                            <div @click.stop v-drag:frame1.target="tool_" class="iconfont icon-tuozhuai"></div>
                            <div class="title">
                                <span>画布-可自由布局</span>height: {{ tool_.raw.height }}px
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
                                    <div class="tit">1. 画布高度height</div>
                                    <el-input-number v-model="tool_.raw.height" />
                                    <span class="tip">{{ tool_.raw.height }}px</span>
                                </div>
                                <config-widget v-model:widget="tool_.raw.widget"></config-widget>
                            </div>
                        </transition>
                    </template>
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
            type: 1,
            txt: '一段文字一段文字一段文字一段文字',
            txt_en: 'words',
            color: '#000',
            fontSize: 18,
            fontWeight: 'normal',
            decoration: 0,
        })
    },
    {
        name: '间距',
        init: () => ({  //初始化字段
            type: 2,
            height: 18,
        })
    },
    {
        name: '图片',
        init: () => ({  //初始化字段
            type: 3,
            src: '',
            href: '',
        })
    },
    {
        name: '视频',
        init: () => ({  //初始化字段
            type: 4,
            src: '',
        })
    },
    {
        name: '按钮',
        init: () => ({  //初始化字段
            type: 5,
            txt: '这是按钮',
            txt_en: 'btn',
            color: '#fff',
            backgroundColor: '#f00',
            href: '',
        })
    },
    {
        name: '画布',
        init: () => ({  //初始化字段
            type: 6,
            height: 300,
            widget: [],
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
        toolbox.value.scrollIntoView({ behavior: 'auto', block:'end' })
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