<template>
  <div class="page-container">
    <h1 class="page-title">Ecco the Captcha</h1>
    <div class="button-container">
      <button class="btn" @click="openModal">Règles</button>
      <button class="btn" @click="startGame">Jouer</button>
    </div>
    <div v-if="gameStarted" class="component-container">
      <GameCaptcha />
    </div>
    <div v-else class="image-accueil">
      <img
        src="@/assets/Ecco/DauphinEcranAccueil.png"
        alt="Image dauphin accueil"
      />
    </div>

    <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal">
        <h2>Règles du jeu</h2>
        <p>
          Pour gagner et accéder au jeu, prouvez que vous n'êtes pas un robot en
          récupérant toutes les bouteilles en plastique dans l'ordre indiqué !
        </p>
        <button class="btn-close" @click="closeModal">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
import GameCaptcha from '@components/GameCaptcha.vue'
import sound from '@assets/Ecco/eccoTheSound.mp3'
import SoundsMixin from '@/mixins/SoundsMixin.js'

export default {
  name: 'EccoTheCaptcha',
  mixins: [SoundsMixin],
  data() {
    return {
      isModalVisible: false,
      gameStarted: false,
    }
  },

  methods: {
    openModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
    startGame() {
      this.gameStarted = true
      this.launchMusic()
    },
    launchMusic() {
      this.playAudio(sound, 1, 1)
    },
  },

  components: {
    GameCaptcha,
  },

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
  background-image: url('@/assets/Ecco/fondcapcha.jpg');
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
  color: #ffc15a;
  -webkit-text-stroke: 2px #0000;
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

.image-accueil {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  max-width: 400px;
  height: auto;
}

.image-accueil img {
  width: 100%;
  height: auto;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(114, 104, 104, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: rgb(123, 121, 121);
  padding: 80px;
  width: 600px;
  text-align: center;
  color: #ffffff;
  border: 2px solid #aaa;
}

.modal h2 {
  margin-bottom: 10px;
}

.modal p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.btn-close {
  background-color: #000dff8e;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-close:hover {
  background-color: #ffffff;
  color: #000dff8e;
}
</style>
