export default {
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('FR-fr', options)
    },
    formatTime(date) {
      const hours = new Date(date).getHours()
      const minutes = new Date(date).getMinutes()
      const seconds = new Date(date).getSeconds()

      return `${hours} heures, ${minutes} minutes et ${seconds} secondes`
    },
  },
}
