import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories/:categoryId',
      name: 'catogory',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/products/:productId',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    }
  ]
})

export default router
