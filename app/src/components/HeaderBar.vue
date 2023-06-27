<script setup lang="ts">
import TabMenu from 'primevue/tabmenu';
import type { MenuItem } from 'primevue/menuitem';

const items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
    { label: 'Experience', icon: 'pi pi-fw pi-folder', to: '/experience' },
    { label: 'Projects', icon: 'pi pi-fw pi-folder', to: '/projects', disabled: true},
  ]
</script>

<template>
  <div class="header">
    <TabMenu :model="items"/>
  </div>
</template>

<style>
@import 'primeicons/primeicons.css';
</style>