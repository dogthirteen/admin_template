import _import from '@/utils/_import'


// 处理路由组件引入
export const addRouter = (asyncRoutes) => {
  
  asyncRoutes.forEach(item => {
    item.component = _import(item.component)
    if (item.children) {
      addRouter(item.children)
    }
  })
  return asyncRoutes
}