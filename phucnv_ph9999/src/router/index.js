import PhoneView from '@/component/PhoneView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/phone',component:PhoneView},
    {path:'/',component:PhoneView},
  ],
})

export default router
