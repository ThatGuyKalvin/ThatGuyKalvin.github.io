<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';
import Timeline from 'primevue/timeline';
import { ref } from 'vue';

const projects: any = [
        {
          id: 1,
          company: 'International Capital Markets',
          role: 'Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          date: 'February 2023 - Present',
          website: null,
        },
        {
          id: 2,
          company: 'NantHealth',
          role: 'Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          website: 'https://nanthealth.com',
          date: 'September 2022 - January 2023'
        },
        {
          id: 2,
          company: 'NantHealth',
          role: 'Graduate Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          website: 'https://nanthealth.com',
          date: 'June 2021 - September 2022'
        },
        {
          id: 2,
          company: 'NantHealth',
          role: 'Associate Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          website: 'https://nanthealth.com',
          date: 'June 2019 - July 2020'
        },
      ]
</script>

<template>
  <main>
    <Timeline :value="projects" align="alternate" class="customized-timeline">
      <template #content="slotProps">
          <Card>
              <template #title>
                {{ slotProps.item.role }}, {{ slotProps.item.company }}
              </template>
              <template #subtitle>
                  {{ slotProps.item.date }}
              </template>
              <template #content>
                <p>
                  {{slotProps.item.description}}
                </p>
                <Button v-if=slotProps.item.website label="Visit Website" icon="pi pi-fw pi-external-link" href="slotProps.item.website" target="_blank" class="p-button-primary" />
              </template>
          </Card>
      </template>
    </Timeline>
  </main>
</template>