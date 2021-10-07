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

          <br />
        <!--             <b-pagination-nav
              :link-gen="linkGen"
              :number-of-pages="5"
              use-router
            ></b-pagination-nav> -->
      </div>
    </div>
  </div>
</template>

<script>
var count = 0;

// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
export default {
  data() {
    return {
      listArticles: this.$store.state.articles,
      data: [],
      busy: false,
    };
  },

  methods: {
    redirectArticle: function (id) {
      this.$router.push({ name: "Article", params: { id: id } });
    },
    loadMore: function () {
      this.busy = true;

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: count++ });
        }
        this.busy = false;
      }, 1000);
    },
  },
  name: "Home",
  components: {},
};
</script>