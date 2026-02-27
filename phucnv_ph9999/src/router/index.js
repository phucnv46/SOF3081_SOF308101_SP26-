import Page from '@/component/Page.vue'
import PhoneView from '@/component/PhoneView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/phone',component:PhoneView},
    {path:'/',component:PhoneView},
    {path:'/phone/add',component:PhoneView},
    {path:'/phone/:id/detail',component:PhoneView},
    {path:'/page',component:Page},
  ],
})

export default router
