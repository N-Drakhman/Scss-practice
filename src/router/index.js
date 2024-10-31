import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/Button",
      name: "Button",
      component: () => import("../views/ButtonView.vue"),
    },
    {
      path: "/Card",
      name: "Card",
      component: () => import("../views/CardView.vue"),
    },
    {
      path: "/Text",
      name: "Text",
      component: () => import("../views/ResponsiveTextView.vue"),
    },
    {
      path: "/Colors",
      name: "Colors",
      component: () => import("../views/ColorsView.vue"),
    },
    {
      path: "/Padding",
      name: "Padding",
      component: () => import("../views/PaddingView.vue"),
    },
    {
      path: "/FontSize",
      name: "FontSize",
      component: () => import("../views/FontSizeView.vue"),
    },
  ],
});

export default router;
