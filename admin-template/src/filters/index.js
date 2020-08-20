import Vue from 'vue'
import format from 'date-fns/format'

// 不传参默认格式 年-月-日 时-分-秒  
Vue.filter('format', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return format(new Date(value), formatStr)
})