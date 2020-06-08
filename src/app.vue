<template>
  <div id="app" class="w-full min-h-screen bg-gradient-main">
    <HeaderComponent/>
    <router-view />
  </div>
</template>

<script>
  import HeaderComponent from '@/components/common/header'
  export default {
    name: "app",
    components: {
      HeaderComponent,
    },
    data() {
      return {}
    },
  };
</script>

<style lang="scss">
</style>
