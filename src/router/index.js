import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from "../views/login.vue"
import signup from "../views/signup.vue"
import admin from "../views/admin.vue"
import routeGaurd from "./routeGaurd"
import post from "../views/post.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    beforeEnter: routeGaurd
  },
  {
    path: '/post/:id', 
    component: post,
    name: 'post',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
