import router from '@/router'
import { Message } from 'element-ui'
import store from '@/store'
import { addRouter } from '@/utils/addRouter'

// 监听动态添加的路由被重置
router.onReady(async () => {
  if (store.getters.permission_routes && store.getters.permission_routes.length > 0) {

    let asyncRoutes = addRouter(store.getters.async_routers)

    await store.dispatch('permission/generateRoutes', asyncRoutes)

    router.options.routes = store.getters.permission_routes
    
    router.addRoutes(asyncRoutes)
  }
})

// 路由导航钩子
router.beforeEach(async (to, from, next) => {
  // 设置网页标题
  if (to.meta && to.meta.title && to.path !== '/login') {
    document.title = to.meta.title
  }
  
  const hasToken = store.state.user.token || ''
  if (hasToken) {
    const hasRouter = store.getters.permission_routes && store.getters.permission_routes.length > 0
    if (to.path === '/login') {
      Message.info('您已登录,如需切换用户请退出重新登录')
      next('/index')
    } else if (hasRouter) {
      next()
    } else {
      try {
        let addRoutes = JSON.parse(JSON.stringify(store.getters.async_routers))

        let asyncRoutes = addRouter(addRoutes)

        await store.dispatch('permission/generateRoutes', asyncRoutes)

        router.options.routes = store.getters.permission_routes

        router.addRoutes(asyncRoutes)

        next()

      } catch (error) {
        console.log(error);

        Message.error('获取侧边栏失败，请重新登录')

        await store.dispatch('user/logout')

        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})