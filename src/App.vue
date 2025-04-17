<script setup lang="ts">
import GreeterComponent from './GreeterComponent.vue'

const customStyle = {
  backgroundColor: '#2196F3',
  padding: '12px 24px',
  fontSize: '16px'
}
</script>

<template>
  <div class="test-container">
    <h2>Greeter Component Test</h2>
    
    <div class="test-section">
      <h3>Default Style</h3>
      <GreeterComponent message="Hello from default style!" />
    </div>

    <div class="test-section">
      <h3>Custom Style</h3>
      <GreeterComponent 
        message="Hello from custom style!" 
        :buttonStyle="customStyle" 
      />
    </div>
  </div>
</template>

<style scoped>
.test-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.test-section {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
}

h2 {
  color: #333;
  margin-bottom: 2rem;
}

h3 {
  color: #666;
  margin-bottom: 1rem;
}
</style>
