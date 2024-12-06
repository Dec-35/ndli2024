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
  <div class="upgrade-card p-2 rounded-md flex gap-3">
    <div>
      <img :src="image" alt="UpgradeLogo" class="object-cover w-20" />
    </div>
    <div>
      <h2 class="text-base ">{{ name }} (x{{ quantity }})</h2>
      <p class="text-xs">{{ description }}</p>
      <h4 class="mt-2">Prix : {{ price }} bouteilles</h4>
    </div>
  </div>
</template>
