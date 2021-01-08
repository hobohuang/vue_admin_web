import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "./plugins/element";
import "./assets/css/clear.scss"; //格式化全局初始样式
import "./assets/css/index.scss"; //全局样式文件

//引用 fontawesome
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; //加{}
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-regular";
import brands from "@fortawesome/fontawesome-free-brands";

fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(Element)
  .mount("#app");
app.component("font-awesome-icon", FontAwesomeIcon);