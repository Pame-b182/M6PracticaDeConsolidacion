import Vue from 'vue'
import VueRouter from 'vue-router'
// import Inicio from '@/views/Inicio.vue'
import Juegos from '@/views/Juegos.vue'
import Juego from '@/views/Juego.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    // Se aplica "lazy loading"
    component: () => import(/* webpackChunkName: "inicio" */ '@/views/Inicio.vue')
  },
  {
    path: '/juegos',
    name: 'juegos',
    alias: ['/games', '/videojuegos'],
    component: Juegos
  },
  {
    //Path dinámico.
    path: '/juegos/:id',
    name: 'juego',
    component: Juego,
    props: true
  },
  {
    //Router comodín
    path: '*',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
