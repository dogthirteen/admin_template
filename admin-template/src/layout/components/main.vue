<template>
  <div class="main">
     <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang='scss' scoped>
.main {
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>