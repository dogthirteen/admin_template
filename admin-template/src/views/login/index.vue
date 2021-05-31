<template>

  <div class="login-box">
    <el-row>
      <el-col :span="8">
        <el-input id="name" v-model="name" placeholder="请输入帐号">
          <template slot="prepend">帐号</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
          <template slot="prepend">密码</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button id="login" @click="check" style="width:100%" type="primary">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Login, getSyncRoutes } from '@/api/user'
// import { setToken } from '@/utils/auth'
export default {
  data() {
    return {
      name: '15072521234',
      password: '123456'
    }
  },
  methods: {
    check: function () {
      //获取值
      var name = this.name;
      var password = this.password;
      if (name == '' || password == '') {
        this.$message({
          message: '账号或密码为空！',
          type: 'error'
        })
        return;
      }
      let req = {
        reqdata: {
          t: `${Date.parse(new Date()) / 1000}`
        }
      }
      Login(req).then(async (res) => {
        this.$store.dispatch('user/login', res.data)

        let result = await getSyncRoutes(req)
        
        this.$store.dispatch('permission/getSyncRoutes', result.data.asyncRoutes)

        let url = '/index'

        if (this.$route.query && this.$route.query.redirect) {
          url = this.$route.query.redirect
        }
        this.$router.push({
          path: url
        })
      }).catch((err) => {
        console.log(err);
      });
    }
  },
}
</script>

<style lang='scss' scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.login-box {
  margin-top: 20%;
  margin-left: 40%;
}
</style>