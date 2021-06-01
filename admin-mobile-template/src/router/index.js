/*
 * @Author: your name
 * @Date: 2021-06-01 08:39:22
 * @LastEditTime: 2021-06-01 08:48:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \admin-mobile-template\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
