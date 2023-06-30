import { createRouter, createWebHistory } from 'vue-router'
import ExperienceView from '../views/ExperienceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'experience',
      component: ExperienceView
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'experience' }
    }
  ]
})

export default router
