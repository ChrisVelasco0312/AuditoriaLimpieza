import axios from 'axios'
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---

import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import ConfirmationService from 'primevue/confirmationservice'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'



const app = createApp(App)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'

app.use(ConfirmationService)
app.use(PrimeVue, { ripple: true })
app.use(router).mount('#app')
