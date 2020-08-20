import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout/index'

Vue.use(Router)

export const constRoutes = [{
    path: '/',
    component: Layout,
    redirect: '/index',
    isClick: true,
    children: [{
      path: 'index',
      name: 'index',
      component: () => import('@/views/index/index'),
      meta: {
        title: '首页',
        icon: 'index'
      }
    }]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/index')
  },
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constRoutes
})

const router = createRouter()

router.$addRoutes = (params) => {
  router.matcher = new Router({ // 重置路由规则
    routes: constantRouterMap
  }).matcher
  router.addRoutes(params) // 添加路由
}


// 通过新建一个全新的 Router，然后将新的 Router.matcher 赋给当前页面的管理 Router，以达到更新路由配置的目的。
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router