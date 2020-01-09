import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
