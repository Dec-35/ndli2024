<template>
  <div class="game-captcha">
    <h2 class="game-title">
      Utilisez les touches fléchées pour déplacer l'objet
    </h2>
    <div class="game-content">
      <div class="game-object" :style="objectStyle"></div>
      <div class="game-target"></div>
    </div>
  </div>
</template>

<script>
import dolphinFirst from '@/assets/dolphinFirst.jpg'
import dolphinSecond from '@/assets/dolphinSecond.jpg'

export default {
  name: 'GameCaptcha',
  data() {
    return {
      position: { x: 0, y: 0 },
      step: 10, // Distance de déplacement par touche
      imageUrls: [
        dolphinFirst, // Image 1
        dolphinSecond, // Image 2
      ],
      currentImageIndex: 0, // Index de l'image actuelle
      flipImage: false, // Indicateur pour inverser l'image
      maxX: 525, // Limite maximale de X (largeur de l'encadré - largeur de l'image)
      maxY: 225, // Limite maximale de Y (hauteur de l'encadré - hauteur de l'image)
      objectWidth: 75, // Largeur de l'objet
      objectHeight: 75, // Hauteur de l'objet
    }
  },
  computed: {
    objectStyle() {
      return {
        transform: `translate(${this.position.x}px, ${this.position.y}px) ${this.flipImage ? 'scaleX(-1)' : ''}`,
        backgroundImage: `url(${this.imageUrls[this.currentImageIndex]})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: `${this.objectWidth}px`,
        height: `${this.objectHeight}px`,
        borderRadius: '0%',
        transition: 'background-image 0.2s ease-in-out', // Transition fluide entre les images
      }
    },
  },
  methods: {
    moveObject(event) {
      switch (event.key) {
        case 'ArrowUp':
          if (this.position.y > 0) {
            this.position.y -= this.step
          }
          break
        case 'ArrowDown':
          if (this.position.y < this.maxY) {
            this.position.y += this.step
          }
          break
        case 'ArrowLeft':
          if (this.position.x > 0) {
            this.position.x -= this.step
            this.flipImage = true // Inverse l'image lorsqu'on va à gauche
          }
          break
        case 'ArrowRight':
          if (this.position.x < this.maxX) {
            this.position.x += this.step
            this.flipImage = false // Restaure l'image lorsqu'on va à droite
          }
          break
      }

      // Change l'image lorsque l'objet se déplace
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.imageUrls.length
    },
  },
  mounted() {
    // Ajoute un écouteur pour détecter les touches du clavier
    window.addEventListener('keydown', this.moveObject)
  },
  beforeUnmount() {
    // Retire l'écouteur pour éviter les fuites de mémoire
    window.removeEventListener('keydown', this.moveObject)
  },
}
</script>

<style scoped>
.game-captcha {
  text-align: center;
}

.game-title {
  margin-bottom: 20px;
}

.game-content {
  position: relative;
  width: 600px;
  height: 300px;
  margin: 0 auto;
  border: 2px solid #ccc;
  background-color: #f9f9f9;
  overflow: hidden;
}

.game-object {
  position: absolute;
  background-color: transparent;
}

.game-target {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #28a745;
  border-radius: 50%;
}
</style>
