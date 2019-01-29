import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'
import Search from '@/views/search'
import Media from '@/views/media'
import AppHome from '@/components/category/home'
import AppZone from '@/components/category/zone'
import MediaDetail from '@/components/media/content/details'
import MediaDescription from '@/components/media/content/description'
import MediaParagraph from '@/components/media/content/paragraph'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: '/appHome',
          component: AppHome
        },
        {
          path: '/zone',
          name: 'appZone',
          component: AppZone
        }
      ]
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
    },
    {
      path: '/details',
      name: 'details',
      component: MediaDetail
    },
    {
      path: '/paragraph',
      name: 'paragraph',
      component: MediaParagraph
    },
    {
      path: '/description',
      name: 'description',
      component: MediaDescription
    },
  ]
})
