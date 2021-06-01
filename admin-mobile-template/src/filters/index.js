/*
 * @Author: your name
 * @Date: 2021-06-01 08:49:29
 * @LastEditTime: 2021-06-01 10:02:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-mobile-template\src\filters\index.js
 */
// import parseTime, formatTime and set to filter
import Vue from 'vue'
import { parseTime, formatTime } from '../utils/index.js'

console.log(parseTime(), formatTime());
const format = {
  parseTime,
  formatTime,
/**
 * @param {number} time
 */
 timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
},
/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
numberFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
},

/**
 * 10000 => "10,000"
 * @param {number} num
 */
toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
},

/**
 * 大写首字符
 * @param {String} string
 */
uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

}


/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}


// register global utility filters
Object.keys(format).forEach((key) => {
  Vue.filter(key, format[key]);
});

