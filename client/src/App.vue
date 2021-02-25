<template>
  <div id="app">
    <Nav />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav
  }
}
</script>
<style scoped>
</style>