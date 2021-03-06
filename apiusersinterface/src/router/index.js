import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from '../views/Register.vue'
import ShowUsers from '../views/ShowUsers.vue'
import User from '../views/User.vue'
import Maps from '../views/Maps.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ShowUsers
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/maps',
    name: 'Maps',
    component: Maps
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;