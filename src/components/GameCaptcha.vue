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
  export default {
    name: 'GameCaptcha',
    data() {
      return {
        position: { x: 0, y: 0 },
        step: 10, // Distance de déplacement par touche
        imageUrls: [
          'https://cdn.discordapp.com/attachments/1314317118950473789/1314321320539983982/image-removebg-preview.png?ex=6753589d&is=6752071d&hm=487b47878b6b7e5e40055a6177a1905ce9e71f5104873d62a133a0cbfbd6f48d&', // Image 1
          'https://cdn.discordapp.com/attachments/1314317118950473789/1314325291589697577/image-removebg-preview_3.png?ex=67535c50&is=67520ad0&hm=cea63d4b74ab949025c676afca17847532278de81f992780cfa7e68c364cf00a&', // Remplacez par la deuxième image
        ],
        currentImageIndex: 0, // Index de l'image actuelle
        flipImage: false, // Indicateur pour inverser l'image
      }
    },
    computed: {
      objectStyle() {
        return {
          transform: `translate(${this.position.x}px, ${this.position.y}px) ${this.flipImage ? 'scaleX(-1)' : ''}`,
          backgroundImage: `url(${this.imageUrls[this.currentImageIndex]})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '75px',
          height: '75px',
          borderRadius: '0%',
          transition: 'background-image 0.2s ease-in-out', // Transition fluide entre les images
        }
      },
    },
    methods: {
      moveObject(event) {
        switch (event.key) {
          case 'ArrowUp':
            this.position.y -= this.step
            break
          case 'ArrowDown':
            this.position.y += this.step
            break
          case 'ArrowLeft':
            this.position.x -= this.step
            this.flipImage = true // Inverse l'image lorsqu'on va à gauche
            break
          case 'ArrowRight':
            this.position.x += this.step
            this.flipImage = false // Restaure l'image lorsqu'on va à droite
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
  