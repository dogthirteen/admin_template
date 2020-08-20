import Layout from '@/layout/index'

// 动态路由组件 配置

const map = {
  'layout': Layout,
  'me': () => import('@/views/me/index'),
  'form': () => import('@/views/form/index'),
  'menu1': () => import('@/views/nested/menu1/index'),
  'menu2': () => import('@/views/nested/menu2/index')
}

export default file => {
  return map[file] || null
}