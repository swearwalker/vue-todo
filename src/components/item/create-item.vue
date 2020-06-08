<template>
  <form class="form bg-white rounded-lg shadow-lg p-4 w-full md:w-1/3" @submit.prevent="createNote">
    <label class="form__label" for="name">
      <span class="form__title">Назва</span>
      <input class="form__field" id="name" type="text" v-model="note.name" required>
    </label>
    <label class="form__label" for="content">
      <span class="form__title">Опис</span>
      <textarea rows="4" class="form__field" id="content" v-model="note.content" required/>
    </label>
    <button class="form__btn btn btn-primary" type="submit">Створити</button>
  </form>
</template>

<script>
  export default {
    name: "create-comment",
    data() {
      return {
        note: {
          name: '',
          content: '',
          comments: []
        }
      }
    },
    methods: {
      createNote() {
        this.$store.dispatch('createNote', this.note).then(() => {
          this.$router.push('/')
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  .form__label {
    @apply flex flex-col w-full items-start text-sm font-bold mb-4;
  }
  .form__title {
    @apply mb-1;
  }
  .form__field {
    @apply w-full shadow rounded-lg px-2 py-1;
  }
</style>
