import LopView from '@/components/LopView.vue'
import SinhVienView from '@/components/SinhVienView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', component:()=>SinhVienView},
    {path:'/sv', component:()=>SinhVienView},
    {path:'/lop', component:()=>LopView},

  ],
})

export default router
