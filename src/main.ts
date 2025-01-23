import { createApp } from "vue";
import App from "./App.vue";

// 路由，自定义组件，等一系列配置注册全部放到了“自定义插件”种
import MyPlugins from "@/plugins";

const app = createApp(App);

app.use(MyPlugins);

app.mount("#app");
