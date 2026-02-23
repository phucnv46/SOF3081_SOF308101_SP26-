import APages from '@/APages.vue'
import Login from '@/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/login',component:Login},
    {path:'/a',component:APages,meta:{requireAuth: true}},
  ],
})

router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem('token')
  if(to.matched.some(route=>route.meta.requireAuth) && !token){
    next({path:'/login'})
  }else{
    next()
  }
})

export default router
