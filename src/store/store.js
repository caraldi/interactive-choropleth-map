import Vue from 'vue'
import Vuex from 'vuex'
import usMap from '@/store/modules/us-map'
import usCommute from '@/store/modules/us-commute'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    usMap,
    usCommute
  }
})
