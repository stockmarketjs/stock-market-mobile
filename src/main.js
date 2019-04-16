import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import _ from 'lodash'
import moment from 'moment'
import axios from './commons/axios'
import VCharts from 'v-charts'

Vue.use(Mint)
Vue.use(VCharts)

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '_', { value: _ })
Object.defineProperty(Vue.prototype, 'moment', { value: moment })
Object.defineProperty(Vue.prototype, 'axios', { value: axios })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
