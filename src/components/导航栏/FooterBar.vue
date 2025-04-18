<template>
    <div class="footer-bar">
        <div class="top-content">
            <div class="contact-us">
                <div class="basic-info">
                    <div class="title-logo-wrapper">
                        <div class="title">
                            <lan en="Contact Us" zh="联系我们" />
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
                            <lan en="Tianjin University Innovation Research Institute, " zh="天津市津南区八里台工业园区天津大学创新研究院"/>
                            <template v-if="!isZh">
                                <br>
                                <span style="display: inline-block; paddingTop: 4px;">Balital Industrial Park, Jinnan District, Tianjin, China</span>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="sep-line"></div>
                <div class="outer-link">
                    <div class="outer-item wechat" @mouseenter="isShowWechat=true" @mouseleave="isShowWechat=false">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wechat-fill"></use>
                        </svg>
                    </div>
                    <div class="outer-item bilibili" @click="jumpToOuter(OuterLink.BILIBILI)">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bilibili-line"></use>
                        </svg>                        
                    </div>
                    <div class="outer-item youtube" @click="jumpToOuter(OuterLink.YOUTUBE)">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-Youtube-fill"></use>
                        </svg>
                    </div>
                    <div class="outer-item facebook" @click="jumpToOuter(OuterLink.FACEBOOK)">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-facebook"></use>
                        </svg>
                    </div>
                    <div class="outer-item linkedin" @click="jumpToOuter(OuterLink.LINKEDIN)">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-linkedin"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="drone-frame">
                <div class="title">
                    <lan en="Drone Frame" zh="无人机机架" />
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
                    <lan en="Drone System" zh="无人机动力方案" />
                </div>
                <div class="sep-line"></div>
                <div class="two-column">
                    <div class="left">
                        <div class="sub-title">
                            <lan en="KEEL series 0-160kg" zh="KEEL系列 0-160kg" />
                        </div>
                        <div class="product-list">
                            <div class="product-link" v-for="(item, index) in keelList" :key="index">
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="sub-title">
                            <lan en="NAGA series 0-8kg" zh="NAGA系列 0-8kg" />
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
                    <lan en="Accessories" zh="配套专区" />
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
                    <lan en="Service and Support" zh="服务与支持" />
                </div>
                <div class="sep-line"></div>
                <div class="page-list">
                    <div class="page-link" v-for="(item, index) in servList" @click="router.push(item.url as string)" :key="index">
                        <lan :en="item.en" :zh="item.name" />
                    </div>
                </div>
            </div>
            <div class="about-us">
                <div class="title">
                    <lan en="About Us" zh="关于我们" />
                </div>
                <div class="sep-line"></div>
                <div class="page-list">
                    <div class="page-link" v-for="(item, index) in aboutList" @click="router.push(item.url as string)" :key="index">
                        <lan :en="item.en" :zh="item.name" />
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <span>Copyright © 2025 </span>
            <lan en="Technology Co., Ltd." zh="中航通创新（天津）科技发展有限公司" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject, computed, watch } from "vue";
import { OuterLink } from "@/utils/enums";
import { useRouter } from "vue-router";

type LinkItem = {
    name: String;
    en?: String;
    url: String;
};

const router = useRouter();

let isZh = inject('isZh');
let isShowWechat = ref(false);
let wechatDisplay = computed(() => isShowWechat.value ? 'block' : 'none');

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
            en: 'Power System',
            name: '动力系统',
            url: '',
        },
        {
            en: 'Flight Control System',
            name: '飞行控制系统',
            url: '',
        },
        {
            en: 'Link',
            name: '链路',
            url: '',
        },
        {
            en: 'Power Management',
            name: '电源管理',
            url: '',
        },
        {
            en: 'Payload Equipment',
            name: '载荷设备',
            url: '',
        },
        {
            en: 'Other',
            name: '其他',
            url: '',
        }
    ]
);
let servList = ref<LinkItem[]>(
    [
        {
            name: '资料下载',
            en: 'Download',
            url: '/serve/assets',
        },
        {
            name: '图库中心',
            en: 'Gallery center',
            url: '/serve/picture',
        },
        {
            name: '视频中心',
            en: 'Video center',
            url: '/serve/videoCenter',
        },
        {
            name: '常见问题',
            en: 'Q&A',
            url: '/serve/question',
        },
        {
            name: '售后咨询',
            en: 'After-sales',
            url: '/serve/afterSale',
        }
    ]
);
let aboutList = ref<LinkItem[]>(
    [
        {
            name: '新闻动态',
            en: 'News trends',
            url: '/aboutus/news',
        },
        {
            name: '公司介绍',
            en: 'Company',
            url: '/aboutus/introduction',
        },
        {
            name: '留言窗口',
            en: 'Leave a message',
            url: '/aboutus/message',
        },
        {
            name: '声明',
            en: 'Statement',
            url: '/aboutus/declaration',
        }
    ]
)

const jumpToOuter = (link: string) => {
    window.open(link)
}

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
                .wechat {
                    position: relative;
                }
                .wechat::before {
                    content: "";
                    position: absolute;
                    display: v-bind(wechatDisplay);
                    width: 120px;
                    height: 120px;
                    top: 100%;
                    background-image: url("../../assets/WeChat.png");
                    background-size: contain;
                    background-repeat: no-repeat;
                    transform: translateX(-20%);
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