import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

import '@/icons' //svg
import '@/filters' //通用方法
import 'element-ui/lib/theme-chalk/index.css'; //ui样式
import 'normalize.css' //默认样式
import '@/permission'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
});

//生产环境 禁用vue devtools
const isDebug_mode = process.env.NODE_ENV !== 'production';

Vue.config.debug = isDebug_mode;

Vue.config.devtools = isDebug_mode;

Vue.config.productionTip = isDebug_mode;

//生产环境 禁用重写console.log
console.log('Env:%o,:%o', process.env.NODE_ENV) // production：生产环境  development：开发环境
if (process.env.NODE_ENV === 'production') {
  console = console || {};
  console.log = function fn() {};
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
