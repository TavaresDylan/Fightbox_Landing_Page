import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Notfound from "../views/Notfound.vue";
import Subscriptions from "../views/Subscriptions.vue";
import Ourhistory from "../views/Ourhistory.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import OurProducts from "../views/OurProducts.vue";

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
    path: "/connexion",
    component: Login,
  },
  {
    path: "/inscription",
    component: Signup,
  },
  {
    path: "/abonnements",
    component: Subscriptions,
  },
  {
    path: "/nos-articles",
    component: OurProducts,
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
