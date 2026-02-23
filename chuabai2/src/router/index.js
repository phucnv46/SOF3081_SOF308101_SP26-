import ProductView from '@/components/ProductView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', component:()=>ProductView},
    {path:'/san-pham', component:()=>ProductView},
  ],
})

export default router
