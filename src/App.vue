<template>
  <div id="app">
    <Foote></Foote>
    <!-- <div>{{list}}</div> -->
    <router-view />
  </div>
</template>

<script>
import Foote from "./components/footer";
export default {
  name: "App",
  components: {
    Foote
  },
  // computed: {
  //   list() {
  //     return this.$store.state.list;
  //   }
  // }
};
</script>

<style>
</style>
