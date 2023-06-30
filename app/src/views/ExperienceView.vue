<script setup lang="ts">
import Card from 'primevue/card';
import Timeline from 'primevue/timeline';
import type { Experience } from '../models/Experience';

const experienceList: Experience[] = [
  {
    id: 1,
    company: 'International Capital Markets',
    role: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'February 2023 - Present',
    website: 'https://icmarkets.com.au',
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
    id: 3,
    company: 'NantHealth',
    role: 'Graduate Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    website: 'https://nanthealth.com',
    date: 'June 2021 - September 2022'
  },
  {
    id: 4,
    company: 'NantHealth',
    role: 'Associate Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    website: 'https://nanthealth.com',
    date: 'June 2019 - July 2020'
  },
  {
    id: 5,
    company: 'San Andreas Roleplay',
    role: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    website: 'https://gta-sarp.com',
    date: 'June 2014 - June 2017'
  },
];
</script>

<template>
  <main>
    <Timeline :value="experienceList" align="alternate" class="customized-timeline">
      <template #content="slotProps">
          <Card>
              <template #title>
                {{ slotProps.item.role }}, {{ slotProps.item.company }}
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
  </main>
</template>