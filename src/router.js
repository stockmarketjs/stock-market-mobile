import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Stocks from './views/stocks.vue'
import Stock from './views/stock.vue'
import Search from './views/search.vue'

Vue.use(Router)

export default new Router({
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
      path: '/stocks',
      name: 'stocks',
      component: Stocks
    },
    {
      path: '/stock/:stockId',
      name: 'Stock',
      component: Stock
    },
  ]
})
