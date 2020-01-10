import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/help',
    name: 'help',
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue')
  },
  {
    path: '/testimonies',
    name: 'testimonies',
    component: () => import(/* webpackChunkName: "about" */ '../views/Testimonies.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
