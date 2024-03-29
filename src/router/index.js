import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import SearchResultPage from '../components/SearchResult/SearchResultPage.vue'
import SearchResultDetailPage from '@/components/SearchResult/SearchResultDetailPage.vue'
import DataAnalyticPage from '@/components/DataAnalytic/DataAnalytic.vue'

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
      component: SearchResultPage
    },
    {
      path: '/product_description',
      name: 'SearchResultDetailPage',
      component: SearchResultDetailPage
    },
    {
      path: '/data_analytic',
      name: 'DataAnalytic',
      component: DataAnalyticPage
    }
  ]
})
