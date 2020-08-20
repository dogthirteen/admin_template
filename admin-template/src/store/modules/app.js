const state = {
  isCollapse: false,
  defaultActive: 'index',
  defaultOpeneds: ['0']
}

const mutations = {
  SET_ACTIVE: (state, sideState) => {
    state.isCollapse = sideState
  },
  SET_CHECK_SLIDER: (state, obj) => {
    state.defaultActive = obj.defaultActive
    state.defaultOpeneds = obj.defaultOpeneds
  },
  RESET_CHECK_SLIDE: state => {
    state.defaultActive = 'index'
    state.defaultOpeneds = ['0']
  }
}

const actions = {
  set_active({ commit }, sideState) {
    commit('SET_ACTIVE', sideState)
  },
  set_check_slider({ commit }, obj) {
    commit('SET_CHECK_SLIDER', obj)
  },
  reset_check_slider({ commit }) {
    commit('RESET_CHECK_SLIDE')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}