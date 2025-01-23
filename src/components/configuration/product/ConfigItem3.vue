<template>
    <div class="ConfigItem1">
        <div class="item">
            <div class="bar two">
                <h2>所有商品</h2>
                <router-link to="/configuration/product"><div class="btn nose">进入编辑</div></router-link>
            </div>
            <h3>索引中记录的共有 <span>{{ nums }}</span> 个对象</h3>
            <div class="tip">
                <div class="tip1">商品数据储存在项目目录的<span>public</span>文件夹下</div>
                <div class="md">
                    ZHT
                    <div>
                        <span>public</span>
                        <div>
                            configuration<p>网页所有数据根目录</p>
                            <div>readme.txt<p>对象数据结构设计说明</p>
                            </div>
                            <div>image_bed<p>[文件夹]存放所有图片视频资源的图床</p>
                            </div>
                            <div>article_index.json<p>文章索引</p>
                            </div>
                            <div>article<p>[文件夹]存放文章索引中记录的所有文章</p>
                            </div>
                            <div>picture_index.json<p>图片组索引</p>
                            </div>
                            <div>picture<p>[文件夹]存放图片组索引中记录的所有商品</p>
                            </div>
                            <div><span>product_index.json</span>
                                <p><span>商品索引</span></p>
                            </div>
                            <div>
                                <span>product</span>
                                <p><span>存放商品索引中记录的所有商品</span></p>
                                <div>
                                    <span>1.json</span>
                                    <p><span>id为1的商品</span></p>
                                </div>
                                <div>
                                    <span>2.json</span>
                                    <p></p>
                                </div>
                                <div>
                                    <span>····.json</span>
                                    <p><span>文件名严格遵循: 数字.json</span></p>
                                </div>
                                <div>
                                    <span>999.json</span>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject, onUnmounted } from 'vue'
import { getIndex } from '@/api/configuration/product'

const configuration = inject('configuration')
onMounted(() => {
    configuration.on = true
})

const nums = ref('loading')

getIndex().then(res => {
    // console.log(res)
    nums.value = Object.keys(res).length
})

</script>

<style scoped>
.ConfigItem1 {
    transition: .2s;
    margin: 0 20px;
}
.ConfigItem1 span{
    color: #ff5b5b;
    font-weight: bold;
}
.ConfigItem1:hover{
    transform: scale(1.02);
}
.bar {
    margin-top: 64px;
    display: flex;
}
.bar.two{
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
}
.btn{
    font-size: 20px;
    font-weight: bold;
    padding: 12px 30px;
    background-color: #ff5b5b;
    color: white;
    border-radius: 60px;
    cursor: pointer;
    transition: .2s;
}
.btn:hover{
    background-color: #ed5757;
}
.item {
    border-radius: 50px;
    width: 580px;
    height: 650px;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.16);
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 46px;
    border: solid 4px #ffc8c8;
}

h2 {
    font-size: 40px;
    color: #494949;
}

h3 {
    font-size: 28px;
    color: #747474;
}

.tip {
    color: #949494;
    font-size: 18px;
    font-weight: bold;
    width: 100%;
}

.tip1 {
    text-align: center;
}

.md {
    margin-top: 26px;
    margin-bottom: 10px;
    align-self: self-start;
}

.md div {
    margin-left: 16px;
    padding-left: 8px;
    border-left: solid 4px #dfdfdf;
}
.md div:first-child{
    border-bottom: solid 4px #dfdfdf;
    border-radius: 0 0 0 20px;
    padding-bottom: 2px;
}

.md p {
    margin-left: 10px;
    color: #c1c1c1;
    color: #ababab;
    /* color: #9a009a; */
    /* color: #ff5b5b; */
    font-size: 16px;
    display: inline-block;
    /* font-weight: normal; */
}
</style>