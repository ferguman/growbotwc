import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import login from './views/Login'

import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  login,
  render: h => h(App)
}).$mount('#app')
