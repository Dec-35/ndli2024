<script>
export default {
  name: 'modal',
  data() {
    return {
      display: false
    }
  },
  emits: ['close'],
  methods: {
    close() {
      this.display = false;
      this.$emit('close')
    },
    show() {
      this.display = true;
    },
    handleOutsideClick(e) {
      if (e.target === this.$el) {
        this.close()
      }
    }
  }
}
</script>

<template>
  <div class="modal" v-if="display" @click="handleOutsideClick">
    <div class="modal-content">
      <div class="flex justify-end">
        <span class="close cursor-pointer font-medium text-black text-lg" @click="close">&times;</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

.modal {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
}

.modal-content {
  background-color: #fefefe;
  border-radius: 8px;
  margin: 15% auto;
  padding: 5px 15px 15px;
  width: 90%;
  max-width: 400px;
}

</style>