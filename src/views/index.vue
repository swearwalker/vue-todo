<template>
  <main id="main">
    <div class="container">
      <List/>
    </div>
  </main>
</template>

<script>
  import List from '@/components/index/list'
  export default {
    name: "index",
    components: {
      List
    },
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getNotes')
    }
  };
</script>

<style lang="scss" scoped>
</style>