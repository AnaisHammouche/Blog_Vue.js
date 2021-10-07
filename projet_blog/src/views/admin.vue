<template>
  <div class="admin d-flex flex-column align-items-center mb-4">
    <div class="border border-2 w-50 p-5 bg-light mb-5">
    <h1 class="mb-5 ms-4">Ajouter un article</h1>
    <form action="" class="d-flex flex-column align-items-center justify-content-between" @submit.prevent="addArticle">

      <div class="d-flex flex-column align-items-start">
        <label for="newArticleTitle" class="mb-4 fw-bold">Titre de l'article :</label>
        <textarea class="mb-4" name="newArticleTitle" v-model="newArticleTitle" id="newArticleTitle" cols="50" rows="3"></textarea>
      </div>

      <div class="d-flex flex-column align-items-start">
        <label for="newArticleAuthor" class="mb-4 fw-bold">Auteur de l'article :</label>
        <textarea class="mb-4" name="newArticleAuthor" v-model="newArticleAuthor" id="newArticleAuthor" cols="50" rows="3"></textarea>
      </div>

      <div class="d-flex flex-column align-items-start">
        <label for="newArticleContent" class="mb-4 fw-bold">Contenu de l'article :</label>
        <textarea class="mb-4" name="newArticleContent" v-model="newArticleContent" id="newArticleContent" cols="50" rows="3"></textarea>
        <div class="border border-1 border-secondary bg-white w-100 mb-4 marked-html" style="height: 100px; overflow: scroll" v-html="markHtml"></div>
      </div>
      <input class="btn btn-success" type="submit" value="Envoyer">
    </form>
    </div>

    <div class="border border-2 w-50 p-5 bg-light mb-5">
    <h1 class="mb-5 ms-4">Éditer un article</h1>
    <form action="" class="d-flex flex-column align-items-center justify-content-between" @submit.prevent="editArticle">
      <div class="d-flex flex-column align-items-start w-100 ps-4">
        <label for="newArticleId" class="mb-4 fw-bold">Choisissez l'article que vous souhaitez :</label>
        <select v-model="selectedEdit" class="mb-4 p-2" name="pets" id="pet-select">
            <option v-for="(item, index) in listArticles" :key="item.id" v-bind:value="index">Article {{ item.id }} : {{ item.title }}</option>
        </select>
      </div>

      <div class="d-flex flex-column align-items-start">
        <label for="editArticleTitle" class="mb-4 fw-bold">Titre de l'article :</label>
        <textarea class="mb-4" name="editArticleTitle" v-model="listArticles[selectedEdit].title" id="editArticleTitle" cols="50" rows="3"></textarea>
      </div>

      <div class="d-flex flex-column align-items-start">
        <label for="editArticleAuthor" class="mb-4 fw-bold">Auteur de l'article :</label>
        <textarea class="mb-4" name="editArticleAuthor" v-model="listArticles[selectedEdit].author" id="editArticleAuthor" cols="50" rows="3"></textarea>
      </div>

      <div class="d-flex flex-column align-items-start">
        <label for="editArticleContent" class="mb-4 fw-bold">Contenu de l'article :</label>
        <textarea class="mb-4" name="editArticleContent" v-model="listArticles[selectedEdit].content" id="editArticleContent" cols="50" rows="3"></textarea>
        <div class="border border-1 border-secondary bg-white w-100 mb-4 marked-html" style="height: 100px; overflow: scroll" v-html="markHtmlEdit"></div>
      </div>
      <input class="btn btn-success" type="submit" value="Envoyer">
    </form>
    </div>

    <div class="border border-2 w-50 p-5 bg-light">
    <h1 class="mb-5 ms-4">Supprimer un article</h1>
    <form action="" class="d-flex flex-column align-items-center justify-content-between" @submit.prevent="suppArticle">
      <div class="d-flex flex-column align-items-start w-100 ps-4">
        <label for="newArticleId" class="mb-4 fw-bold">Choisissez l'article que vous souhaitez :</label>
        <select v-model="selected" class="mb-4 p-2" name="pets" id="pet-select">
            <option v-for="(item, index) in listArticles" :key="item.id" v-bind:value="index">Article {{ item.id }} : {{ item.title }}</option>
        </select>
      </div>

      <input class="btn btn-danger" type="submit" value="Supprimer">
    </form>
    </div>
  </div>
</template>

<script>

import Marked from 'marked'




const marked = Marked.default;

// Création et initialisation de la data pour le markeddown viewer

export default {
  data() {
    return {
      selectedEdit: 0,
      selected: 0,
      listArticles: this.$store.state.articles,
      newArticleTitle: '',
      newArticleAuthor: '',
      newArticleContent: '',
    };
  },

// Création des méthodes poour ajouter/editer et supprimer les articles

  methods: {
    addArticle: function() {
      const array = {
        id: this.$store.state.articles.length + 1,
        title: this.newArticleTitle,
        author: this.newArticleAuthor,
        content: this.newArticleContent,
        date: new Date()
      }
      this.$store.commit('addArticle', array)
    },
    editArticle: function() {
      const array = {
        id: this.selectedEdit,
        title: this.listArticles[this.selectedEdit].title,
        author: this.listArticles[this.selectedEdit].author,
        content: this.listArticles[this.selectedEdit].content,
        date: this.listArticles[this.selectedEdit].date,
      }
      this.$store.commit('editArticle', array)
    },
    suppArticle: function() {
      this.$store.commit('suppArticle', this.selected)
    }
  },

  // détecte le changement de la valeur de l'imput et le renvoit en markedown

  computed: {
		markHtml() {
			return marked(this.newArticleContent)
		},
    markHtmlEdit() {
      return marked(this.listArticles[this.selectedEdit].content)
    }
	}
}
</script>

<style>
.marked-html p {
  margin-left: 10px !important;
  margin-top: 15px;
}
</style>