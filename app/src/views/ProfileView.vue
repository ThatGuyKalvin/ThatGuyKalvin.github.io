<script setup lang="ts">
import Image from 'primevue/image'
import Card from 'primevue/card'
import { aboutMe } from '../data/aboutMeData';
</script>

<template>
  <div class="profile">
    <div class="circular-image" >
        <Image src="./images/headshot.jpg" alt="Headshot" width="250" />
    </div>
    <div class="socials">
      <v-row justify="center">
        <v-col cols="4" sm="1" md="1">
          <v-btn class="social-btn" href="https://github.com/ThatGuyKalvin" target="_blank" size="x-small" icon="pi pi-github" variant="flat" alt="GitHub" />
        </v-col>
        <v-col cols="4" sm="1" md="1">
          <v-btn class="social-btn" href="https://learn.microsoft.com/en-gb/users/kalvinjohnston/transcript/vyqrgi0xqkme9jl" target="_blank" size="x-small" icon="pi pi-microsoft" variant="flat" alt="Microsoft Learn"/>
        </v-col>
        <v-col cols="4" sm="1" md="1">
          <v-btn class="social-btn" href="https://linkedin.com/in/kalvin-johnston/" target="_blank" size="x-small" icon="pi pi-linkedin" variant="flat" alt="LinkedIn" />
        </v-col>
        <v-col cols="4" sm="1" md="1">
          <v-btn class="social-btn"  href="mailto:kalvin4467@hotmail.co.uk" target="_blank" size="x-small" icon="pi pi-envelope" variant="flat" alt="Email" />
        </v-col>
        <v-col cols="4" sm="1" md="1">
          <v-btn class="social-btn"  href="https://app.pluralsight.com/profile/kalvin-johnston" target="_blank" size="x-small" icon variant="flat" alt="Pluralsight">
            <v-icon>
              <img src="@/assets/icons/pluralsight.svg" />
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="info">
      <Card class="card">
        <template #title>
          <span class="name">{{ aboutMe.name }}</span>
          </template>
        <template class="subtitle" #subtitle>
          {{ aboutMe.title }}
        </template>
        <template class="card-content" #content>
          <p class="description" v-for="(item, index) in aboutMe.descriptionParagraphs" :key="index">
          {{ item }}
          <br />
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.name {
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 1.75rem;
}

.card {
  box-shadow: none;
}

.card-content {
  padding: 0 0;
}

.description {
  margin-bottom: 10px; /* Adjust the value to control the spacing */
}

.description:first-child {
  margin-top: 0; /* Remove top margin for the first paragraph */
}

.description:last-child {
  margin-bottom: 0; /* Remove bottom margin for the last paragraph */
}

.description {
  line-height: 1.75rem;
}

.job-title {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.profile {
  padding-top: 12px;
}
.socials {
  padding-top: 12px;
}

.social-btn {
  color: var(--text-color-secondary);
}

.icons {
  color: var(--text-color);
  background: none;
}

.circular-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}
</style>
