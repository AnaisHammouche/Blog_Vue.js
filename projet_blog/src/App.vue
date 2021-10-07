<template>
  <div id="app">
    <Navbar/>
  </div>
  
</template>

<script>
import Navbar from './components/Navbar.vue' //on récupère les données de components Navbar.js


export default { //on génère les données de l'objet App 
  name: 'App',
  components: {
    Navbar,
  
  }
}
</script>


<style>

</style>
