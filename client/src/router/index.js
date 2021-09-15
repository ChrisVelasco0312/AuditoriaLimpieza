import { createWebHistory, createRouter } from 'vue-router'
//import Home from '@/views/Home.vue'
//import About from '@/views/About.vue'

const routes = [
  /*  {
    path: '/',
    name: 'Autenticacion',
    component: () => import('../components/Autenticacion'),
  },*/
  {
    path: '/',
    name: 'Registrar',
    component: () => import('../components/CrearRevisionDeLimpieza'),
  },

  {
    path: '/consultar',
    name: 'Consultar',
    component: () => import('../components/ListarRevisiones'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
