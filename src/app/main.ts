import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";

import App from "./app.vue";

import "modern-normalize/modern-normalize.css";
import "./style.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
