import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'
import Search from '@/views/search'
import Media from '@/views/media'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/video',
      name: 'video',
      component: Media
    }
  ]
})
