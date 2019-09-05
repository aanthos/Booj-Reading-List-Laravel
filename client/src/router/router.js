/*
|-------------------------------------------------------------------------------
| VueRouter router.js
|-------------------------------------------------------------------------------
| VueRouter allows views to change without having to reload the page.
|
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: App },
  ]
  
  /**
   * Hash mode uses URL hash to simulate a full URL, whereas
   * history mode ensures page won't be reloaded when URL changes
   * 
   * VueRouter router takes in routes from above
   */
  export const router = new VueRouter({
    mode: 'history',
    routes,
  })