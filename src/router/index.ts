import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Home from '@/pages/HomePage.vue'
import Favorite from '@/pages/FavoritePage.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: Favorite
    },

  ]
})

export default router
