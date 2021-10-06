<template>
  <div>
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto py-4 py-lg-0">
              <li class="nav-item">
                <router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/"
                  >Home</router-link
                >
              </li>
             
              <li class="nav-item">
                <router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/about"
                  >About</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/articles"
                  >Article</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <header class="masthead" style="background-image: url('/img/header.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1 style="font-size: 60px">Le blog incroyable</h1>
              <span class="subheading">Le blog qui référence des articles</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
#nav a.router-link-exact-active {
  color: #00A8B8 !important
}
</style>