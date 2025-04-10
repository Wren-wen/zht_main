import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { getToken, getAdmin, removeAdmin } from "@/utils/auth";
// import { ElMessage } from "element-plus";

const routes: RouteRecordRaw[] = [
    {
        name: "home",
        path: "/",
        component: () => import("@/views/home.vue"),
        // redirect: "/homepage",
        meta: {
            title: "ZHT Innovation Drone",
            requireAuth: false,
            isAdmin: false,
        },
    },
    {
        name: "serve",
        path: "/serve",
        component: () => import("@/views/serve.vue"),
        meta: {
            title: "serve",
            requireAuth: false,
            isAdmin: false,
        },
        // 子路由
        children: [
            {
                name: "assets",
                path: "/serve/assets",
                component: () => import("@/views/serve/assets.vue"),
                meta: {
                    title: "assets",
                    requireAuth: false,
                    isAdmin: false,
                },
            },
            {
                name: "picture",
                path: "/serve/picture",
                component: () => import("@/views/serve/picture.vue"),
                meta: {
                    title: "picture",
                    requireAuth: false,
                    isAdmin: false,
                },
            },
            {
                name: "videoCenter",
                path: "/serve/videoCenter",
                component: () => import("@/views/serve/videoCenter.vue"),
                meta: {
                    title: "videoCenter",
                    requireAuth: false,
                    isAdmin: false,
                },
            },
            {
                name: "question",
                path: "/serve/question",
                component: () => import("@/views/serve/question.vue"),
                meta: {
                    title: "question",
                    requireAuth: false,
                    isAdmin: false,
                },
            },
            {
                name: "afterSale",
                path: "/serve/afterSale",
                component: () => import("@/views/serve/afterSale.vue"),
                meta: {
                    title: "afterSale",
                    requireAuth: false,
                    isAdmin: false,
                },
            },
        ],
    },
    {
        name: "aboutus",
        path: "/aboutus",
        redirect: "/aboutus/news",
        component: () => import("@/views/aboutus.vue"),
        children: [
            {
                name: "news",
                path: "/aboutus/news",
                component: () => import("@/views/aboutus/news.vue"),
                meta: {
                    title: "news",
                    requireAuth: false,
                    isAdmin: false,
                },
            },
            {
                name: "introduction",
                path: "/aboutus/introduction",
                component: () => import("@/views/aboutus/introduction.vue"),
                meta: {
                    title: "introduction",
                    requireAuth: false,
                    isAdmin: false,
                },
            },
            {
                name: "contact",
                path: "/aboutus/contact",
                component: () => import("@/views/aboutus/contact.vue"),
                meta: {
                    title: "contact",
                    requireAuth: false,
                    isAdmin: false,
                },
            },
            {
                name: "declaration",
                path: "/aboutus/declaration",
                component: () => import("@/views/aboutus/declaration.vue"),
                meta: {
                    title: "declaration",
                    requireAuth: false,
                    isAdmin: false,
                },
            },
        ],
        meta: {
            title: "aboutus",
            requireAuth: false,
            isAdmin: false,
        },
    },
    {
        name: "articleDetail",
        path: "/article/:id",
        component: () => import("@/views/articleDetail.vue"),
        meta: {
            title: "articleDetail",
            requireAuth: false,
            isAdmin: false,
        },
    },
    {
        name: "pictureDetail",
        path: "/picture/:id",
        component: () => import("@/views/pictureDetailContainer.vue"),
        meta: {
            title: "pictureDetail",
            requireAuth: false,
            isAdmin: false,
        },
    },
    {
        name: "product",
        path: "/product/:id",
        component: () => import("@/views/product.vue"),
        meta: {
            title: "product",
            requireAuth: false,
            isAdmin: false,
        },
    },
    {
        name: "category",
        path: "/category/:id",
        component: () => import("@/views/category.vue"),
        meta: {
            title: "category",
            requireAuth: false,
            isAdmin: false,
        },
    },
    {
        name: "configuration",
        path: "/configuration",
        component: () => import("@/views/configuration/configuration.vue"),
        meta: {
            title: "后台管理",
            requireAuth: false,
            isAdmin: false,
        },
    },
    {
        path: "/configuration/article",
        component: () =>
            import("@/views/configuration/configurationArticle.vue"),
        meta: {
            title: "文章管理",
            requireAuth: false,
            isAdmin: false,
        },
    },
    {
        path: "/configuration/picture",
        component: () =>
            import("@/views/configuration/configurationPicture.vue"),
        meta: {
            title: "图片组管理",
            requireAuth: false,
            isAdmin: false,
        },
    },
    {
        path: "/configuration/product",
        component: () =>
            import("@/views/configuration/configurationProduct.vue"),
        meta: {
            title: "商品管理",
            requireAuth: false,
            isAdmin: false,
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior: () => ({ top: 0 }),
});
router.beforeEach(async (to, from, next) => {
    // let token = getToken();
    // let isAdmin = getAdmin();
    const WINDOW_TITLE = " - ZHT Aero";
    if (to.meta && to.meta.title) {
        document.title = `${to.meta.title}${WINDOW_TITLE}`;
    } else {
        document.title = WINDOW_TITLE;
    }
    next();
});
export default router;
