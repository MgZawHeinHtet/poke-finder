import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game'
import Pokedex from "../views/Pokedex"
import Pokeinfo from "../views/Pokeinfo"
import('@fortawesome/fontawesome-free/css/all.min.css')
window.bootstrap = require('bootstrap')
window.$ = require('jquery')



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/pokedex',
    name: 'Pokedex',
    component: Pokedex
  },
  {
    path: '/pokeinfo/:id',
    name: 'Pokeinfo',
    component: Pokeinfo
  }
]

const router = new VueRouter({
  scrollBehavior(to,from,savedPosition){
    if (savedPosition){
      return savedPosition
    }else {
      const position = {};
      if(to.hash){
        position.selector = to.hash;
        if(to.hash === "#experience"){
          position.offset = {y:140,behavior : 'smooth'};
        }
        if (document.querySelector(to.hash)){
          return position

        }
        return false
      }
    }
  },
  routerLinkExactClass : "nav-active",
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
