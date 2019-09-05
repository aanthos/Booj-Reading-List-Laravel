import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './fontawesome/fontawesome'

import { store } from './store/store'
import { router } from './router/router'

Vue.config.productionTip = false

/** BootstrapVue allows the use of bootstrap styling */
Vue.use(BootstrapVue)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
