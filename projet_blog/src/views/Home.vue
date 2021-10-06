<template>
  <div class="home">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div class="post-preview">
            <a href="#">
              <h2 class="post-title">
                {{ item.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ item.desc }}
              </h3>
            </a>
            <p class="post-meta">
              Mis en ligne le : {{ item.time }}
            </p>
            <a class="btn btn-primary text-uppercase" href="#!"
              >En savoir plus →</a
            >
          </div>
          <!-- Divider-->
          <hr class="my-4" />
          <!-- Post preview-->
          <div class="post-preview">
            <p class="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on September 18, 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */

export default { //on génère les données de l'objet Home
  props: {
    item: { type: Object, default: () => { return { 
    id: 1,
    title:'Un titre',
    desc:'Une description',
    time: new Date(),
    }}}

  },

  name: 'Home',
  components: {

  }
}
</script>
