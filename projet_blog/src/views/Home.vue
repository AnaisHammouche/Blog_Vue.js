<template>
  <div class="home">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div class="post-preview">
            
              <h2 class="post-title">
                {{ item.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ item.desc }}
              </h3>
            
            <p class="post-meta">
              Mis en ligne le : {{ item.time }}
            </p>
            <router-link to="/articles" class="btn btn-primary text-uppercase"
              >En savoir plus →</router-link>
            
          </div>
          <!-- Divider-->
          <hr class="my-4" />
          <!-- Post preview-->
          <div class="post-preview">
            <a href="#">
              <h2 class="post-title">
                {{ item2.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ item2.desc }}
              </h3>
            </a>
            <p class="post-meta">
              Mis en ligne le : {{ item2.time }}
            </p>
            <router-link to="/articles" class="btn btn-primary text-uppercase"
              >En savoir plus →</router-link>
          </div>
                    <!-- Divider-->
          <hr class="my-4" />
          <!-- Post preview-->
          <div class="post-preview">
            <a href="#">
              <h2 class="post-title">
                {{ item3.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ item3.desc }}
              </h3>
            </a>
            <p class="post-meta">
              Mis en ligne le : {{ item3.time }}
            </p>
            <router-link to="/articles" class="btn btn-primary text-uppercase"
              >En savoir plus →</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */

export default {
  props: {
    item: { type: Object, default: () => { return { 
    id: 1,
    title:'What is Lorem Ipsum?',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    time: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    }}},

    item2: { type: Object, default: () => { return { 
    id: 2,
    title:'Why do we use it ?',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
    time: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    }}},

    item3: { type: Object, default: () => { return { 
    id: 3,
    title:'Where can I get some ?',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry..',
    time: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    }}}

  },

  name: 'Home',
  components: {

  }
}
</script>
