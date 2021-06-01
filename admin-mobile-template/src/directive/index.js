/*
 * @Author: your name
 * @Date: 2021-06-01 09:04:18
 * @LastEditTime: 2021-06-01 09:32:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-mobile-template\src\directive\index.js
 */
import Vue from 'vue'

Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function(el) {
      console.log(el);
      // 聚焦元素
      el.focus();
    },
  });