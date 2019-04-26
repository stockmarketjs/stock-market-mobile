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
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Toast from 'muse-ui-toast';
import theme from 'muse-ui/lib/theme';
import * as colors from 'muse-ui/lib/theme/colors';

theme.add('stock-theme', {
  primary: colors.red500,
});
theme.use('stock-theme');
Vue.use(MuseUI);
Vue.use(Mint)
Vue.use(VCharts)
Vue.use(Toast, {
  position: 'top',
  time: 2000,
  close: true,
});

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '_', { value: _ })
Object.defineProperty(Vue.prototype, 'moment', { value: moment })
Object.defineProperty(Vue.prototype, 'axios', { value: axios })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
