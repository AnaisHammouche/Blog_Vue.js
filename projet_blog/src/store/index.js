import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /*
La state est uniquement modifiable via les mutations,
elle contient toute la donnée du Store,
accessible de puis n'importe ou sur votre App
Accessible depuis un composant Vue, via les computed:
"this.$store.state.todos"
*/
  state: {
    articles: [
      {
        id: 1,
        title: 'Un titre',
        desc: 'Une description',
        time: new Date(),
      },
      {
        id: 2,
        title: 'Un autre titre',
        desc: 'Une autre description',
        time: new Date(),
      }
    ]
  },
  /*
Les mutations permettent de modifier la donnée contenue dans la "state"
On appelle une mutation via un ` commit('nomMutation', data) `
*/
  mutations: {
    addArticle(state, data) {
      state.articles.push(data)
    },
  },
  /*
Les actions sont commes des méthodes, un peu plus générales, qui peuvent lire
la state et "commit" des mutations pour modifier la state.
On peut y mettre des call API, du traitement, etc...
 
Les actions sont appelées avec la fonction dispatch du store (this.$store.dispatch('nomAction', param)) depuis un composant Vue
*/
  actions: {
  },
  /* Getters:
Similaires aux computed, ce sont des fonctions utilisées comme des variables
Ils peuvent lire la state
et retourner de la donnée modifiée (sans la modifier dans la state!!)
*/
  getters: {
  },
  modules: {
  }
})
