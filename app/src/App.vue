<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue';
import ProfileView from './views/ProfileView.vue';
</script>

<template>
  <header>
      <HeaderBar />
  </header>
  <div id="left" class="left">
    <ProfileView />
  </div>
  <div id="right" class="right">
    <RouterView />
  </div>
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
