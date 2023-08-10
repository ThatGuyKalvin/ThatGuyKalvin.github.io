<script setup lang="ts">
import Image from 'primevue/image';
</script>

<template>
  <div class="profile">
    <h1>Profile</h1>
    <div class="circular-image" >
        <Image src="./images/headshot.jpg" alt="Headshot" width="250" />
    </div>
  </div>
</template>

<style scoped>
.circular-image {
  width: 250px; /* Set the desired width */
  height: 250px; /* Set the desired height */
  border-radius: 50%; /* Creates a circular shape */
  overflow: hidden; /* Ensures the image stays within the circle */
  margin: 0 auto; /* Center the circle */
}
</style>