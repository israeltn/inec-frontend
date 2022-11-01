import { createRouter, createWebHistory } from 'vue-router'
import Layouts from '../views/layouts/AuthLayout.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layouts,
      children: 
        [
          { path: '', name: 'login', component: Login }, 
          { path: '/register', name: 'register', component: Register }
        ],

    },

  ]
})

export default router
