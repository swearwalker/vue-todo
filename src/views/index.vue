<template>
  <main id="main">
    <b-container>
      <b-row cols="12" align-v="stretch">
        <b-col v-for="note in notes" :key="note.id" sm="12" md="6" lg="4" class="mb-4">
          <NoteItem :data="note" />
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import NoteItem from '@/components/index/NoteItem';

export default {
  name: 'Index',
  components: {
    NoteItem,
  },
  data() {
    return {};
  },
  computed: {
    createNote() {
      return {
        name: 'create-note',
      };
    },
    notes() {
      return this.$store.state.notes.notes;
    },
  },
  mounted() {
    this.$store.dispatch('notes/getNotes', {
      vm: this,
      type: this.$store.state.storageType,
    });
  },
};
</script>

<style lang="scss" scoped>
.item__title {
  font-size: 1rem;
}
</style>
