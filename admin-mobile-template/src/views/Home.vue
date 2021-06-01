<!--
 * @Author: your name
 * @Date: 2021-06-01 08:39:22
 * @LastEditTime: 2021-06-01 10:02:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-mobile-template\src\views\Home.vue
-->
<template>
  <div class="home">
   <svg-icon class="icon" iconClass="welcome"></svg-icon>
   <p>欢迎</p>
   {{num | numberFormatter}}
   {{ time | formatTime}}
   <input type="text" :v-focus="true">
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      num:10000,
      time:1622512932095
    }
  }
}
</script>
<style lang="scss">
.home{
  .icon{
    width: 100px;
    height: 100px;
  }
  font-size: 24px;
  color: $theme-color;
}
</style>
