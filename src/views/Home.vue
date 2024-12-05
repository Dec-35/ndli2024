<script>

export default {
  name: "Home",
  mixins: [],
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  mounted() {

  }
}
</script>

<template>
<div class="min-h-screen bg-gradient">
  <div class="h-screen flex flex-col justify-center items-center bg-water text-white">
    <h1 class="text-4xl font-stylish font-black text-glow mb-4">
      Les océans sont précieux. Protégons-les.
    </h1>
    <p class="text-xs">
      Scroll down
    </p>
  </div>
  <div class="min-h-screen py-20 content flex justify-center gap-10 items-center">
    <img class="body-img" src="@assets/human_illustration.png" alt="Le corps humain">
    <div class="text-white desc-content">
      <h2 class="text-2xl font-stylish font-black text-glow">
        Les océans sont essentiels à la vie sur Terre.
      </h2>
      <p class="text-sm mb-4">
        Les océans couvrent 71% de la surface de la Terre et sont essentiels à la vie sur notre planète. Ils produisent la moitié de l'oxygène que nous respirons, absorbent le dioxyde de carbone de l'atmosphère et régulent le climat.
      </p>

      <div class="ocean-hovers flex flex-col gap-4">
        <div class="hover-link">
          <h4 class="text-right">Cerveau</h4>
          <span class="flex justify-between gap-2">
            <img src="@assets/aquatic-file/brainCoralT.png"  alt="corail cérébral"/>
            <p class="text-xs text-right">
              Le corail cérébral ressemble à un cerveau humain. Les coraux absorbent l'énergie des vagues et réduisent l'impact des tempêtes, ouragans et cyclones.
            </p>
          </span>
        </div>
        <div class="hover-link">
          <h4>Poumons</h4>
          <span class="flex justify-between gap-2">
            <p class="text-xs">
              Le phytoplancton agit comme des poumons pour la planète. Par la photosynthèse, il produit plus de 50 % de l'oxygène terrestre tout en absorbant le dioxyde de carbone, jouant un rôle vital dans le maintien de l'équilibre atmosphérique.
            </p>
            <img src="@assets/aquatic-file/phytoplanktonT.png" alt="Phytoplancton">
          </span>
        </div>
        <div class="hover-link">
          <h4 class="text-right">Estomac</h4>
          <span class="flex justify-between gap-2">
            <img src="@assets/aquatic-file/starfishT.png"  alt="corail cérébral"/>
            <p class="text-xs text-right">
              L'étoile de mer déploie son estomac à l'extérieur de son corps pour digérer ses proies. Cette capacité unique lui permet de consommer des proies plus grandes qu'elle-même, comme des mollusques.            </p>
          </span>
        </div>
        <div class="hover-link">
          <h4>Reins</h4>
          <span class="flex justify-between gap-2">
            <p class="text-xs">
              Les huîtres fonctionnent comme des reins pour l'océan. Elles filtrent les particules, les polluants et les excès de nutriments, purifiant ainsi l'eau et maintenant l'équilibre des écosystèmes marins.            </p>
            <img src="@assets/aquatic-file/oysterT.png" alt="Phytoplancton">
          </span>
        </div>
        <div class="hover-link">
          <h4 class="text-right">Vessie</h4>
          <span class="flex justify-between gap-2">
            <img src="@assets/aquatic-file/jellyFishT.png"  alt="corail cérébral"/>
            <p class="text-xs text-right">
              Les méduses utilisent leur cavité centrale pour stocker l'eau qu'elles propulsent afin de se déplacer. Cette cavité joue un rôle de réservoir temporaire, aidant leur locomotion et leur survie.            </p>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.bg-gradient{
  background-image: linear-gradient(180deg, #02767a, #05202E);
}

.bg-water{
  /*background-color: #05202E;*/
  background-image: url('@assets/waterSurface.jpg');
  background-size: 2000px;
  background-position: 0 -300px;
  background-repeat: repeat-x;
}

.text-glow{
  text-shadow: 0 0 50px var(--glow-color);
}

.content{
  box-shadow: -1px 0 60px 4px #005052;

  .desc-content{
    width: 550px;
  }
}

.body-img{
  width: 250px;
}

.hover-link{
  padding: 5px 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.1s;

  &:hover{
    background-color: rgba(0, 111, 95, 0.63);
  }

  img{
    width: 3rem;
    margin-right: 1rem;
  }
}
</style>