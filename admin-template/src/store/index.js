import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import permission from './modules/permission'
import app from './modules/app'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    permission,
    user,
    app
  },
  getters,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage, //state中的数据存储到sessionStorage
      reducer(val) {
        return {
          user: val.user,
          permission: val.permission,
          app: val.app
        }; 
      }
    })
  ]
})

export default store