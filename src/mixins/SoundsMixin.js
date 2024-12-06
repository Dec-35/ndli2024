export default {
  data() {
    return {
      currentSong: null,
      currentSFX: null,
      globalVolume: 1,
      timeOut: null,
    }
  },
  methods: {
    playAudio(audio, minPitch = 0.5, maxPitch = 2){

      const audioElement = new Audio(audio)
      audioElement.playbackRate = Math.random() * (maxPitch - minPitch) + minPitch
      audioElement.preservesPitch = false
      audioElement.volume = this.globalVolume
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
      this.currentSong.volume = this.globalVolume - 0.2

      this.currentSong.play().then(() => {
        this.currentSong.addEventListener('ended', () => {
          this.playMusic(listOfSongs)
        })
      })
    },

    stopMusic(){
      this.currentSong.pause()
      this.currentSong = null
      this.currentSFX.pause()
      this.currentSFX = null
      clearTimeout(this.timeOut)
    },
    startRandomSFX(listOfSFX){
      const randomIndex = Math.floor(Math.random() * listOfSFX.length)
      const audio = listOfSFX[randomIndex]
      const minPitch = 0.9
      const maxPitch = 1.1

      this.currentSFX = new Audio(audio)
      this.currentSFX.playbackRate = Math.random() * (maxPitch - minPitch) + minPitch
      this.currentSFX.preservesPitch = false
      this.currentSFX.volume = this.globalVolume - 0.2

      this.currentSFX.play().then(() => {
        this.currentSFX.addEventListener('ended', () => {
          const randomTimeOut = Math.random() + 0.5 * 20000
          this.timeOut = setTimeout(() => {
            this.startRandomSFX(listOfSFX)
          }, randomTimeOut)
        })
      })
    }
  }
}