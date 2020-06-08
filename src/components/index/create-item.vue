<template>
  <li class="item w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
    <div class="item__wrapper bg-gradient-light p-4 rounded-lg flex flex-col items-start justify-end h-64 shadow-lg relative">
      <router-link to="/create" class="item__link p-4 w-full h-full flex justify-center items-center">
        <p class="actions__delete text-primary text-sm font-bold">Створити Замітку</p>
      </router-link>
    </div>
  </li>
</template>

<script>
  export default {
    name: "create-item",
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
