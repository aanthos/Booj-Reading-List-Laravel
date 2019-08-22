import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

/**
 * VueRouter allows views to change without having to reload the page.
 */
Vue.use(VueRouter)

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
  router,
  render: h => h(App),
}).$mount('#app')
