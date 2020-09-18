import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      { path: "/", name: "Home", component: () => import("../views/Home.vue") },
      {
        path: "/category",
        name: "Category",
        component: () => import("../views/Category.vue"),
      },
      {
        path: "/shopcar",
        name: "ShopCar",
        component: () => import("../views/ShopCar.vue"),
      },
      {
        path: "/userinfo",
        name: "UserInfo",
        component: () => import("../views/UserInfo.vue"),
      },
    ],
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("../views/Category.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
