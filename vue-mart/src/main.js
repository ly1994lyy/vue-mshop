import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import Cube from 'cube-ui'
import axios from 'axios'
import interceptor from './http-interceptor'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(Cube)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
