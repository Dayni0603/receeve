import VueRouter, { RouteConfig } from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
//Router components
import Login from "@/pages/Login.vue";
import Navigation from "@/components/Navigation.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Accounts from "@/pages/Accounts.vue";
import AccountInfo from "@/pages/AccountInfo.vue";
/**
 * Routes
 */
const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Navigation,
    name: "Home",
    redirect: "home",
    children: [
      {
        path: "home",
        component: Dashboard,
        name: "Dashboard",
        meta: { auth: true },
      },
      {
        path: "/accounts",
        component: Accounts,
        name: "Accounts",
        meta: { auth: true },
      },
      {
        path: "account-details/:id",
        component: AccountInfo,
        name: "Account Info",
        meta: { auth: true },
      },
    ] as Array<RouteConfig>,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { auth: false },
  },
  { path: "*", redirect: "/" },
];

/**
 * Router config
 */
const router = new VueRouter({
  mode: "history",
  routes,
});

/**
 * route guard, Prevent unauthorized accounts from accessing pages that need auth
 */
//  router.beforeEach((to, from, next) => {
//   const token = localStorage.token

//   if(to.meta.auth === true && !token) {
//       return next('/login')
//   }

//   if(!to.meta.auth && token) {
//       return next('/home')
//   }

//   next()
// })

export default router;
