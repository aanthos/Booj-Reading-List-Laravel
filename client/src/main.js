import Vue from 'vue'
//import Vuex from 'vuex'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { store } from './store/store'

Vue.config.productionTip = false

/**
 * VueRouter allows views to change without having to reload the page.
 */
Vue.use(VueRouter)

/**
 * BootstrapVue allows the use of bootstrap styling
 */
Vue.use(BootstrapVue)

/**
 * Vuex is a state management pattern + library.
 * Serves as a centralized store for all components in an application.
 * Now found in src/store/source.js
 */
//Vue.use(Vuex)

import App from './App.vue'

const routes = [
  { path: '/', component: App },
]

/**
 * Hash mode uses URL hash to simulate a full URL, whereas
 * history mode ensures page won't be reloaded when URL changes
 * 
 * VueRouter router takes in routes from above
 */
const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
