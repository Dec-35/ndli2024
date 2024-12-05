<script>
export default {
  name: 'ThemeButton',
  methods: {
    changeTheme() {
      document.body.classList.toggle('dark')
    },
  },
}
</script>

<template>
  <button @click="changeTheme" class="themeButton"></button>
</template>

<style scoped lang="less">
.themeButton {
  height: 1rem;
  width: 1rem;
  background-color: #000;
  border-radius: 50%;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
}

.dark .themeButton {
  background-color: #fff;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
  }
}
</style>
