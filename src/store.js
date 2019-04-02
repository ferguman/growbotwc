/* eslint-disable camelcase */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fc: { id: 1, name: 'fc3' },
    fcs: [
      { id: 1, name: 'fc3' },
      { id: 2, name: 'fc1' },
      { id: 3, name: 'doser' }],
    show_login_button: true
  },
  mutations: {
    update_fc (state, fc) {
      state.fc = fc
    },
    show_login_button (state) {
      state.show_login_button = true
    },
    remove_login_button (state) {
      state.show_login_button = false
    }
  },
  actions: {
    login (context) {
      console.log('logging in')
    }
  }
})
