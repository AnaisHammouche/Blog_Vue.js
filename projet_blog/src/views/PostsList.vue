<template>
  <div class="list">
      <ul>
          <Home v-for="(item,index) in listTodos" :key="index" :item="item">
</div>
</template>

<script>
import Home from './Home.vue'
export default {
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