<template>
    <div class="footer-bar">
        <div class="top-content">
            <div class="contact-us">
                <div class="basic-info">
                    <div class="title-logo-wrapper">
                        <div class="title">
                            <lan en="联系我们" zh="联系我们" />
                        </div>
                        <div class="logo">
                            <img src="@/assets/logo.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <div class="tel">
                            <span>Tel: +86-13388005852</span>
                        </div>
                        <div class="email">
                            <span>E-mail: info@zhtaero.com</span>
                        </div>
                        <div class="addr">
                            <span>Add.:</span>
                            <lan en="天津市津南区八里台工业园区天津大学创新研究院" />
                        </div>
                    </div>
                </div>
                <div class="sep-line"></div>
                <div class="outer-link">
                    <div class="outer-item wechat">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wechat-fill"></use>
                        </svg>
                    </div>
                    <div class="outer-item bilibili">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bilibili-line"></use>
                        </svg>                        
                    </div>
                    <div class="outer-item youtube">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-Youtube-fill"></use>
                        </svg>
                    </div>
                    <div class="outer-item facebook">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-facebook"></use>
                        </svg>
                    </div>
                    <div class="outer-item linkedin">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-linkedin"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="drone-frame">
                <div class="title">
                    <lan en="无人机机架" zh="无人机机架" />
                </div>
                <div class="sep-line"></div>
                <div class="product-list">
                    <div class="product-link" v-for="(item, index) in frameList" :key="index">
                        {{ item.name }}
                    </div>
                </div>
            </div>
            <div class="power-solution">
                <div class="title">
                    <lan en="无人机动力方案" zh="无人机动力方案" />
                </div>
                <div class="sep-line"></div>
                <div class="two-column">
                    <div class="left">
                        <div class="sub-title">
                            <lan en="KEEL系列 10-100kg" zh="KEEL系列 10-100kg" />
                        </div>
                        <div class="product-list">
                            <div class="product-link" v-for="(item, index) in keelList" :key="index">
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="sub-title">
                            <lan en="NAGA系列 3-8kg" zh="NAGA系列 308kg" />
                        </div>
                        <div class="product-list">
                            <div class="product-link" v-for="(item, index) in nagaList" :key="index">
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accessory">
                <div class="title">
                    <lan en="配套专区" zh="配套专区" />
                </div>
                <div class="sep-line"></div>
                <div class="page-list">
                    <div class="page-link" v-for="(item, index) in accessoryList" :key="index">
                        <lan :en="item.en" :zh="item.name" />
                    </div>
                </div>
            </div>
            <div class="service-support">
                <div class="title">
                    <lan en="服务与支持" zh="服务与支持" />
                </div>
                <div class="sep-line"></div>
                <div class="page-list">
                    <div class="page-link" v-for="(item, index) in servList" :key="index">
                        <lan :en="item.en" :zh="item.name" />
                    </div>
                </div>
            </div>
            <div class="about-us">
                <div class="title">
                    <lan en="关于我们" zh="关于我们" />
                </div>
                <div class="sep-line"></div>
                <div class="page-list">
                    <div class="page-link" v-for="(item, index) in aboutList" :key="index">
                        <lan :en="item.en" :zh="item.name" />
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <span>Copyright © 2025 </span>
            <lan en="中航通创新（天津）科技发展有限公司" zh="中航通创新（天津）科技发展有限公司" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type LinkItem = {
    name: String;
    en?: String;
    url: String;
};


let frameList = ref<LinkItem[]>(
    [
        {
            name: 'KEEL',
            url: '',
        },
        {
            name: 'KEEL MINI',
            url: '',
        },
        {
            name: 'KEEL PLUS',
            url: '',
        }
    ]
);
let keelList = ref<LinkItem[]>(
    [
        {
            name: 'KEEL',
            url: '',
        },
        {
            name: 'KEEL MINI',
            url: '',
        },
        {
            name: 'KEEL PLUS',
            url: '',
        },
        {
            name: 'KEEL PRO',
            url: '',
        },
        {
            name: 'KEEL MAX',
            url: '',
        }
    ]
);
let nagaList = ref<LinkItem[]>(
    [
        {
            name: 'NAGA X4',
            url: '',
        },
        {
            name: 'NAGA X8',
            url: '',
        }
    ]
);
let accessoryList = ref<LinkItem[]>(
    [
        {
            name: '动力系统',
            en: '动力系统',
            url: '',
        },
        {
            name: '飞行控制系统',
            en: '飞行控制系统',
            url: '',
        },
        {
            name: '载荷设备',
            en: '载荷设备',
            url: '',
        },
        {
            name: '其他',
            en: '其他',
            url: '',
        }
    ]
);
let servList = ref<LinkItem[]>(
    [
        {
            name: '资料下载',
            en: '资料下载',
            url: '',
        },
        {
            name: '图库中心',
            en: '图库中心',
            url: '',
        },
        {
            name: '视频中心',
            en: '视频中心',
            url: '',
        },
        {
            name: '常见问题',
            en: '常见问题',
            url: '',
        },
        {
            name: '售后咨询',
            en: '售后咨询',
            url: '',
        }
    ]
);
let aboutList = ref<LinkItem[]>(
    [
        {
            name: '新闻动态',
            en: '新闻动态',
            url: '',
        },
        {
            name: '公司介绍',
            en: '公司介绍',
            url: '',
        },
        {
            name: '加入我们',
            en: '加入我们',
            url: '',
        },
        {
            name: '声明',
            en: '声明',
            url: '',
        }
    ]
)

</script>

<style lang="less" scoped>
.footer-bar {
    margin-top: 60px;
    background-color: #2b2b2b;
    color: #8a8a8a;
    display: flex;
    flex-direction: column;
    padding: 60px 20px 20px 20px;
    .top-content {
        display: flex;
        justify-content: space-evenly;
        
        .title {
            font-size: 22px;
            color: #fff;
            font-weight: bold;
            letter-spacing: 2px;
        }
        .sep-line {
            background-color: #5e5e5e;
            height: 2px;
            margin-top: 8px;
            margin-bottom: 16px;
        }
        .product-link, .page-link {
            margin-top: 8px;
            cursor: pointer;
        }
        .contact-us {
            display: flex;
            flex-direction: column;
            .basic-info {
                display: flex;
                flex-direction: column;
                .title-logo-wrapper {
                    display: flex;
                    justify-content: space-between;
                    height: 80px;
                    .logo img {
                        height: 100%;
                    }
                }
                .info {
                    margin-top: 10px;
                    .tel {
                        margin-top: 8px;
                    }
                    .email {
                        margin-top: 8px;
                    }
                    .addr {
                        margin-top: 8px;
                    }
                }
            }
            .sep-line {
                margin-top: 16px;
            }
            .outer-link {
                display: flex;
                .outer-item {
                    height: 28px;
                    width: 28px;
                    border-radius: 100%;
                    background-color: #595758;
                    margin-right: 14px;
                    padding: 4px;
                    cursor: pointer;
                    .icon {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .power-solution {
            .two-column {
                display: flex;
                justify-content: space-between;
                .sub-title {
                    color: #fff;
                    font-weight: bold;
                }
                .right {
                    margin-left: 40px;
                }
            }
        }
        .accessory, .service-support, .about-us {
            .page-link {
                font-weight: 200;
                color: #fff;
            }
        }
    }
    .copyright {
        margin-top: 80px;
        text-align: center;
    }
}
</style>