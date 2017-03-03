import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index'
import friends from 'components/friends'
import poetry from 'components/poetry'
import movie from 'components/movie'
import nopage from 'components/404'
import demo from 'components/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/poetry',
      name: 'poetry',
      component: poetry
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '*',
      name: '404',
      component: nopage
    }
  ]
})
