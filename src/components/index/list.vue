<template>
  <section id="list-section" class="-mx-2">
    <ul class="list flex flex-wrap w-full">
      <CreateItem/>
      <ListItem v-for="item in $store.state.notes" :key="item.id" :data="item"/>
    </ul>
  </section>
</template>

<script>
  import CreateItem from '@/components/index/create-item'
  import ListItem from '@/components/index/list-item'
  export default {
    name: "list",
    components: {
      CreateItem,
      ListItem,
    },
    data() {
      return {}
    }
  };
</script>

<style lang="scss" scoped>
</style>
