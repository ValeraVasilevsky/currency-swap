import { defineSetupVue3 } from "@histoire/plugin-vue";
import { createPinia } from "pinia";

import "modern-normalize/modern-normalize.css";
import "./main.css";

export const setupVue3 = defineSetupVue3(({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
});
