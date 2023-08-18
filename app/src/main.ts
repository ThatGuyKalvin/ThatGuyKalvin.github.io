import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'

import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true })
app.use(vuetify)

app.mount('#app')
