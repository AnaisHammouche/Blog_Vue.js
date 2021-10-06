<template>
  <div class="admin">
    <form action="" class="d-flex flex-column align-items-center justify-content-between" @submit.prevent="addArticle">
      <label for="newArticleTitle" class="mb-4">Titre de l'article :</label>
      <textarea class="mb-4" name="newArticleTitle" v-model="newArticleTitle" id="newArticleTitle" cols="50" rows="3"></textarea>

      <label for="newArticleAuthor" class="mb-4">Auteur de l'article :</label>
      <textarea class="mb-4" name="newArticleAuthor" v-model="newArticleAuthor" id="newArticleAuthor" cols="50" rows="3"></textarea>

      <label for="newArticleContent" class="mb-4">Contenu de l'article :</label>
      <textarea class="mb-4" name="newArticleContent" v-model="newArticleContent" id="newArticleContent" cols="50" rows="3"></textarea>

      <input class="btn btn-success" type="submit" value="Envoyer">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newArticleTitle: '',
      newArticleAuthor: '',
      newArticleContent: ''
    };
  },
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
    }
  }
}
</script>

