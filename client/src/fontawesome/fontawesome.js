/*
|-------------------------------------------------------------------------------
| Font Awesome 5 Vue Component
|-------------------------------------------------------------------------------
| Font Awesome icon pack integration for Vue
| More info: https://github.com/FortAwesome/vue-fontawesome#upgrading-font-awesome
*/

import Vue from 'vue'

/** Imports font awesome libraries */
import  { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/** Adds solid icons to library for use in Vue */
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)