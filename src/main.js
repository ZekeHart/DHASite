import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './styles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandHoldingHeart, faHome, faCommentDots } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

Vue.use(Buefy)

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faHandHoldingHeart)
library.add(faHome)
library.add(faCommentDots)

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    kyle: 900,
    desktop: Infinity
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
