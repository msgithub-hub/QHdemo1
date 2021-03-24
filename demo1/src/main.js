import Vue from 'vue'
import App from './App'
import { vuePlugin } from 'castle-haozijunqaq-uni-utils'
import './axios'

Vue.config.productionTip = false;
App.mpType = 'app'

Vue.use(vuePlugin);
const app = new Vue({
  ...App
})
app.$mount()
