<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: { Header },
  mixins: [],
  data() {
    return {}
  },
  computed: {},
  methods: {
    trigger(part) {
      const svgs = document.querySelectorAll('.body-parts svg')
      const target = [...svgs].filter((e) =>
        e.classList.contains('body-part-' + part),
      )
      target[0].style.display = 'block'
    },
    clearTrigger() {
      const svgs = document.querySelectorAll('.body-parts svg')
      Array.from(svgs).forEach((e) => (e.style.display = 'none'))
    },
  },
  mounted() {},
}
</script>

<template>
  <div class="min-h-screen bg-gradient">
    <div
      class="h-screen flex flex-col justify-center items-center bg-water text-white"
    >
      <h1 class="text-4xl font-stylish font-black text-glow mb-4">
        Les océans sont précieux. Protégons-les.
      </h1>
      <p class="text-xs">Scroll down</p>
    </div>
    <div
      class="min-h-screen py-20 content flex justify-center gap-10 items-center"
    >
      <div class="body-parts relative">
        <img
          class="body-img"
          src="@assets/body/human_illustration.png"
          alt="Le corps humain"
        />
        <svg
          class="body-part-brain"
          width="61"
          height="47"
          viewBox="0 0 61 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 41C15.4999 43 24.9999 47 27.5 45.5C30.0001 44 27.746 39.4816 30.4999 39C33.5411 38.4681 32.3833 43.8615 34.9999 45.5C37.6166 47.1385 44.6278 44.3787 49.4999 41C55.7762 36.6476 59.5 34.5 59.5 22.5C59.5 10.5 48 4.5 40.4999 2.99999C32.9999 1.49999 27.5 1.50001 19.4999 2.99999C14.5856 3.92141 1.5 9.50001 1.5 24C1.5 38.5 8.50006 39 12 41Z"
            stroke="black"
            stroke-width="2"
          />
        </svg>
        <svg
          class="body-part-stomach"
          width="80"
          height="82"
          viewBox="0 0 80 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.00003 60.9999C5.60705 54.976 11.8334 53.9999 17.5 52.4999C23.1667 50.9999 30.0419 52.3408 35.5 47.4999C39.8944 43.6025 40.5843 36.9048 41.5 31.9999C41.5 31.9999 35.5 29.5782 35.5 25.9999C35.5 15.9999 35 5.50001 35.5 2.99988C35.8532 1.23382 41.6251 1.50008 42 3C42.5 5.00007 42 13 42 23.5C42 24.6386 44.3303 25.9207 45 24.9999C49 19.4999 55.7865 16.4296 64.5 17.9999C73.2134 19.5702 76.2636 26.818 78 35.4999C80 45.4999 78.8417 49.2998 74.5 57.4999C67.6994 70.3442 56.4137 72.3003 42.5 76.4999C29.9407 80.2907 15 81.9999 9.00003 78.9999C2.37261 75.6862 0.0570471 67.8 3.00003 60.9999Z"
            stroke="black"
            stroke-width="2"
          />
        </svg>
        <svg
          class="body-part-lungs"
          width="120"
          height="111"
          viewBox="0 0 120 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.097 36C54.0834 60.6251 60.0656 85.4797 55.0001 93.5C49.0001 103 15.0422 119.172 4.00017 103C0.586153 98 0.000161648 79.4999 5.50009 57.9999C11 36.4999 21.5001 24.4999 29.5001 17.9999C37.5001 11.4999 51.5 9.99996 51.5 22.5C51.5 23.8808 51.5224 25.2728 51.5645 26.6728M52.097 36C52.097 36 56.1342 33.5895 59 33.5C62.4785 33.3913 67.3534 36.6047 67.3534 36.6047M52.097 36C51.8449 32.8756 51.6572 29.7549 51.5645 26.6728M67.3534 36.6047C65.3193 61.0309 59.4757 85.5455 64.4997 93.5C70.4998 103 104.458 119.172 115.5 103C118.914 98 119.5 79.5 114 58C108.5 36.5 97.9998 24.5 89.9998 18C81.9998 11.5 67.9998 10 67.9999 22.5C67.9999 24.1525 67.9677 25.821 67.9082 27.5M67.3534 36.6047C67.6071 33.5576 67.8016 30.512 67.9082 27.5M67.9082 27.5C67.9082 27.5 65.616 27.1019 65.5 26C64.5 16.5 65.5 7.49999 65.5 4.99996C65.5 0.704195 54.5 0.704195 54.5 4.99996C54.5 11 55.5 15.5 55 25.5C54.9292 26.9159 51.5645 26.6728 51.5645 26.6728"
            stroke="black"
            stroke-width="2"
          />
        </svg>
        <svg
          class="body-part-kidneys"
          width="85"
          height="40"
          viewBox="0 0 85 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4999 18C19.7893 20.6397 20.7773 22.2804 20.4999 25C20.3794 26.1821 20.3635 27.3601 20.3467 28.5M20.4999 18C21.5152 14.2291 26.461 13.9051 26.4999 10C26.5378 6.2089 24.4865 3.48923 20.9999 2.00002C17.1236 0.344332 14.1054 2.31641 10.4999 4.50001C4.59493 8.07633 2.60709 13.1232 1.99994 20C1.4242 26.521 1.31809 32.7486 6.99994 36C10.4063 37.9493 13.5625 38.8941 16.9999 37C20.2347 35.2176 20.2947 32.0431 20.3467 28.5M20.4999 18L26.5 23M62 14.7103C63.0836 15.5577 64.0988 16.5097 64.5 18C65.2107 20.6397 64.2227 22.2804 64.5 25C64.5931 25.9134 64.6238 26.8243 64.6407 27.7172M62 14.7103C60.3419 13.4136 58.5236 12.3617 58.5 10C58.4622 6.2089 60.5134 3.48922 64 2.00001C67.8763 0.344329 70.8946 2.31641 74.5 4.50001C80.405 8.07633 82.3928 13.1232 83 20C83.5757 26.521 83.6818 32.7486 78 36C74.5936 37.9493 71.4374 38.8941 68 37C64.5287 35.0872 64.7134 31.5713 64.6407 27.7172M62 14.7103L55.5 18M55.5 18L44.5 15L41.5 14H39.5M55.5 18L64.6407 27.7172M39.5 14V0.5M39.5 14L39 18.5L26.5 23M26.5 23L20.3467 28.5"
            stroke="black"
            stroke-width="2"
          />
        </svg>
        <svg
          class="body-part-blater"
          width="58"
          height="125"
          viewBox="0 0 58 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5001 1C11.5001 1 13.8011 6.22788 15.5001 11C19.9555 23.5141 16.783 31.5452 13.8458 44.5C11.6728 54.0841 11.5001 58 6.50014 67.5C5.06222 70.2321 2.74892 74.0048 2.0001 77C0.500048 83 1.15394 85.9432 3.50002 90C5.24046 93.0095 6.83869 93.5535 10 95M10 95C10.5 90.5 12.6675 89.7239 16 87.5C22.5 84 36.5 82.5 45 89.5C47.2255 91.3328 48.5 93 48.5 96M10 95C10 99 10.8165 100.624 13.5 103C16.1835 105.376 26 105 26.5 109C27 113 26.219 119.524 27 120.5C27.781 121.476 28.219 122.024 29 123C29.781 123.976 30.3703 121.759 31 120.5C31.5 119.5 31.5 112 32 108.5C32.5 105 42.7673 105.087 45 103C47.2327 100.913 49 99 48.5 96M46 2C46 2 43.699 7.22788 42 12C37.5447 24.5141 40.7171 32.5452 43.6543 45.5C45.8273 55.0841 46.0001 59 51 68.5C52.4379 71.2321 54.7512 75.0048 55.5 78C57.0001 84 56.3462 86.9432 54.0001 91C52.2597 94.0095 51.6613 94.5535 48.5 96"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      </div>
      <div class="text-white desc-content">
        <h2 class="text-2xl font-stylish font-black text-glow">
          Les océans sont essentiels à la vie sur Terre.
        </h2>
        <p class="text-sm mb-4">
          Les océans couvrent 71% de la surface de la Terre et sont essentiels à
          la vie sur notre planète. Ils produisent la moitié de l'oxygène que
          nous respirons, absorbent le dioxyde de carbone de l'atmosphère et
          régulent le climat.
        </p>

        <div class="ocean-hovers flex flex-col gap-4">
          <div
            class="hover-link"
            @mouseleave="clearTrigger"
            @mouseover="trigger('brain')"
          >
            <h4 class="text-right">Cerveau</h4>
            <span class="flex justify-between gap-2">
              <img
                src="@assets/aquatic-file/brainCoralT.png"
                alt="corail cérébral"
              />
              <p class="text-xs text-right">
                Le corail cérébral ressemble à un cerveau humain. Les coraux
                absorbent l'énergie des vagues et réduisent l'impact des
                tempêtes, ouragans et cyclones.
              </p>
            </span>
          </div>
          <div
            class="hover-link"
            @mouseleave="clearTrigger"
            @mouseover="trigger('lungs')"
          >
            <h4>Poumons</h4>
            <span class="flex justify-between gap-2">
              <p class="text-xs">
                Le phytoplancton agit comme des poumons pour la planète. Par la
                photosynthèse, il produit plus de 50 % de l'oxygène terrestre
                tout en absorbant le dioxyde de carbone, jouant un rôle vital
                dans le maintien de l'équilibre atmosphérique.
              </p>
              <img
                src="@assets/aquatic-file/phytoplanktonT.png"
                alt="Phytoplancton"
              />
            </span>
          </div>
          <div
            class="hover-link"
            @mouseleave="clearTrigger"
            @mouseover="trigger('stomach')"
          >
            <h4 class="text-right">Estomac</h4>
            <span class="flex justify-between gap-2">
              <img
                src="@assets/aquatic-file/starfishT.png"
                alt="corail cérébral"
              />
              <p class="text-xs text-right">
                L'étoile de mer déploie son estomac à l'extérieur de son corps
                pour digérer ses proies. Cette capacité unique lui permet de
                consommer des proies plus grandes qu'elle-même, comme des
                mollusques.
              </p>
            </span>
          </div>
          <div
            class="hover-link"
            @mouseleave="clearTrigger"
            @mouseover="trigger('kidneys')"
          >
            <h4>Reins</h4>
            <span class="flex justify-between gap-2">
              <p class="text-xs">
                Les huîtres fonctionnent comme des reins pour l'océan. Elles
                filtrent les particules, les polluants et les excès de
                nutriments, purifiant ainsi l'eau et maintenant l'équilibre des
                écosystèmes marins.
              </p>
              <img src="@assets/aquatic-file/oysterT.png" alt="Phytoplancton" />
            </span>
          </div>
          <div
            class="hover-link"
            @mouseleave="clearTrigger"
            @mouseover="trigger('blater')"
          >
            <h4 class="text-right">Vessie</h4>
            <span class="flex justify-between gap-2">
              <img
                src="@assets/aquatic-file/jellyFishT.png"
                alt="corail cérébral"
              />
              <p class="text-xs text-right">
                Les méduses utilisent leur cavité centrale pour stocker l'eau
                qu'elles propulsent afin de se déplacer. Cette cavité joue un
                rôle de réservoir temporaire, aidant leur locomotion et leur
                survie.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gradient {
  background-image: linear-gradient(180deg, #02767a, #05202e);
}

.bg-water {
  /*background-color: #05202E;*/
  background-image: url('@assets/waterSurface.jpg');
  background-size: 2000px;
  background-position: 0 -300px;
  background-repeat: repeat-x;
}

.text-glow {
  text-shadow: 0 0 50px var(--glow-color);
}

.content {
  box-shadow: -1px 0 60px 4px #005052;

  .desc-content {
    width: 550px;
  }
}

.body-img {
  width: 250px;
}

.hover-link {
  padding: 5px 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.1s;

  &:hover {
    background-color: rgba(0, 111, 95, 0.63);
  }

  img {
    width: 3rem;
  }
}

.body-parts svg {
  filter: drop-shadow(1px 1px 5px rgb(255, 245, 108));
  position: absolute;
  overflow: visible;
  display: none;

  &:nth-of-type(1) {
    top: 15px;
    left: 95px;
    scale: 0.85;
  }

  &:nth-of-type(2) {
    top: 190px;
    left: 95px;
    scale: 0.8;
  }

  &:nth-of-type(3) {
    top: 120px;
    left: 67px;
    scale: 0.8;
  }

  &:nth-of-type(4) {
    top: 245px;
    left: 83px;
    scale: 0.8;
  }

  &:nth-of-type(5) {
    top: 258px;
    left: 97px;
    scale: 0.83;
  }

  path {
    stroke: white;
    stroke-width: 3px;
  }
}
</style>
