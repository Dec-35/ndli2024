<script>
import ThemeButton from '@components/ThemeButton.vue'

export default {
  name: 'Header',
  components: { ThemeButton },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const header = document.querySelector('header')
      if (window.scrollY > 20) {
        header.classList.add('blurry')
      } else {
        header.classList.remove('blurry')
      }
    }
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<template>
  <header
    class="fixed top-0 left-0 w-screen flex h-14 justify-between items-center px-4 text-white"
  >
    <router-link to="/">
      Exemple de défi
    </router-link>
  </header>
</template>

<style scoped>
header {
  transition: backdrop-filter 0.3s;

  &.blurry{
    backdrop-filter: blur(10px);
  }
}
</style>
