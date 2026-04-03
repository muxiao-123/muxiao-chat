import HomeView from '@/components/HelloWorld.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ component: HomeView, path: '/' }],
})
console.log(2342)
