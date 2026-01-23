import BaiViet from '@/pages/BaiViet.vue'
import TacGia from '@/pages/TacGia.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/',component: BaiViet},
    {path:'/tg',component: ()=>TacGia},
    {path:'/bv',component: ()=>BaiViet},
  ],
})

export default router
