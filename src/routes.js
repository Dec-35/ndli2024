import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@views/Home.vue'),
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: () => import('@views/Pokemon.vue'),
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
