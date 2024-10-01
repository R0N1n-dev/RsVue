import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/index.vue";
import { useUserStore } from "../stores/user";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore();
  userStore.loadingSession = true;
  const user = await userStore.currentUser();
  if (user) {
    next();
  } else {
    next("/login");
  }
  userStore.loadingSession = false;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      beforeEnter: requireAuth,
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      beforeEnter: requireAuth,
      component: () => import("../views/about.vue"),
    },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
  ],
});

export default router;
