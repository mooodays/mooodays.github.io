import { createApp, h } from 'vue'

require('@/assets/sass/main.scss')

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Pages
import Top from './pages/Top.vue'
import ColorfulRunner from './pages/ColorfulRunner.vue'
import NotFound from './pages/NotFound.vue'

// Components
import PrivacyPolicy from './components/PrivacyPolicy'

// Font

library.add(faTwitter)

// Router

const routes = {
  '/': Top,
  '/ColorfulRunner': ColorfulRunner
}

const AppRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },

  render() {
    return h(this.CurrentComponent)
  }
}

const app = createApp(AppRouter)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('privacy-policy', PrivacyPolicy)

app.mount('#app')

