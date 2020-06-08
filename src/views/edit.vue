<template>
  <main id="main" class="flex items-center justify-center">
    <div class="container flex justify-center">
      <EditItem/>
    </div>
  </main>
</template>

<script>
  import EditItem from '@/components/item/edit-item'
  export default {
    name: "edit-note",
    components: {
      EditItem,
    },
    data() {
      return {
        item: {
          name: '',
          content: '',
        }
      }
    },
    mounted() {
      this.$store.dispatch('getNote', this.$route.params.id)
    },
    methods: {
      updateNote() {
        this.$store.dispatch('updateNote', this.item)
      },
      deleteNote() {
        this.$store.dispatch('deleteNote', this.$route.params.id)
      },
    }
  };
</script>

<style lang="scss" scoped>
</style>
