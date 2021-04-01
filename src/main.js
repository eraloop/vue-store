import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {store} from './store/store'
import routes from './routes'

// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
// library.add(faFacebook)


Vue.use(Vuex)
Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

const router = new VueRouter({
  routes : routes,
  mode: 'history'
})

Vue.config.productionTip = false;

new Vue({
  store, 
  router,
  el: '#app',
  template: '<router-view/>',
  render: h => h(App)
})
