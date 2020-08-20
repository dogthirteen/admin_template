<template>
  <div class="container flex">
    <my-slider :isCollapse="isCollapse"></my-slider>
    <div class="content">
      <my-header></my-header>
      <my-main></my-main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import slider from '@/layout/components/silder.vue'
import header from '@/layout/components/header.vue'
import main from '@/layout/components/main.vue'
export default {
  components: {
    'my-slider': slider,
    'my-header': header,
    'my-main': main
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      "isCollapse",
      "avatar",
      "permission_routes"
    ])
  },
  methods: {

  },
}
</script>

<style lang='scss' scoped>
.container {
  width: 100vw;
  height: 100vh;
}
.content {
  width: 100%;
}
</style>