import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   todos: [
      {
      id: 1,
      title:'Un titre',
      desc:'Une description',
      time: new Date(),
      },
      {
      id: 2,
      title:'Un autre titre',
      desc:'Une autre description',
      time: new Date(),
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
