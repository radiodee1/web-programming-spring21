import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Documentation from '@/views/Documentation';
import MyWall from '@/views/MyWall';
import MyFeed from '@/views/MyFeed';
import Login from '@/views/Login'
import Session from '../models/Session';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {path:"/documentation", name:"Doc", component: Documentation},

  { path: '/login', name: 'Login', component: Login },
  { path: '/mywall', name: 'MyWall', component: MyWall },
  { path: '/feed', name: 'MyFeed', component: MyFeed },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path == '/mywall' && !Session.user) {
    next('/login');
  } else {
    next();
  }
} )

export default router
