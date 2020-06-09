<template>
  <div class="bg fixed inset-0 z-50 w-full h-full flex items-center justify-center" @click.self="cancel">
    <form class="form bg-white rounded-lg shadow-lg p-4 w-5/6 md:w-1/3 flex flex-wrap" @submit.prevent="createComment">
      <label class="form__label" for="author">
        <span class="form__title">Автор</span>
        <input id="author" v-model.trim="$v.author.$model" class="form__field" type="text" />
        <div v-if="!$v.author.required" class="error">Field is required</div>
        <div v-if="!$v.author.fullName" class="error">Test is required</div>
      </label>
      <label class="form__label" for="content">
        <span class="form__title">Коментар</span>
        <textarea id="content" v-model.trim="$v.content.$model" rows="4" class="form__field" />
        <div v-if="!$v.content.required" class="error">Field is required</div>
      </label>
      <button :disabled="$v.$invalid" class="form__btn btn btn-primary ml-auto" type="submit">Створити</button>
      <button class="form__btn btn btn-danger ml-2" @click="cancel">Відміна</button>
    </form>
  </div>
</template>

<script>
import { required, helpers } from 'vuelidate/lib/validators';
const fullName = helpers.regex('fullName', /^([A-Z][a-z]+(?=\s[A-Z])(?:\s[A-Z][a-z]+)+)$/);
export default {
  name: 'CreateComponentModal',
  data() {
    return {
      author: '',
      content: '',
    };
  },
  validations: {
    author: {
      required,
      fullName,
    },
    content: {
      required,
    },
  },
  methods: {
    createComment() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit('create-comment', {
          author: this.author,
          content: this.content,
        });
      }
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background: rgba(18, 18, 18, 0.75);
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
