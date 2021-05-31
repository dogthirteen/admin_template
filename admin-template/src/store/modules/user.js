// import { login, logout, getInfo } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: "",
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { token, name, avatar } = userInfo
    commit('SET_TOKEN', token)
    commit('SET_NAME', name)
    commit('SET_AVATAR', avatar)
    setToken(token)
  },

  // user logout
  logout({ commit }) {
    console.log('remove');
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

