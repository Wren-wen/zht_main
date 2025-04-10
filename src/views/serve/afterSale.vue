<template>
    <div class="after-sale">
        <div class="header-pic">
            <div class="header-text">
                <lan en="After-sales" zh="售后支持" />
            </div>
        </div>
        <div class="card">
            <div class="title">
                <lan en="After-sales Service Process" zh="售后服务流程" />
            </div>
            <div class="figure">
                <lan class="item item0" en="Advisory Services" zh="咨询支持" />
                <lan class="item item1" en="Troubleshooting" zh="故障诊断" />
                <lan class="item item2" en="Return Shipping\n(If required)" zh="物流寄回\n（如需要）" />
                <lan class="item item3" en="Repair and\nRe-inspection" zh="维修复检" />
                <lan class="item item4" en="Parcel Shipping" zh="物流寄出" />
            </div>
            <div class="appellation">
                <lan en="Dear ZHT User,
                Should you have any questions regarding product usage, please feel free to contact us through the following channels.
                We are committed to providing you with dedicated service:" zh="尊敬的ZHT用户，如果您在产品使用过程中有任何疑问，欢迎通过以下联系方式获得帮助。
                我们将竭诚为您服务：" />
            </div>
            <div class="contact">
                <lan en="Service telephone: +86 18526324382
                Service Email: info@zhtaero.com
                Working hours: Monday to Friday (9:00 a.m. to 18:00 p.m.)
                Official website: www.zhtaero.com
                Address: Tianjin University Innovation Research Institute, Balitai Industrial Park, Jinnan District, Tianjin, China" zh="服务电话：+86 18526324382
                服务邮箱：info@zhtaero.com
                工作时间：周一至周五（早上9:00-下午18:00）
                官方网站：www.zhtaero.com
                公司地址：天津市津南区八里台镇八里台工业园区天津大学创新研究院三层" />
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'


</script>

<style lang="less" scoped>
.after-sale {
    height: 100%;
    background-color: #f1f1f1;
    overflow-x: hidden;
    .header-pic {
        width: calc(100% + 2px);
        aspect-ratio: 1920 / 400;
        background-image: url("@/assets/服务与支持/售后支持/头图.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: -2px -1px;
        .header-text {
            font-size: 50px;
            display: inline-block;
            position: relative;
            top: 50%;
            transform: translateY(-75%);
            color: #fff;
            left: 1300px;
        }
    }
    .card {
        width: 1400px;
        aspect-ratio: 1400 / 1200;
        background-color: #fff;
        border-radius: 17px;
        margin: 0 auto;
        margin-top: 80px;
        margin-bottom: 80px;
        .title {
            text-align: center;
            color: #595758;
            font-size: 40px;
            margin-top: 50px;
            display: inline-block;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
        .figure {
            // width: 100%;
            padding: 0 30px;
            aspect-ratio: 2407 / 639;
            background-image: url("@/assets/服务与支持/售后支持/配图.png");
            background-size: 90%;
            background-position: center;
            background-repeat: no-repeat;
            margin-top: 60px;
            display: flex;
            justify-content: center;
            .item {
                white-space: pre-line;
                text-align: center;
                width: 180px;
                font-size: 17px;
                color: #595758;
                margin: 0 30px;
                position: relative;
            }
            .item0, .item2, .item4 {
                top: 240px;
            }
            .item1, .item3 {
                top: 360px;
            }
            .item0 {
                right: 55px;
            }
            .item1 {
                right: 28px;
            }
            .item3 {
                left: 28px;
            }
            .item4 {
                left: 55px;
            }
        }
        .appellation, .contact {
            margin: 140px 150px 0 150px;
            white-space: pre-line;
            color: #595758;
            font-size: 19px;
            line-height: 40px;
        }
        .contact {
            margin: 60px 150px;
        }
    }
}
</style>