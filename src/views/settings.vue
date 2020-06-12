<template>
  <main id="main">
    <b-container>
      <b-row>
        <b-col>
          <b-form-select
            v-model="$store.state.storageType"
            :options="options"
            @change="changeStorageType"
          ></b-form-select>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Settings',
  components: {},
  data() {
    return {
      options: ['firebase', 'localStorage'],
    };
  },
  computed: {
    type() {
      return this.$store.state.storageType;
    },
  },
  methods: {
    changeStorageType(selected) {
      this.$store.commit('changeStorageType', selected);
    },
  },
};
</script>

<style lang="scss" scoped></style>
