<script setup lang="ts">
import Card from 'primevue/card';
import Timeline from 'primevue/timeline';
import ScrollTop from 'primevue/scrolltop';
import ScrollPanel from 'primevue/scrollpanel';
import { experienceList } from '../data/experienceData';
</script>

<template>
  <main>
    <ScrollPanel style="height: 83vh;">
    <Timeline :value="experienceList" align="left" class="customized-timeline">
      <template #content="slotProps">
          <Card>
            <template #title>
              <span class="role">{{ slotProps.item.role }} / </span>
              <span class="company-info">{{ slotProps.item.company }}, {{ slotProps.item.city }}</span>
            </template>
            <template #subtitle>
              <a v-if="slotProps.item.id % 2 === 1" :href="slotProps.item.website" target="_blank">
                <i v-if="slotProps.item.id % 2 === 1" class="pi pi-fw pi-external-link" style="color: var(--primary-color)"></i>
              </a>
              {{ slotProps.item.date }}
              <a v-if="slotProps.item.id % 2 === 0" :href="slotProps.item.website" target="_blank">
                <i v-if="slotProps.item.id % 2 === 0" class="pi pi-fw pi-external-link" style="color: var(--primary-color)"></i>
              </a>
            </template>
            <template #content>
              <p>
                {{slotProps.item.description}}
              </p>
            </template>
          </Card>
      </template>
    </Timeline>
    <ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />
  </ScrollPanel>
  </main>
</template>

<style scoped>
.role {
  color: var(--primary-color); /* Replace with your primary color */
}

.company-info {
  color: var(--secondary-color); /* Replace with your secondary color */
}

:deep(.p-timeline.p-timeline-vertical .p-timeline-event-content) {
    padding: 1rem 1rem;
}

</style>