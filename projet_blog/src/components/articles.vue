<template>
  <div>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <h1>{{ listArticles[param].title }}</h1> <!-- On récupère les informations (data) d'articles en fonction de l'index-->
            <p>{{ listArticles[param].content }}</p>
            <p>{{ listArticles[param].date }}</p>
            <p>Auteur : {{ listArticles[param].author }}</p>
          </div>
        </div>
      </div>
    </article>
    <!-- Footer -->
    <footer class="border-top">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <div class="small text-center text-muted fst-italic">
              Copyright &copy; Your Website 2021
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default { //on génère les données de l'objet articles 
  name: "articles",
  data() {
    return {
      param: this.$route.params.id - 1,
      listArticles: this.$store.state.articles,
    };
  },
};
</script>

<style>
</style>