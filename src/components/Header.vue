<template>
  <div class="header">
    <el-dropdown trigger="click" class="user">
      <span class="username">
        Huangxinbo<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>管理员</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style scoped>
  .header {
    position: relative;
    background-color: #20a0ff;
    height: 2.5rem;
    width: 100%;
  }

  .user {
    position: absolute;
    right: 0;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    color: #fff;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .username {
    cursor: pointer;
  }
</style>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
