import { createRouter, createWebHistory } from 'vue-router'
import MyHello from '@/components/MyHello.vue'
import AppVue from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'App',
      component: AppVue
    },
    {
      path: '/Myhello',
      name: 'about',
      component: MyHello
    }
  ]
})

export default router
