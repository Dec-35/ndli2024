<template>
  <div class="page-container">
    <h1 class="page-title">Ecco the Captcha</h1>
    <div class="button-container">
      <button class="btn">Règles</button>
      <button class="btn">Jouer</button>
    </div>
    <div class="component-container">
      <GameCaptcha />
    </div>
  </div>
</template>

<script>
import GameCaptcha from '@components/GameCaptcha.vue'

export default {
  name: 'EccoTheCaptcha',
  data() {
    return {}
  },
  components: {
    GameCaptcha,
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-image: url('@/assets/fondcapcha.jpg');
  background-repeat: repeat;
  background-size: auto;
  background-color: #001f3f;
  color: #ffffff;
}

.page-title {
  margin-top: 0;
  font-size: 5rem;
  text-align: center;
  font-family: 'Press Start 2P', sans-serif;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.7);
  color: #000dff8e;
  -webkit-text-stroke: 2px #ffffff;
  text-stroke: 2px #ffffff;
}

.button-container {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

.btn {
  padding: 20px 40px;
  font-size: 1.2rem;
  background-color: #000dff8e;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #ffffff;
  color: #000dff8e;
}

.component-container {
  margin-top: 50px;
  width: 90%;
  max-width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rectangle {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border: 2px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #001f3f;
  font-size: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
