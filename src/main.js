// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// import {VueMaterial} from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'

Vue.use(Vuetify)
// Vue.use(VueMaterial.default)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
