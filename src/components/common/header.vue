<template>
  <header id="header-section" class="fixed z-40 top-0 left-0 right-0 bg-white shadow py-2">
    <div class="container flex items-center justify-between">
      <router-link to="/" class="home font-bold uppercase">Замітки</router-link>
      <router-link to="/create" class="home font-bold uppercase">
        <font-awesome-icon :icon="['fas', 'user']" />
      </router-link>
      <router-link to="/settings" class="home font-bold uppercase">Налашт</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
