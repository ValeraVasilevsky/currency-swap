import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [] as RouteRecordRaw[],
});
