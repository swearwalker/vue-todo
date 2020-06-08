<template>
  <main id="main" class="flex items-center justify-center">
    <div class="container flex justify-center">
      <CreateItem/>
    </div>
  </main>
</template>

<script>
  import CreateItem from '@/components/item/create-item'
  export default {
    name: "create-note",
    components: {
      CreateItem,
    },
    data() {
      return {}
    },
  };
</script>

<style lang="scss" scoped>
</style>
