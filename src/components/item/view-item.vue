<template>
  <div class="item w-full md:w-1/2 px-2 my-4">
    <div
      class="item__wrapper bg-gradient-light px-4 pt-16 pb-4 rounded-lg flex flex-col items-start justify-end shadow-lg relative"
    >
      <div class="item__actions actions absolute top-0 left-0 right-0 p-4 flex items-center">
        <span class="actions__comments text-sm font-medium">{{ note.comments.length }}</span>
        <router-link :to="editNote">E</router-link>
        <button class="actions__delete" @click="deleteNote">D</button>
      </div>
      <h1 class="font-bold">{{ note.name }}</h1>
      <p class="item__content text-sm mb-4">{{ note.content }}</p>
      <ul class="item__list comments w-full">
        <li class="item w-full p-2 mb-2 rounded-lg shadow cursor-pointer" @click="showModal">
          <h3 class="item__author font-bold text-sm text-primary text-center">Додати коментар</h3>
        </li>
        <ViewComment v-for="comment in note.comments" :key="comment.id" :data="comment" />
      </ul>
    </div>
    <CreateCommentModal v-if="showingModal" @create-comment="createComment" @cancel="hideModal" />
  </div>
</template>

<script>
import ViewComment from '@/components/item/view-comment';
import CreateCommentModal from '@/components/common/create-comment-modal';
export default {
  name: 'ViewItem',
  components: {
    ViewComment,
    CreateCommentModal,
  },
  data() {
    return {
      showingModal: false,
      comment: {
        author: '',
        content: '',
      },
    };
  },
  computed: {
    note() {
      return this.$store.state.note;
    },
    editNote() {
      return {
        name: 'edit',
        params: {
          id: this.note.id,
        },
      };
    },
    viewNote() {
      return {
        name: 'view',
        params: {
          id: this.note.id,
        },
      };
    },
  },
  methods: {
    showModal() {
      this.showingModal = true;
    },
    hideModal() {
      this.showingModal = false;
    },
    createComment(comment) {
      this.hideModal();
      comment.created_at = Date.now();
      this.$store.dispatch('createComment', comment);
    },
    deleteNote() {
      this.$store.dispatch('deleteNote', this.$route.params.id).then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
