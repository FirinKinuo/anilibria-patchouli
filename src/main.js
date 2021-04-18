import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

import VModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VModal)

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
