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
      this.progress = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`
    },
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  data() {
    return {
      progress: '0%',
    }
  },
}
</script>

<template>
  <header
    class="fixed top-0 left-0 w-screen flex h-14 gap-4 items-center px-4 text-white"
  >
    <router-link to="/" class="nav-link"> Accueil </router-link>
    <router-link to="/clicker" class="nav-link"> Bottle Clicker </router-link>
    <router-link to="/EccoTheCaptcha" class="nav-link">
      Ecco The Captcha
    </router-link>
  </header>
</template>

<style scoped>
header {
  transition: backdrop-filter 0.3s;

  &.blurry {
    backdrop-filter: blur(10px);
  }
}

.nav-link {
  &::after {
    content: '';
    display: block;
    width: 5px;
    height: 2px;
    background-color: white;
    transition: width 0.3s;
  }

  &.router-link-active::after {
    width: v-bind(progress);
    min-width: 5px;
  }

  &:hover::after {
    width: 100%;
  }
}
</style>
