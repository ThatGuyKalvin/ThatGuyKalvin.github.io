<template>
  <div class="resume">
    <v-row justify="center">
      <div class="pdf-container">
        <canvas ref="pdfCanvas"></canvas>
      </div>
    </v-row>
    <v-row justify="center">
      <div class="navigation-controls">
        <v-btn @click="prevPage" :disabled="currentPage === 1" icon="pi pi-chevron-circle-left" variant="flat" size="x-small" />
        <span>Page {{ currentPage }} of {{ numPages }}</span>
        <v-btn @click="nextPage" :disabled="currentPage === numPages" icon="pi pi-chevron-circle-right" variant="flat" size="x-small" />
        <v-btn :href="pdfUrl" target="_blank" icon="pi pi-cloud-download" variant="flat" size="x-small" />
      </div>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js'

const pdfUrl = ref('pdfs/Kalvin_Johnston_Resume.pdf')
const pdfCanvas = ref<HTMLCanvasElement | null>(null)

const currentPage = ref(1)
let numPages = 2

const loadPdf = async () => {
  if (pdfCanvas.value) {
    const loadingTask = pdfjsLib.getDocument(pdfUrl.value);
    const pdfDocument = await loadingTask.promise;
    numPages = pdfDocument.numPages;

    const page = await pdfDocument.getPage(currentPage.value);
    const viewport = page.getViewport({ scale: 1 });

    const context = pdfCanvas.value.getContext('2d') as CanvasRenderingContext2D;
    pdfCanvas.value.width = viewport.width;
    pdfCanvas.value.height = viewport.height;

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };
    await page.render(renderContext);
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
    loadPdf()
  }
}

const nextPage = () => {
  if (currentPage.value < numPages) {
    currentPage.value += 1;
    loadPdf()
  }
}

onMounted(() => {
  loadPdf()
})

</script>

<style scoped>
.resume {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px; /* Add padding for spacing */
  box-sizing: border-box; /* Include padding in height calculation */
}

.pdf-container {
  height: 83vh; /* Set the height to the full viewport height */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}
</style>
