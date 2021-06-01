/*
 * @Author: your name
 * @Date: 2021-06-01 08:39:22
 * @LastEditTime: 2021-06-01 09:11:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-mobile-template\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/normalize.css';
import 'lib-flexible/flexible';
import '@/icons';
import '@/filters';
import '@/directive';

//生产环境 禁用vue devtools
const isDebug_mode = process.env.NODE_ENV !== 'production';

Vue.config.debug = isDebug_mode;
Vue.config.productionTip = false;
Vue.config.devtools = isDebug_mode;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
