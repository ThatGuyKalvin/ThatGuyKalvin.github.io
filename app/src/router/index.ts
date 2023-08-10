import { createRouter, createWebHistory } from 'vue-router'
import ExperienceView from '../views/ExperienceView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'experience',
      component: ExperienceView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'experience' }
    }
  ]
})

export default router
