<script>
import Header from '@components/Header.vue';

export default {
  name: "App",
  components: {
    Header
  }
}
</script>

<template>
  <Header />

  <main class="mt-16 p-4">
    <router-view />
  </main>
</template>

<style scoped>

</style>
