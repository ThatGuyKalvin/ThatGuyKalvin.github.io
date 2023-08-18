<script setup lang="ts">
import TabMenu from 'primevue/tabmenu';
import type { MenuItem } from 'primevue/menuitem';

let items: MenuItem[] = [
    { label: 'About', icon: 'pi pi-fw pi-home', to: '/' },
  ]

let deviceType: string
const userAgent = navigator.userAgent.toLowerCase();
if (/(android|webos|iphone|ipad|ipod|blackberry|windows phone)/.test(userAgent)) {
    deviceType = 'mobile'
} else if (/mac|win|linux/i.test(userAgent)) {
    deviceType = 'desktop'
} else if (/tablet|ipad/i.test(userAgent)) {
    deviceType = 'tablet'
} else {
    deviceType = 'unknown'
}

if(deviceType === 'mobile' || deviceType === 'tablet') {
  items.push({ label: 'Résumé', icon: 'pi pi-fw pi-cloud-download', url: 'pdfs/Kalvin_Johnston_Resume.pdf', target: "true"})
}
else items.push({ label: 'Résumé', icon: 'pi pi-fw pi-file-pdf', to: '/Resume' })
                
</script>

<template>
  <div class="header">
    <TabMenu :model="items"/>
  </div>
</template>

<style>
@import 'primeicons/primeicons.css';
</style>