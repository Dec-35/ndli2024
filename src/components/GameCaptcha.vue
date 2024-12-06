<template>
  <div class="game-captcha">
    <h2 class="game-title">
      Utilisez les touches fléchées pour déplacer le dauphin
    </h2>
    <div class="word-to-catch">
      <p>{{ wordToCatch }}</p>
      <!-- Affichage du mot à attraper -->
    </div>
    <div class="game-content">
      <div class="game-object" :style="objectStyle"></div>
      <div
        v-for="(target, index) in targets"
        :key="index"
        class="game-target"
        :style="targetStyles[index]"
      ></div>
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
      targets: [], // Stocke les cibles
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
      wordToCatch: '', // Mot à attraper
      lettersCaught: [], // Lettres capturées par le dauphin
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
    targetStyles() {
      return this.targets.map((target) => ({
        left: `${target.position.x}px`,
        top: `${target.position.y}px`,
        backgroundImage: `url(${target.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }))
    },
  },
  methods: {
    // Fonction pour générer un mot aléatoire
    generateRandomWord() {
      const wordLength = 5 // Longueur du mot (par exemple 5 lettres)
      let word = ''
      for (let i = 0; i < wordLength; i++) {
        const randomIndex = Math.floor(Math.random() * this.letterImages.length)
        word += String.fromCharCode(65 + randomIndex) // Génère la lettre (A-Z)
      }
      this.wordToCatch = word
    },

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

    getRandomPositions() {
      this.targets = [] // Réinitialiser les cibles
      for (let i = 0; i < 5; i++) {
        const randomX = Math.floor(Math.random() * (this.maxX - 60))
        const randomY = Math.floor(Math.random() * (250 - 125 + 1)) + 125
        const randomIndex = Math.floor(Math.random() * this.letterImages.length)

        this.targets.push({
          position: { x: randomX, y: randomY },
          image: this.letterImages[randomIndex],
        })
      }
    },

    checkCollision() {
      const dolphinLeft = this.position.x
      const dolphinRight = this.position.x + this.objectWidth
      const dolphinTop = this.position.y
      const dolphinBottom = this.position.y + this.objectHeight

      // Vérifier chaque cible (lettre)
      for (let i = 0; i < this.targets.length; i++) {
        const target = this.targets[i]
        const wasteWidth = 15
        const wasteHeight = 33
        const wasteLeft = target.position.x
        const wasteRight = target.position.x + wasteWidth
        const wasteTop = target.position.y
        const wasteBottom = target.position.y + wasteHeight

        if (
          dolphinRight > wasteLeft &&
          dolphinLeft < wasteRight &&
          dolphinBottom > wasteTop &&
          dolphinTop < wasteBottom
        ) {
          const letter = String.fromCharCode(
            65 + this.letterImages.indexOf(target.image),
          )
          if (letter === this.wordToCatch[this.lettersCaught.length]) {
            this.lettersCaught.push(letter)
            this.targets.splice(i, 1) // Supprimer la cible touchée
            break // Sortir de la boucle une fois qu'une cible est supprimée
          }
        }
      }

      // Vérifier si le mot est complet
      if (this.lettersCaught.join('') === this.wordToCatch) {
        alert('Félicitations ! Vous avez attrapé le mot !')
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.moveObject)
    this.getRandomPositions() // Génère les positions des lettres au démarrage
    this.generateRandomWord() // Génère un mot aléatoire
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

.word-to-catch {
  font-size: 24px;
  margin-bottom: 20px;
}

.game-content {
  position: relative;
  width: 600px;
  height: 300px;
  margin: 0 auto;
  border: 2px solid #ccc;
  background-image: url('@assets/background.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.game-object {
  position: absolute;
  background-color: transparent;
}

.game-target {
  position: absolute;
  width: 15px;
  height: 33px;
  border-radius: 50%;
}
</style>
