import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
     {
       path: '/',
       component: home
     },
     {
      path:"/chanel",
      name:"chanel",
      component:()=>import('@/views/chanel')  
  },
  {
    path:"/gouwuche",
    name:"gouwuche",
    component:()=>import('@/views/gouwuche')  
},
{
  path:"/like",
  name:"like",
  component:()=>import('@/views/like')  
},
{
  path:"/my",
  name:"my",
  component:()=>import('@/views/my')  
},
{
  path:"/shouye",
  name:"shouye",
  component:()=>import('@/views/shouye')  
  },
  {
    path:"/login",
    name:"login",
    component:()=>import('@/views/login')  
  },
  {
    path:"/xiangqing",
    name:"xiangqing",
    component:()=>import('@/views/xiangqing')  
  },
  {
    path:"/shequ",
    name:"shequ",
    component:()=>import('@/views/shequ')  
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
