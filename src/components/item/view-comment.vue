<template>
  <li class="item w-full p-2 mb-2 rounded-lg shadow flex flex-col items-start">
    <h3 class="item__author font-bold">{{ data.author }}</h3>
    <p class="item__content text-sm">{{ data.content }}</p>
    <span class="item__date text-xs">Дата: {{ data.created_at | moment('LLL') }}</span>
  </li>
</template>

<script>
  export default {
    name: "view-comment",
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
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
