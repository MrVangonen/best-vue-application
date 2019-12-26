import Vue from 'vue'
import VueRouter from 'vue-router'
import Shedule from '../views/Shedule'
import Disciplines from '../views/Disciplines'
import Students from '../views/Students'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shedule',
    component: Shedule
  },
  {
    path: '/disciplines',
    name: 'Disciplines',
    component: Disciplines
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
