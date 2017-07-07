<template>
  <div>
    <div class="content-top">
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content-top-btn">
        <el-button type="primary">添加</el-button>
      </div>
    </div>
    <keep-alive>
      <transition name="fade" mode="out-in">
        <div class="content">
          home
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
