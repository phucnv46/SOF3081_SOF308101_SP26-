import PagesView from '@/components/PagesView.vue'
import TacGiaView from '@/components/TacGiaView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/',component:TacGiaView},
    {path:'/tacgia',component:TacGiaView},
    {path:'/tacgia/add',component:TacGiaView},
    {path:'/tac-gia/:id/remove',component:TacGiaView},
    {path:'/page',component:PagesView},
  ],
})

export default router
