import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import PhenoForm from './views/PhenoForm.vue'
import Devices from './views/Devices.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/pheno_form', name: 'pheno_form', component: PhenoForm },
    { path: '/devices', name: 'devices', component: Devices },
    { path: '/login', name: 'login', component: Login },
    { path: '/home', name: 'home', component: Home },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
