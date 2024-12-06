export default {
  data() {
    return {
      currentSong: null
    }
  },
  methods: {
    playAudio(audio, minPitch = 0.5, maxPitch = 2){

      const audioElement = new Audio(audio)
      audioElement.playbackRate = Math.random() * (maxPitch - minPitch) + minPitch
      audioElement.preservesPitch = false
      audioElement.play()
    },

    playMusic(listOfSongs){
      // songs are in order of most probable to least probable
      const probaForFirstSong = 0.6
      const randomIndex = Math.random() < probaForFirstSong ? 0 : Math.floor(Math.random() * listOfSongs.length)

      const audio = listOfSongs[randomIndex]
      const minPitch = 0.9
      const maxPitch = 1.1

      this.currentSong = new Audio(audio)
      this.currentSong.playbackRate = Math.random() * (maxPitch - minPitch) + minPitch
      this.currentSong.preservesPitch = false

      this.currentSong.play().then(() => {
        this.currentSong.addEventListener('ended', () => {
          this.playMusic(listOfSongs)
        })
      })
    },

    stopMusic(){
      this.currentSong.pause()
      this.currentSong = null
    }
  }
}