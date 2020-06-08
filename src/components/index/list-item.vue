<template>
  <li class="item w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
    <div class="item__wrapper bg-gradient-light p-4 rounded-lg flex flex-col items-start justify-end h-64 shadow-lg relative">
      <div class="item__actions actions absolute top-0 left-0 right-0 p-4 flex items-center">
        <span class="actions__comments text-sm font-medium">{{ data.comments.length }}</span>
        <router-link :to="editNote">E</router-link>
        <button @click="deleteNote" class="actions__delete">D</button>
      </div>
      <router-link :to="viewNote" class="font-bold">{{ data.name }}</router-link>
      <p class="item__content truncate text-sm">{{ data.content }}</p>
    </div>
  </li>
</template>

<script>
  export default {
    name: "list-item",
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    computed: {
      editNote() {
        return {
          name: 'edit',
          params: {
            id: this.data.id
          }
        }
      },
      viewNote() {
        return {
          name: 'view',
          params: {
            id: this.data.id
          }
        }
      }
    },
    methods: {
      deleteNote() {
        this.$store.dispatch('deleteNote', this.data.id).then(() => {
          this.$store.dispatch('getNotes')
        })
      },
    }
  };
</script>

<style lang="scss" scoped>
</style>
