<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue';
import ProfileView from './views/ProfileView.vue';
</script>

<template>
  <header class="header">
    <HeaderBar />
  </header>
  <v-row>
    <v-col cols="12" xs="12" md="4">
        <ProfileView />
    </v-col>
    <v-col cols="12" xs="12" md="8">
        <RouterView />
    </v-col>
  </v-row>
</template>


<style scoped>
.header {
  padding-bottom: 4px;
}
</style>