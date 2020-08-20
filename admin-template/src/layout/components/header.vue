<template>
  <div class="header flex align-c space-b">
    <div @click="handleShrink">
      <svg-icon class="icon" :class="isCollapse ? 'is-collapse':''" iconClass="shrink"></svg-icon>
    </div>
    <div class="user">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar shape="square" size="large" :src="avatar"></el-avatar>
          <svg-icon class="icon" iconClass="border_bottom"></svg-icon>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span>个人信息</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="handleLogOut">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      "isCollapse",
      "avatar"
    ])
  },
  methods: {
    handleShrink() {
      console.log(1111);
      this.$store.dispatch('app/set_active', !this.isCollapse)
    },
    // 退出登录
    handleLogOut() {
      this.$store.dispatch('user/logout')
      this.$store.dispatch('permission/reset_state')
      this.$store.dispatch('app/reset_check_slider')
      this.$router.push({path:'/login'})
    }
  },
}
</script>

<style lang='scss' scoped>
.header {
  width: 100%;
  background-color: #b3c0d1;
  color: #333;
  height: 60px;
  padding: 0 30px;
  .icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    &.is-collapse {
      transform: rotate(180deg);
    }
  }
  .user {
    height: 40px;
    .icon {
      width: 16px;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
  }
}
</style>