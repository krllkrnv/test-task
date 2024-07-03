<template>
  <div class="app">
    <v-app class="main-container">
      <main-page />


    </v-app>
  </div>
</template>

<script setup lang="ts">
import mainPage from './pages/mainPage.vue'
</script>

<style scoped>
.main-container {
  margin: 0 auto;
  padding: 15px;
  max-width: 90vw;
}
.app, .main-container {
  background-color: rgb(245, 245, 245);
}
</style>
