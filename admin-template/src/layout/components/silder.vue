<template>
  <div class="silder">
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :default-openeds="openedsArr" :unique-opened="true" router :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <template v-for="(item,index) in permission_routes">
        <el-submenu v-if="item.children && !item.isClick" :key="index" :index="index + ''">
          <template slot="title">
            <svg-icon class="icon" :iconClass="item.meta.icon"></svg-icon>
            <span>{{item.meta.title}}</span>
          </template>
          <el-menu-item-group v-for="(item1, index1) in item.children" :key="index1">
            <el-menu-item :index="item.path + item1.path" @click="handleCheckItem(item.path + item1.path,index)">{{item1.meta.title}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-else v-for="(item1, index1) in item.children" :key="index1 + index" :index="item1.path" @click="handleCheckItem(item1.path,index1)">
          <svg-icon class="icon" :iconClass="item1.meta.icon"></svg-icon>
          <span slot="title">{{item1.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      side: [],
      activeIndex: "index",
      openedsArr: ['0'],
    }
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters([
      "permission_routes",
      "defaultActive",
      "defaultOpeneds"
    ])
  },
  created() {
    this.activeIndex = this.defaultActive
    this.openedsArr = this.defaultOpeneds
    this.side = JSON.parse(JSON.stringify(this.permission_routes))
    this.side.forEach((item, index) => {
      if (item.hidden) {
        this.side.splice(index, 1)
      }
    })
  },
  methods: {
    // 存储当前点击的栏目
    handleCheckItem(checkPath, index) {
      this.$store.dispatch('app/set_check_slider', { defaultActive: checkPath, defaultOpeneds: [index] })
    },
  },
}
</script>

<style lang='scss' scoped>
.silder {
  height: 100vh;
  color: #333;
  text-align: center;
  transition: width 0.3s;
  .el-menu {
    height: 100%;
    border: none;
    text-align: left;

    .icon {
      font-size: 14px;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
}
::v-deep {
  .el-menu-item-group__title {
    display: none;
  }
}
.el-submenu .el-menu-item {
  padding-left: 52px !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 260px;
  min-height: 400px;
}
</style>