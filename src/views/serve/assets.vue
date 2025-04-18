<template>
    <div class="assets">
        <div class="title">
            <lan en="Download" zh="资料下载" />
        </div>
        <div class="container">
            <div class="tabbar">
                <div @click="tabidx = idx" :class="{
                    tab: 1,
                    active: idx === tabidx
                }" v-for="(tab,idx) in tablist">
                    <div>{{ tab.name }}</div>
                    <div class="dot"></div>
                </div>
            </div>
            <div class="content">
                <div class="wrapper">
                    <div class="list-title">
                        <lan en="Document" zh="文档" />
                    </div>
                    <div class="sep-line"></div>
                    <div class="document-list">
                        <div class="document">
                            <div class="name">
                                <span>UniRC 7 系列用户手册v1.2</span>
                            </div>
                            <div class="date">
                                <span>2025-03-12</span>
                            </div>
                            <div class="operation-wrapper">
                                <div class="file-type">
                                    <span>PDF</span>
                                </div>
                                <div class="download-btn">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-xiazai"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, } from 'vue'

const tabidx = ref(0)

const tablist = [
    {
        name: 'KEEL',
        tag: 0, // 分类id，可自己指定用于筛选类别
    },
    {
        name: 'KEEL MINI',
        tag: 1, // 分类id，可自己指定用于筛选类别
    },
    {
        name: 'KEEL PLUS',
        tag: 2, // 分类id，可自己指定用于筛选类别
    },
    {
        name: 'KEEL PRO',
        tag: 3, // 分类id，可自己指定用于筛选类别
    },
    {
        name: 'KEEL MAX',
        tag: 4, // 分类id，可自己指定用于筛选类别
    },
]
const data = reactive([{}])
</script>

<style lang="less" scoped>
.assets {
    width: 100%;
}

.title {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
}

.tabbar {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    width: 100%;
    background-color: #fff;
}

.content {
    // min-height: 70vh;
    width: 100%;
    position: relative;
    // --gap: 30px;
    // padding: 0 calc(150px - var(--gap)/2);
    display: flex;
    // flex-wrap: wrap;
    // align-items: flex-start;
    padding: 20px 150px;
    .wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #f1f1f1;
        .list-title {
            height: 50px;
            line-height: 50px;
            font-size: 21px;
            font-weight: bold;
            padding-left: 20px;
        }
        .sep-line {
            height: 2px;
            background-color: #fff;
        }
        .document-list {
            display: flex;
            flex-direction: column;
            padding: 20px;
            .document {
                display: flex;
                background-color: #fff;
                justify-content: space-between;
                padding: 10px 5px;
                .name, .operation-wrapper {
                    width: 300px;
                    text-align: center;
                }
                .name {
                    font-size: 22px;
                }
                .date, .operation-wrapper {
                    font-size: 20px;
                }
                .operation-wrapper {
                    color: #3975ff;
                    display: flex;
                    align-items: center;
                    .download-btn {
                        width: 22px;
                        height: 22px;
                        margin-left: 7px;
                        cursor: pointer;
                        .icon {
                            width: 100%;
                            height: 100%;
                            color: #3975ff;
                        }
                    }
                }
            }
        }
    }
}
.tabbar{
    padding: 0 150px;
    width: 100%;
    display: flex;
}
.tab{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: 26px;
    position: relative;
    padding-bottom: 10px;
    border-bottom: solid 2px #666;
    user-select: none;
    cursor: pointer;
}
.dot{
    position: absolute;
    height: 4px;
    width: 50px;
    bottom: -2px;
    background-color: rgb(172, 172, 172);
}
.tab.active .dot{
    background-color: red;
}
</style>