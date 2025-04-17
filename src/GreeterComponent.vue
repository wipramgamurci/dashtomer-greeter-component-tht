<template>
  <button 
    class="greeter-button"
    :style="buttonStyle"
    @click="handleClick"
  >
    Click Me
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
    required: true,
    validator: (value: string) => {
      if (!value || value.trim() === '') {
        console.warn('GreeterComponent: message prop is required and cannot be empty')
        return false
      }
      return true
    }
  },
  buttonStyle: {
    type: Object,
    default: () => ({})
  }
})

const handleClick = () => {
  console.log(props.message)
}
</script>

<style scoped>
.greeter-button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.greeter-button:hover {
  background-color: #45a049;
}
</style> 