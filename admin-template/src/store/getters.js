const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  permission_routes: state => state.permission.routes,
  isCollapse: state => state.app.isCollapse,
  async_routers: state => state.permission.addRoutes,
  defaultActive: state => state.app.defaultActive,
  defaultOpeneds: state => state.app.defaultOpeneds
}
export default getters