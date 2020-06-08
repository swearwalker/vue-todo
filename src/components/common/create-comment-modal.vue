<template>
  <div @click.self="cancel" class="bg fixed inset-0 z-50 w-full h-full flex items-center justify-center">
    <form class="form bg-white rounded-lg shadow-lg p-4 w-5/6 md:w-1/3 flex flex-wrap" @submit.prevent="createComment">
      <label class="form__label" for="author">
        <span class="form__title">Автор</span>
        <input class="form__field" id="author" type="text" v-model="comment.author" required>
      </label>
      <label class="form__label" for="content">
        <span class="form__title">Коментар</span>
        <textarea rows="4" class="form__field" id="content" v-model="comment.content" required/>
      </label>
      <button class="form__btn btn btn-primary ml-auto" type="submit">Створити</button>
      <button @click="cancel" class="form__btn btn btn-danger ml-2">Відміна</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "settings",
    data() {
      return {
        comment: {
          author: '',
          content: '',
        }
      }
    },
    methods: {
      createComment() {
        this.$emit('create-comment', this.comment)
      },
      cancel() {
        this.$emit('cancel')
      },
    }
  };
</script>

<style lang="scss" scoped>
  .bg {
    background: rgba(18, 18, 18, .75);
  }
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
