import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: HomeView },
  {
    path: "/counter",
name: "counter",
    component: () => import("@/views/CounterView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
