<template>
  <header id="header">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav class="nav">
        <b-nav-item class="nav__link" to="/">Головна</b-nav-item>
        <b-nav-item class="nav__link nav__link-create" to="/create-note" right>
          <b-icon icon="file-plus"></b-icon>
        </b-nav-item>
        <b-nav-item class="nav__link" to="/settings">
          <b-icon icon="gear"></b-icon>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
}
.nav {
  width: 100%;
}
.nav__link-create {
  margin-left: auto;
}
</style>
