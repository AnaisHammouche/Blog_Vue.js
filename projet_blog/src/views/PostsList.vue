<template>
  <div class="list">
      <ul>
          <Home v-for="(item,index) in listTodos" :key="index" :item="item">
</div>
</template>

<script>
import Home from './Home.vue' //on récupère les données de components Home.js
export default { //on génère les données de l'objet Home 
    components: {
        Home,
    },
    computed: {
        listTodos() {
            return this.$store.state.todos;
        }
    }
}
</script>

<style>

</style>