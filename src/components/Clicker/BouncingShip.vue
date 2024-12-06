<script>
export default {
  name: 'BouncingShip',
  mounted() {
    this.init()
  },
  data(){
    return {
      x_incr: 1,
      y_incr: 1,
    }
  },
  emits: ['click'],
  methods: {
    init() {
      this.$refs.bato.style.position = 'absolute'
      this.$refs.bato.style.top = `${this.x_incr}px`
      this.$refs.bato.style.left = `${this.y_incr}px`

      // animate the logo
      requestAnimationFrame(this.animate)
    },

    handle_collision() {
      const boundingBox = document.getElementById('batoContainer')

      const dvd_height = this.$refs.bato.offsetHeight
      const dvd_width = this.$refs.bato.offsetWidth
      const dvd_top = this.$refs.bato.offsetTop
      const dvd_left = this.$refs.bato.offsetLeft
      const win_height = boundingBox.offsetHeight
      const win_width = boundingBox.offsetWidth

      if (dvd_left <= 0 || dvd_left + dvd_width >= win_width) {
        // reverse x_incr
        this.x_incr = -this.x_incr
      }

      if (dvd_top <= 0 || dvd_top + dvd_height >= win_height) {
        // reverse y_incr
        this.y_incr = -this.y_incr
      }
    },

    animate() {
      this.handle_collision()
      this.$refs.bato.style.top = `${this.$refs.bato.offsetTop + this.y_incr}px`
      this.$refs.bato.style.left = `${this.$refs.bato.offsetLeft + this.x_incr}px`

      requestAnimationFrame(this.animate)
    },
    emitClick() {
      this.$emit('click')
    }
  }

}
</script>

<template>
  <img @click="emitClick" src="@assets/clicker/pictos/batooo4.png" alt="Ne pas toucher" ref="bato" class="w-20 h-20">
</template>

<style scoped>

</style>