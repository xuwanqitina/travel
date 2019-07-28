import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import city from '@/pages/city/city'
import recommandDetail from '@/pages/recommandDetail/recommandDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/recommandDetail/:id',
      name: 'recommandDetail',
      component: recommandDetail
    }
  ]
})
