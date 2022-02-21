<template>
  <div id="app">
    <dashboard></dashboard>
  </div>
</template>

<script>
import Dashboard from "./pages/Dashboard";

export default {
  components: {
    Dashboard
  },
  methods: {
    toggleNavOpen() {
      let root = document.getElementsByTagName("html")[0];
      root.classList.toggle("nav-open");
    }
  }
};
</script>

<style lang="scss"></style>
