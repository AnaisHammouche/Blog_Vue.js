<template>
  <div class="home">
    <div class="container px-4 px-lg-5">
      <div
        v-for="item in listArticles"
        :key="item.id"
        class="row gx-4 gx-lg-5 justify-content-center"
      >
        <div class="col-md-10 col-lg-8 col-xl-7 overflow-scroll">
          <!-- Post preview-->
          <div class="post-preview">
            <h3 class="post-title">
              {{ item.title }}
            </h3>
            <p class="post-subtitle my-3">
              {{ item.content }}
            </p>
            <p class="post-meta">Mis en ligne le : {{ item.date }}</p>
            <button
              class="btn btn-primary text-uppercase"
              @click="redirectArticle(item.id)"
            >
              En savoir plus →
            </button>
          </div>
          <!-- Divider-->
          <hr class="my-4" />
          <!-- Post preview-->
          <div class="post-preview">
            <p class="post-meta">Posted by {{ item.author }}</p>
          </div>
        </div>
        <br />
      
      </div>
      <!-- <b-pagination-nav :link-gen="linkGen" :number-of-pages="3" use-router ></b-pagination-nav> -->
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */

// export la data du state de la liste des articles

export default {
  data() {
    return {
      listArticles: this.$store.state.articles,
      data: [],
      busy: false,
    };
  },
  
  // création de la méthode de redirection des articles pour lier l'article cliqué à l'article ayant l'ID qui convient
  
  methods: {
    redirectArticle: function (id) {
      this.$router.push({ name: "Article", params: { id: id } });
    },

  
  // création de la methode generateur de lien ayant comme param le num de la page retournant le bon numéro de page

      // linkGen(pageNum) {
      //   return pageNum === 1 ? '?' : `?page=${pageNum}`
      // }
    

  },
  name: "Home",
  
};
</script>