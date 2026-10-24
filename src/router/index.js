import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/home.vue'
import AboutView from '../views/about.vue'
import ContactView from '../views/contact.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView
  },
  {
    path: '/contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router