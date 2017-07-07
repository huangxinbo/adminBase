<template>
  <div>
    <div class="content-top">
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>添加</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content-top-btn">
        <router-link to="/manage">
          <el-button type="primary">返回</el-button>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <transition name="fade" mode="out-in">
        <div class="content">
          addManage
        </div>
      </transition>
    </keep-alive>
  </div>
</template>

<style scoped>

</style>
<script>
  import topHeader from '@/components/Header';
  import sideNav from '@/components/Nav';
  export default {
    data() {
      return {}
    },
    components: {
      topHeader,
      sideNav
    },
    methods: {}
  }
</script>
