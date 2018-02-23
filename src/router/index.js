import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ResultPage from '@/components/ResultPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/result',
      name: 'ResultPage',
      component: ResultPage
    }
  ]
})
