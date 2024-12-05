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
  <div class="h-screen flex justify-center items-center bg-water">
    <h1 class="text-4xl font-stylish font-black text-white text-glow">
      Les océans sont précieux. Protégons-les.
    </h1>
  </div>
  <div class="h-screen content"></div>
</div>
</template>

<style scoped>
.bg-gradient{
  background-color: #013240;
  background-image: linear-gradient(180deg, #013240, #05202E);
}

.bg-water{
  background-color: #05202E;
  background-image: url('@assets/waterSurface.jpg');
  background-size: cover;
}

.text-glow{
  text-shadow: 0 0 50px var(--glow-color);
}

.content{
  box-shadow: -1px 0 40px 0 rgba(2, 34, 44, 0.9);
}
</style>