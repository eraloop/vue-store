import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {store} from './store/store'
import routes from './routes'


Vue.use(Vuex)
Vue.use(VueRouter)

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
