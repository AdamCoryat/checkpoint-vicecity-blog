import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
// @ts-ignore
import CreateBlog from "../pages/CreateBlog.vue"
// @ts-ignore
import BlogDetails from "../pages/BlogDetails.vue"
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/createblog",
    name: "CreateBlog",
    component: CreateBlog,
    beforeEnter: authGuard,
  },
  {
    path: "/blogdetails/:id",
    name: "BlogDetails",
    component: BlogDetails,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
