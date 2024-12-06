<script>
import Upgrade from '@/components/Clicker/Upgrade.vue'
import lanceBouteilleImage from '@assets/clicker/pictos/lanceBouteille.png';
import embaucherPote from '@assets/clicker/pictos/embaucherPote.png';
import viderVoiture from '@assets/clicker/pictos/viderVoiture.png';
import dechargerCamion from '@/assets/clicker/pictos/dechargerCamion.png';
import larguerAvion from '@/assets/clicker/pictos/larguerAvion.png';

export default {
  name: 'Clicker',
  mixins: [],
  data() {
    return {
      score: 0,
      clickPower: 1,
      autoPower: -1,
      bottlePosition: { top: '50%', left: '50%' },
      bottleMinusPosition: { top: '50%', left: '50%' },
      gameInterval: null,
      interval: 1000,
      circleMinusDisplay: false,
      bottleRotation: 0,
    }
  },
  components: {
    Upgrade,
  },
  computed: {
    upgrades() {
      return {
        'Lancé de bouteille': {
          name: 'Lancé de bouteille',
          price: 20,
          description: 'Augmente le nombre de bouteille générée par click de 1',
          image: lanceBouteilleImage,
          quantity: 0,
          manualPowerUpgrade: 1,
        },
        'Embaucher un pote': {
          name: 'Embaucher un pote',
          price: 100,
          description:
            'Augmente le nombre de bouteille générée automatiquement de 1 par seconde',
          image: embaucherPote,
          quantity: 0,
          autoPowerUpgrade: 1,
        },
        'Vider la voiture': {
          name: 'Vider la voiture',
          price: 5,
          description:
            'Augmente le nombre de bouteille générée automatiquement de 10 par seconde',
          image: viderVoiture,
          quantity: 0,
          autoPowerUpgrade: 10,
        },
        'Décharger un camion': {
          name: 'Décharger un camion',
          price: 1000,
          description:
            'Augmente le nombre de bouteille générée automatiquement de 100 par seconde',
          image: dechargerCamion,
          quantity: 0,
          autoPowerUpgrade: 100,
        },
        'Larguer un container par avion': {
          name: 'Larguer un container par avion',
          price: 2,
          description:
            'Augmente le nombre de bouteille générée automatiquement de 1000 par seconde',
          image: larguerAvion,
          quantity: 0,
          autoPowerUpgrade: 1000,
        },
      }
    },
  },
  methods: {
    moveCircle() {
      const x = Math.random() * 80 // Position horizontale (80% max)
      const y = Math.random() * 80 // Position verticale (80% max)
      this.bottlePosition = { top: `${y}%`, left: `${x}%` }
      if (!this.circleMinusDisplay) {
        this.circleMinusDisplay = true
      }
      this.bottleRotation = x % 360 + 'deg'

    },
    moveMinusCircle() {
      this.bottleMinusPosition = this.bottlePosition
    },
    circleClicked() {
      const x = Math.random()
      if (x < 0.2) {
        this.moveMinusCircle()
        this.moveCircle() // Déplace immédiatement le cercle
      }
      this.score += this.clickPower
    },
    circleMinusClicked() {
      this.score -= this.clickPower
    },

    buyUpgrade(name, price) {
      if (this.score < price) return
      this.upgrades[name].quantity++
      this.score -= price

      if (this.upgrades[name].manualPowerUpgrade) {
        this.clickPower += this.upgrades[name].manualPowerUpgrade
      }
      if (this.upgrades[name].autoPowerUpgrade) {
        this.autoPower <= 0
          ? this.autoPower = this.upgrades[name].autoPowerUpgrade
          : (this.autoPower += this.upgrades[name].autoPowerUpgrade)
      }

      this.upgrades[name].price = Math.round(this.upgrades[name].price * 1.2)
    },
    updateIntevral(){
      this.gameInterval = setTimeout(() => {
        console.log(this.interval)
      if (this.autoPower >= 1) {
        this.interval = Math.floor(1000 / this.autoPower) > 50 ? Math.floor(1000 / this.autoPower) : 50  
        console.log(this.interval, 'zizi')
        this.score += this.interval <= 50 ? Math.round(this.autoPower/(1000/this.interval)) : 1
      }
      this.updateIntevral()
    }, this.interval)
    }
  },
  mounted() {
    this.updateIntevral()
  },
}
</script>

<template>
  <div class="h-screen flex overflow-hidden select-none pt-14">
    <div class="content-color w-[65%]">
      <div class="header-color w-full h-[50px] px-10 flex justify-between">
        <!-- Header -->
        <button>Aaaa</button>
        <h4 class="p-2">Polluons l'océan !</h4>
        <button>Aaaa</button>
      </div>
      <div class="flex-grow h-full ">
        <!-- Partie centrale avec bouton et autres conneries -->
        <div class="relative flex flex-grow h-full justify-center items-center">
          <div
            v-if="circleMinusDisplay"
            class="circle-minus z-10"
            :style="{
              top: bottleMinusPosition.top,
              left: bottleMinusPosition.left,
            }"
            @click="circleMinusClicked"
          ></div>
          <div
            class="circle z-20"
            :style="{ top: bottlePosition.top, left: bottlePosition.left }"
            @click="circleClicked"
          ></div>
          <div class="group flex relative">
            <span class="text-9xl text-center font-black">{{ score.toString(16) }}
              <p class = "text-center text-2xl font-bold" v-if="score===0">Bouteille à la mer</p>
              <p class = "text-center text-2xl font-bold" v-else>Bouteilles à la mer</p>
            </span>
            
            <span
              class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
              >{{ score }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="upgrades-color w-[35%]">
      <!-- Panneau latéral avec les upgrades -->
      <div
        class="header-color w-full h-[50px] px-10 flex justify-center items-center"
      >
        <!-- Header upgrades -->
        <h1>Upgrades</h1>
      </div>
      <div class="flex flex-col p-3 gap-3 overflow-y-auto upgrades-list">
        <div v-for="upgrade in upgrades" :key="upgrade.name">
          <Upgrade
            class="cursor-pointer"
            :name="upgrade.name"
            :price="upgrade.price"
            :description="upgrade.description"
            :image="upgrade.image"
            :quantity="upgrade.quantity"
            @click="buyUpgrade(upgrade.name, upgrade.price)"
          />
        </div>
        <!-- Contenu (liste upgrades) -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle {
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url('@assets/clicker/plastic-bottle.png');
  background-size: cover;
  rotate: v-bind(bottleRotation);
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));

  cursor: pointer;
}

.circle-minus {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: green;
  cursor: pointer;
}

.header-color {
  background-color: #2c3e50;
  color: white;
}

.content-color {
  background-color: #34495e;
  background-image: url('@assets/waterSurface.jpg');
  background-size: 2000px;
  background-position: -250px -280px;
  color: white;
}

.upgrades-color {
  background-color: #253544;
  border-left: 2px solid #2c3e50;
}

:deep(.upgrade-card){
  background-color: #34495e;
  color: white;
}

.upgrades-list{
  height: calc(100% - 50px);
}

</style>
