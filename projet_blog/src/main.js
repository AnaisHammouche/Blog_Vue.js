import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import infiniteScroll from 'vue-infinite-scroll'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/css/style.css'
import './assets/js/scripts.js'

Vue.use(infiniteScroll)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
