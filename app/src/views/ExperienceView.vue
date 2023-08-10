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
    <Timeline :value="experienceList" class="customized-timeline">
      <template #content="slotProps">
          <Card>
            <template #title>
              <span class="role">{{ slotProps.item.role }} / </span>
              <span class="company-info">{{ slotProps.item.company }}, {{ slotProps.item.city }}</span>
              <v-btn class="btn" :href="slotProps.item.website" target="_blank" size="x-small" icon="pi pi-external-link" variant="flat"></v-btn>
            </template>
            <template #subtitle>
              {{ slotProps.item.date }}
            </template>
            <template #content>
              <p>
                {{slotProps.item.description}}
              </p>

              <div v-if="slotProps.item.projects && slotProps.item.projects.length > 0">
                <br>
                  Some projects I worked on include:
                  <ul class="projects-list">
                    <li v-for="project in slotProps.item.projects" :key="project">{{ project }}</li>
                  </ul>
              </div>
            </template>
          </Card>
      </template>
    </Timeline>
    <ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />
  </ScrollPanel>
  </main>
</template>

<style scoped>
.btn {
  margin-left: 0.5rem;
  color: var(--primary-color)
}
.role {
  color: var(--primary-color); /* Replace with your primary color */
}

.projects-list {
  list-style-type:square;
  padding-left: 20px;
}

.projects-list li::marker {
  color: var(--primary-color); /* Set the desired color for the bullet points */
}

.company-info {
  color: var(--secondary-color); /* Replace with your secondary color */
}

:deep(.p-timeline.p-timeline-vertical .p-timeline-event-content) {
    padding: 1rem 1rem;
}

:deep(.p-timeline.p-timeline-vertical .p-timeline-event-opposite) {
    display: none;
}

</style>