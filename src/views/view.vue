<template>
  <main id="main" class="flex items-center justify-center">
    <div class="container flex justify-center">
      <ViewItem/>
    </div>
  </main>
</template>

<script>
  import ViewItem from '@/components/item/view-item'
  export default {
    name: "view-note",
    components: {
      ViewItem,
    },
    data() {
      return {
        comment: {
          author: '',
          content: '',
        }
      }
    },
    computed: {
      note() {
        return this.$store.state.note
      },
      editNote() {
        return {
          name: 'edit',
          params: {
            id: this.note.id
          }
        }
      },
      viewNote() {
        return {
          name: 'view',
          params: {
            id: this.note.id
          }
        }
      }
    },
    mounted() {
      this.$store.dispatch('getNote', this.$route.params.id)
    },
    methods: {
      createComment() {
        this.$store.dispatch('createComment', this.comment)
      },
      deleteNote() {
        this.$store.dispatch('deleteNote', this.$route.params.id).then(() => {
          this.$router.push('/')
        })
      },
    }
  };
</script>

<style lang="scss" scoped>
</style>
