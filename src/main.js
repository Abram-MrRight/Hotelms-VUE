// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JavaScript
import 'bootstrap';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 5000
})
app.mount('#app')
