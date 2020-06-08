<template>
  <main id="main" class="flex items-center justify-center">
    <div class="container flex flex-col items-center justify-center">
      <h2 class="title text-white mb-4">
        Обраний тип -
        <span class="font-bold text-white">{{ $store.state.storageType }}</span>
      </h2>
      <button class="btn btn-primary mb-2" @click="changeStorageType('localStorage')">LocalStorage</button>
      <button class="btn btn-danger" @click="changeStorageType('firebase')">Firebase</button>
    </div>
  </main>
</template>

<script>
  export default {
    name: "settings",
    data() {
      return {}
    },
    methods: {
      changeStorageType(type) {
        this.$store.commit('changeStorageType', type)
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
