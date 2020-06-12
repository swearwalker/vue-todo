<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/common/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
