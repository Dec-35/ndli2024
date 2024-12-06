<template>
  <div class="game-captcha">
    <h2 class="game-title">
      Utilisez les touches fléchées pour déplacer le dauphin
    </h2>
    <div class="game-content">
      <div class="game-object" :style="objectStyle"></div>
      <div class="game-target" :style="targetStyle"></div>
    </div>
    <div class="score">
      <p>Score: {{ score }}</p>
    </div>
  </div>
</template>

<script>
import dolphinFirst from '@/assets/dolphinFirst.jpg'
import dolphinSecond from '@/assets/dolphinSecond.jpg'
import wasteImage from '@/assets/waste.jpg'

export default {
  name: 'GameCaptcha',
  data() {
    return {
      position: { x: 0, y: 0 },
      step: 10,
      imageUrls: [
        dolphinFirst,
        dolphinSecond,
      ],
      currentImageIndex: 0,
      flipImage: false,
      maxX: 525,
      maxY: 225,
      objectWidth: 75,
      objectHeight: 31,
      targetPosition: { x: 0, y: 0 },
      score: 0,
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
        transition: 'background-image 0.2s ease-in-out',
      }
    },
    targetStyle() {
      return {
        left: `${this.targetPosition.x}px`,
        top: `${this.targetPosition.y}px`,
        backgroundImage: `url(${wasteImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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
            this.flipImage = true
          }
          break
        case 'ArrowRight':
          if (this.position.x < this.maxX) {
            this.position.x += this.step
            this.flipImage = false
          }
          break
      }

      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.imageUrls.length

      this.checkCollision()
    },

    getRandomPosition() {
      const randomX = Math.floor(Math.random() * (this.maxX - 60))
      const randomY = Math.floor(Math.random() * (this.maxY - 60))
      this.targetPosition = { x: randomX, y: randomY }
    },

    checkCollision() {
      const dolphinLeft = this.position.x
      const dolphinRight = this.position.x + this.objectWidth
      const dolphinTop = this.position.y
      const dolphinBottom = this.position.y + this.objectHeight

      const wasteWidth = 75
      const wasteHeight = 31

      const wasteLeft = this.targetPosition.x
      const wasteRight = this.targetPosition.x + wasteWidth
      const wasteTop = this.targetPosition.y
      const wasteBottom = this.targetPosition.y + wasteHeight

      if (
        dolphinRight > wasteLeft &&
        dolphinLeft < wasteRight &&
        dolphinBottom > wasteTop &&
        dolphinTop < wasteBottom
      ) {
        this.score++
        this.getRandomPosition()
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.moveObject)
    this.getRandomPosition()
  },
  beforeUnmount() {
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
  width: 75px;
  height: 31px;
  border-radius: 50%;
}
</style>
