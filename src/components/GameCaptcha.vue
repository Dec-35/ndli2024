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
import dolphinFirst from '@assets/dolphinFirst.jpg'
import dolphinSecond from '@assets/dolphinSecond.jpg'
import letterA from '@assets/letters/A.png'
import letterB from '@assets/letters/B.png'
import letterC from '@assets/letters/C.png'
import letterD from '@assets/letters/D.png'
import letterE from '@assets/letters/E.png'
import letterF from '@assets/letters/F.png'
import letterG from '@assets/letters/G.png'
import letterH from '@assets/letters/H.png'
import letterI from '@assets/letters/I.png'
import letterJ from '@assets/letters/J.png'
import letterK from '@assets/letters/K.png'
import letterL from '@assets/letters/L.png'
import letterM from '@assets/letters/M.png'
import letterN from '@assets/letters/N.png'
import letterO from '@assets/letters/O.png'
import letterP from '@assets/letters/P.png'
import letterQ from '@assets/letters/Q.png'
import letterR from '@assets/letters/R.png'
import letterS from '@assets/letters/S.png'
import letterT from '@assets/letters/T.png'
import letterU from '@assets/letters/U.png'
import letterV from '@assets/letters/V.png'
import letterW from '@assets/letters/W.png'
import letterX from '@assets/letters/X.png'
import letterY from '@assets/letters/Y.png'
import letterZ from '@assets/letters/Z.png'

export default {
  name: 'GameCaptcha',
  data() {
    return {
      position: { x: 0, y: 125 },
      step: 10,
      imageUrls: [dolphinFirst, dolphinSecond],
      currentImageIndex: 0,
      flipImage: false,
      maxX: 525,
      maxY: 225,
      objectWidth: 75,
      objectHeight: 31,
      targetPosition: { x: 0, y: 0 },
      score: 0,
      letterImages: [
        letterA,
        letterB,
        letterC,
        letterD,
        letterE,
        letterF,
        letterG,
        letterH,
        letterI,
        letterJ,
        letterK,
        letterL,
        letterM,
        letterN,
        letterO,
        letterP,
        letterQ,
        letterR,
        letterS,
        letterT,
        letterU,
        letterV,
        letterW,
        letterX,
        letterY,
        letterZ,
      ],
      currentLetterImage: '',
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
        backgroundImage: `url(${this.currentLetterImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
    },
  },
  methods: {
    moveObject(event) {
      switch (event.key) {
        case 'ArrowUp':
          if (this.position.y > 125) {
            this.position.y -= this.step
          }
          break
        case 'ArrowDown':
          if (this.position.y + this.objectHeight < 300) {
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

      // Modifie cette ligne pour obtenir un nombre entre 125 et 300 pour Y
      const randomY = Math.floor(Math.random() * (250 - 125 + 1)) + 125

      this.targetPosition = { x: randomX, y: randomY }

      const randomIndex = Math.floor(Math.random() * this.letterImages.length)
      this.currentLetterImage = this.letterImages[randomIndex]
    },

    checkCollision() {
      const dolphinLeft = this.position.x
      const dolphinRight = this.position.x + this.objectWidth
      const dolphinTop = this.position.y
      const dolphinBottom = this.position.y + this.objectHeight

      const wasteWidth = 31
      const wasteHeight = 75

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
        console.log('Le dauphin a mangé le déchet! Score:', this.score)
        this.getRandomPosition()
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.moveObject)
    this.getRandomPosition()
    window.addEventListener('keydown', this.moveObject)
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
  font-family: 'Press Start 2P', sans-serif;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.7);
  color: #ffc15a;
  -webkit-text-stroke: 0.25px #0000;
}

.game-content {
  position: relative;
  width: 600px;
  height: 300px;
  margin: 0 auto;
  border: 2px solid #ccc;
  background-image: url('@assets/background.png'); /* Ajout de l'image en fond */
  background-size: cover; /* Pour couvrir tout l'espace */
  background-position: center; /* Centre l'image */
  overflow: hidden;
}

.game-object {
  position: absolute;
  background-color: transparent;
}

.game-target {
  position: absolute;
  width: 31px;
  height: 75px;
  border-radius: 50%;
}
</style>
