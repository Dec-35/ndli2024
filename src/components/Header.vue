<script>
import ThemeButton from "@components/ThemeButton.vue";

export default {
  name: "Header",
  components: {ThemeButton}
}
</script>

<template>
  <header id="pageHeader" class="fixed top-0 left-0 w-screen flex h-16 justify-between items-center px-6">
    <h1 class="font-stylish">
      Nuit de l'info 2024
    </h1>
    <div class="flex gap-4 items-center">
      <ThemeButton />
      <h4>
        Team Heho
      </h4>
    </div>
  </header>
</template>

<style scoped>

</style>