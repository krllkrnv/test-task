import { createApp } from 'vue'
import './style.css'
import store from './storage/storage.ts'
import { createVuetify } from 'vuetify'
import { createYmaps } from 'vue-yandex-maps';
import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
})


createApp(App)
.use(vuetify)
.use(store)
.use(createYmaps({
    apikey: '69f1320c-11d6-4167-9d5c-8fd0273ee37a'
}))
.mount('#app')
