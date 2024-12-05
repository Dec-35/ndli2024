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

      <div>

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
    max-width: 40%;
  }
}

.body-img{
  width: 250px;

}
</style>