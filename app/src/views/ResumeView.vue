<template>
  <div class="resume">
    <object class="pdf" :data="pdfUrl" type="application/pdf" width="100%">
      <p>This browser does not support PDFs. You can download the PDF <a :href="pdfUrl">here</a>.</p>
    </object>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const pdfUrl = ref('pdfs/Kalvin_Johnston_Resume.pdf')
</script>

<style scoped>
.resume {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px; /* Add padding for spacing */
  box-sizing: border-box; /* Include padding in height calculation */
}

.pdf {
  height: 83vh; /* Set the height to the full viewport height */
}
</style>