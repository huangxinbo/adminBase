<template>
  <div class="container">
    <side-nav></side-nav>
    <div class="right">
      <top-header></top-header>
      <router-view></router-view>
    </div>
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
