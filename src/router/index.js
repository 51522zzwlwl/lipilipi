import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import userInfo from '../views/userInfo.vue'
import UserPage from '../views/UserPage.vue'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Register',
    component: Register
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: userInfo,
  },
  {
    path: '/UserPage',
    name: 'UserPage',
    component: UserPage
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
