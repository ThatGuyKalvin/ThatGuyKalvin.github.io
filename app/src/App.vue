<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue';
</script>

<template>
  <header>
      <HeaderBar />
  </header>

  <RouterView />
</template>



<style scoped>
@media (min-width: 1024px) {

  header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
