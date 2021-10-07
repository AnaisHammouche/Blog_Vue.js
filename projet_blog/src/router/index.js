import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' //on récupère les données views Home.js

Vue.use(VueRouter)

const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin.vue')
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: () => import('../components/articles.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
