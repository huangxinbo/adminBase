<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
</script>

<style scoped>
  @import './assets/css/reset.css';
  @import './assets/css/common.css';

  #app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
