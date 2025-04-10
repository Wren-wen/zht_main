import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import '@/iconfont/iconfont';

// 路由，自定义组件，等一系列配置注册全部放到了“自定义插件”种
import MyPlugins from "@/plugins";

const app = createApp(App);
const pinia = createPinia();

app.use(MyPlugins);
app.use(pinia);

app.mount("#app");
