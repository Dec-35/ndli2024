<template>
  <div class="page-container">
    <!-- Titre de la page -->
    <h1 class="page-title">Ecco the Captcha</h1>
    
    <!-- Conteneur pour le composant rectangulaire -->
    <div class="component-container">
      <div class="rectangle">Contenu du composant rectangulaire</div>
    </div>
  </div>
</template>

<script>
// import RectangleComponent from './components/GameCapcha.vue';

export default {
  name: 'EccoTheCaptcha',
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
/* Conteneur principal */
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  /* Arrière-plan avec motif répétitif */
  background-image: url('@/assets/fondcapcha.jpg'); /* Chemin de l'image */
  background-repeat: repeat; /* Répéter le motif */
  background-size: auto; /* Utilisez la taille originale de l'image */
  background-color: #001f3f; /* Couleur de fond au cas où l'image ne charge pas */
  color: #ffffff; /* Couleur du texte */
}

/* Titre */
.page-title {
  margin: 20px 0;
  font-size: 3rem;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Ombre pour le contraste */
}

/* Conteneur du composant */
.component-container {
  margin-top: 20px;
  width: 90%; /* Prend plus de largeur */
  max-width: 800px; /* Limite la largeur */
  height: 300px; /* Augmenter la hauteur */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Rectangle */
.rectangle {
  width: 100%;
  height: 100%;
  background-color: #ffffff; /* Blanc */
  border: 2px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #001f3f; /* Texte bleu foncé */
  font-size: 1.5rem; /* Texte plus grand */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre douce */
}
</style>
