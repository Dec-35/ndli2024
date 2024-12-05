<script>
import dateMixin from '@mixins/dateMixin.js'

export default {
  name: 'Home',
  mixins: [dateMixin],
  data() {
    return {
      startDate: new Date('2024-12-05T15:39:00'),
      endDate: new Date('2024-12-06T07:04:00'),
      timeLeft: 0,
      timeUntil: 0,
    }
  },
  computed: {
    hasNotYetStarted() {
      return new Date() < this.startDate
    },
  },
  methods: {
    calculateTimeUntil() {
      const diff = this.startDate - new Date()
      return this.formatTime(new Date(diff))
    },
    calculateTimeLeft() {
      const diff = this.endDate - new Date()
      return this.formatTime(new Date(diff))
    },
  },
  mounted() {
    this.timeUntil = this.calculateTimeUntil()
    this.timeLeft = this.calculateTimeLeft()
    setInterval(() => {
      this.timeUntil = this.calculateTimeUntil()
      this.timeLeft = this.calculateTimeLeft()
    }, 1000)
  },
}
</script>

<template>
  <div class="h-screen flex justify-center items-center pb-24">
    <div class="font-glow">
      <div v-if="hasNotYetStarted">
        <h2>Début dans {{ timeUntil }}</h2>
      </div>
      <div v-else>
        <h1 class="text-center">La nuit de l'info a commencé !</h1>
        <h2>Fin dans {{ timeLeft }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
