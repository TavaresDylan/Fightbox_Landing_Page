import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Notfound from "../views/Notfound.vue";
import Subscriptions from "../views/Subscriptions.vue";
import Ourhistory from "../views/Ourhistory.vue";

const routes = [
  {
    path: "/",
    component: Home,
    children: [],
  },
  {
    path: "/notre-histoire",
    component: Ourhistory,
    children: [],
  },
  {
    path: "/abonnements",
    component: Subscriptions,
  },
  {
    path: "/page-not-found",
    component: Notfound,
  },
  { path: "/:pathMatch(.*)*", name: "page-not-found", component: Notfound },
];

const router = createRouter({
  history: createWebHistory(),
  base: "/",
  routes,
});

router.resolve({
  name: "page-not-found",
  params: { pathMatch: ["page", "not", "found"] },
}).href;

export default router;
