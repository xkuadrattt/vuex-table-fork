import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TableView from "@/views/TableView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/table",
      name: "table",
      component: TableView,
    },
    {
      path: "/input",
      name: "input",
      component: () => import("@/views/InputTable.vue"),
    },
    {
      path: "/riwayat",
      name: "riwayat",
      component: () => import("@/views/TablePenambahan.vue"),
    },
  ],
});

export default router;
