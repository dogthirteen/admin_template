import {
  constRoutes
} from '@/router'

const state = {
  routes: [],
  addRoutes: [],
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = constRoutes.concat(routes)
  },
  SET_SYNC_ROUTES: (state, routes) => { 
    state.addRoutes = routes
  },
  RESET_STATE: state => { 
    state.routes = []
    state.addRoutes = []
  }
}

const actions = {
  generateRoutes({ commit }, asyncRouter) {
    commit('SET_ROUTES', asyncRouter)
  },
  getSyncRoutes({ commit }, asyncRouter) { 
    commit('SET_SYNC_ROUTES',asyncRouter)
  },
  reset_state({ commit }) { 
    commit('RESET_STATE')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}