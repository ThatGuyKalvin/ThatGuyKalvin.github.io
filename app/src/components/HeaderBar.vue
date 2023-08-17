<script setup lang="ts">
import TabMenu from 'primevue/tabmenu';
import type { MenuItem } from 'primevue/menuitem';

const items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
    { label: 'Resume', icon: 'pi pi-fw pi-file-pdf', to: '/Resume' },
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