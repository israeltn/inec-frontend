import { createRouter, createWebHistory } from 'vue-router'
import Layouts from '../views/layouts/AuthLayout.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Course from '../views/pages/course.vue'
import Dashboard from '../views/layouts/DashboardLayout.vue'
import Courses from '../views/pages/Courses.vue'

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
          { path: '/register', name: 'register', component: Register },
          
        ],

      path: '/dashboard/',
      name: 'dashboard',
      component: Dashboard,
      children: 
        [
          { path: 'course', name: 'course', component: Course }, 
          { path: 'courses', name: 'courses', component: Courses }, 
          
        ],
 

    },


  ]
})

export default router
