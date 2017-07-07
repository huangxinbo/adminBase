<template>
  <div class="left">
    <div class="logo">
      <router-link to="/" class="btn-href" >Admin</router-link>
    </div>
    <el-menu :default-active="defaultActive" theme="dark" class="nav" router>
      <el-menu-item index="/home">
        <i class="fa fa-home fa-lg nav-icon"></i>首页
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="fa fa-cog fa-lg nav-icon"></i>系统管理</template>
        <el-menu-item index="/manage">管理员</el-menu-item>
        <el-menu-item index="/role">角色</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style scoped>
  .left {
    position: fixed;
    left: 0;
    top: 0;
    width: 10rem;
    height: 100%;
  }

  .logo {
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    background-color: #20a0ff;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

  .nav {
    width: 100%;
    height: calc(100% - 2.5rem);
    overflow: auto;
    -webkit-border-radius: 0;
    border-radius: 0;
    -moz-border-radius: 0;
    background-color: #324157;
  }
</style>
<script>
  export default {
    data() {
      return {}
    },
    computed: {
      defaultActive: function () {
        let pathName = this.$route.path;
        let arr = pathName.split("/");
        let index = '/' + arr[1];
        return index;
      }
    },
    methods: {}
  }
</script>
