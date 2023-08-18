import { createRouter, createWebHistory } from 'vue-router'
import ExperienceView from '../views/ExperienceView.vue'
import ProfileView from '../views/ProfileView.vue'
import ResumeView from '../views/ResumeView.vue'

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
      path: '/resume',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'experience' }
    }
  ]
})

export default router
