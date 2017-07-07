<template>
  <el-form ref="form" :model="loginData" class="login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item>
      <el-input v-model="loginData.name" placeholder="用户"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="loginData.password" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="login">立即登录</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
  .login-container {
    -webkit-border-radius: 1px;
    border-radius: 1px;
    -moz-border-radius: 1px;
    margin: 6rem auto;
    width: 20rem;
    position: relative;
    padding: 2.5rem 2.5rem 2rem 2.5rem;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 2rem #cac6c6;
  }

  .title {
    margin: 0 auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
<script>
  export default {
    data() {
      return {
        loginData: {
          name: '',
          password: '',
        }
      }
    },
    methods: {
      login() {
        console.log(this.loginData);
      }
    }
  }
</script>
