<template>
  <div class="game-captcha">
    <div class="word-to-guess">
      <p>Mot à deviner :</p>
      <div class="letters-container">
        <img
          v-for="(letter, index) in wordLetters"
          :key="index"
          :src="letterImage(letter)"
          alt="letter"
          class="letter-image"
        />
      </div>
    </div>
    <h2 class="game-title">
      Utilisez les touches fléchées pour déplacer le dauphin
    </h2>
    <div class="game-content">
      <div class="game-object" :style="objectStyle"></div>
      <div
        v-for="(target, index) in targets"
        :key="index"
        class="game-target"
        :style="targetStyles[index]"
      ></div>
    </div>

    <!-- Modal for captcha success -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <!-- Texte supplémentaire au-dessus du bouton -->
        <p class="modal-instruction">
          Le Captcha va maintenant être évalué grâce à reCaptcha de Google, vous
          serez ensuite redirigé vers l'accueil.
        </p>
        <div
          ref="recaptcha"
          class="g-recaptcha"
          data-sitekey="6LeU3pMqAAAAAOb2aGRSTd5-_WQm9lEqzqiH7iJ7"
        ></div>

        <button @click="validateCaptcha" class="validate-btn">Continuer</button>
      </div>
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
      targets: [],
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
      wordToGuess: '',
      wordLetters: [],
      letterCount: 0,
      showModal: false, // For controlling modal visibility
      recaptchaSiteKey: '6LeU3pMqAAAAAOb2aGRSTd5-_WQm9lEqzqiH7iJ7', // Your reCAPTCHA site key
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
    letterImage(letter) {
      const letterIndex = letter.charCodeAt(0) - 65
      return this.letterImages[letterIndex]
    },
    moveObject(event) {
      switch (event.key) {
        case 'ArrowUp':
          if (this.position.y > 125) this.position.y -= this.step
          break
        case 'ArrowDown':
          if (this.position.y + this.objectHeight < 300)
            this.position.y += this.step
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
      this.targets = []
      this.wordLetters = []
      for (let i = 0; i < 5; i++) {
        const randomX = Math.floor(Math.random() * (this.maxX - 60))
        const randomY = Math.floor(Math.random() * (250 - 125 + 1)) + 125
        const randomIndex = Math.floor(Math.random() * this.letterImages.length)

        this.targets.push({
          position: { x: randomX, y: randomY },
          image: this.letterImages[randomIndex],
        })

        this.wordLetters.push(String.fromCharCode(65 + randomIndex))
      }

      this.wordToGuess = this.wordLetters.join('')
    },
    checkCollision() {
      const dolphinLeft = this.position.x
      const dolphinRight = this.position.x + this.objectWidth
      const dolphinTop = this.position.y
      const dolphinBottom = this.position.y + this.objectHeight

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
          this.targets.splice(i, 1) // Remove the collected letter
          this.letterCount++

          // Check if all letters have been collected
          if (this.letterCount === 5) {
            // Only show the captcha after all letters are collected
            this.showModal = true
          }
          break
        }
      }
    },
    initializeRecaptcha() {
      // Ensure grecaptcha is ready before executing
      grecaptcha.ready(() => {
        // Initialize reCAPTCHA with your site key
        this.recaptcha = grecaptcha // Store the grecaptcha instance if needed later
      })
    },
    onCaptchaSuccess(response) {
      // Handle successful CAPTCHA verification
      console.log('reCAPTCHA success:', response)
    },
    validateCaptcha() {
      // Récupérer la réponse du reCAPTCHA après l'initialisation
      grecaptcha.ready(() => {
        // Execute the reCAPTCHA
        grecaptcha
          .execute("6LeU3pMqAAAAAOb2aGRSTd5-_WQm9lEqzqiH7iJ7", { action: 'submit' })
          .then((token) => {
            if (token) {
              // Réponse valide, masquer la modale et rediriger
              this.showModal = false
              alert("Captcha validé ! Vous allez être redirigé vers l'accueil.")
              window.location.href = '/' // Redirection vers la page d'accueil
            } else {
              alert('Veuillez valider le captcha pour continuer.')
            }
          })
      })
    },
  },
  mounted() {
    window.addEventListener('keydown', this.moveObject)
    this.getRandomPositions()

    // Dynamically load the Google reCAPTCHA script
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit`
    script.async = true
    script.onload = () => {
      // Ensure reCAPTCHA is initialized after the script has loaded
      grecaptcha.ready(() => {
        this.initializeRecaptcha() // Now this will only be called after the script is ready
      })
    }
    document.body.appendChild(script)
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

.word-to-guess {
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: bold;
}

.letters-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.game-title {
  margin-top: 20px;
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

.letter-image {
  width: 15px;
  height: 33px;
  object-fit: contain;
}

/* Modal Styles */
.modal-instruction {
  margin-top: 10px;
  font-size: 1rem;
  color: #333;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.validate-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.validate-btn:hover {
  background-color: #45a049;
}
</style>
