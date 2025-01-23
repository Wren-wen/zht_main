// 插件
// 用来自定义导入全局组件, 使用其他插件等
import { App } from "vue";

// 使用rem工具, 可以直接用px适配
import "@/utils/rem";
// 导入全局样式
import "@/utils/global_styles/main.css";
// elePlus
import 'element-plus/dist/index.css'
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// router
import router from "@/router";
// store
import store from "@/store";
// 自定义指令拖拽换续
import useDrag from '@/directives/useDrag'

export default {
    install(app: App) {
        // 注册el全局组件
        // for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        //     app.component(key, component);
        // }
        
        // 注册插件
        app.use(router);
        app.use(store);
        app.directive('drag', useDrag)
    },
};
