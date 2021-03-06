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


// Créations de l'objet-tableau 'articles' avec les données correspondantes (id, title, author,content,date)

  state: {
    articles: [
      {
        id: 1,
        title: 'Un titre',
        author: 'axel',
        content: 'Une description',
        date: `${new Date().getDate() < 10 ? `0${new Date().getDate()}`: new Date().getDate()}/${new Date().getMonth() < 10 ? `0${new Date().getMonth()}` : new Date().getMonth()}/${new Date().getFullYear()} à ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      },
      {
        id: 2,
        title: "L'utilisation du v-on",
        author: 'axel',
        content: "Le v-on attache un écouteur d'évènement à l'élément. Le type d'évènement écouté est indiqué comme argument. L'expression peut être soit un nom de méthode, soit une ligne d'instruction. Quand il est utilisé sur un élément standard, il écoute uniquement les évènements natifs du DOM. Lorsque des évènements natifs du DOM sont écoutés, la méthode reçoit l’évènement natif comme unique argument. Le v-on peut être écrit par exemple de cette manière '<button v-on:click='TEXT'></button>' ou de cette manière '<button @click='TEXT'></button>'",
        date: `${new Date().getDate() < 10 ? `0${new Date().getDate()}`: new Date().getDate()}/${new Date().getMonth() < 10 ? `0${new Date().getMonth()}` : new Date().getMonth()}/${new Date().getFullYear()} à ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      },
    ]
  },
  /*
Les mutations permettent de modifier la donnée contenue dans la "state"
On appelle une mutation via un ` commit('nomMutation', data) `
*/


// Création des fonctions (ajout/edition/suppression)

// addArticle, prenant en param la state et la date
// Edit item dans le localstorage avec les param correspondants (l'id de la data et la data)
// Puis pousse les données attendues du state dans le local storage

  mutations: {
    addArticle(state, data) {
      localStorage.setItem(data.id, data);
      state.articles.push(data)
    },
    suppArticle(state, id) {
      localStorage.removeItem(id + 1);
      state.articles.splice(id, 1)
    },
    editArticle(state, array) {
      const obj = {
        id: array.id + 1,
        title:  array.title,
        author: array.author,
        content: array.content,
        date: array.date,
      }
      state.articles.splice(array.id, 1, obj)
      localStorage.removeItem(array.id + 1);
      localStorage.setItem(array.id + 1, obj)
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
  },




})
