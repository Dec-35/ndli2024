<script>
export default {
  name: 'Upgrade',
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
}
</script>

<template>
  <div class="bg-yellow-500 p-2 rounded-md flex gap-3">
    <div>
      <img :src="image" alt="UpgradeLogo" />
    </div>
    <div>
      <h2 class="text-base ">{{ name }} (x{{ quantity }})</h2>
      <p class="text-xs">{{ description }}</p>
      <p>Prix : {{ price }} bouteilles</p>
    </div>
  </div>
</template>
