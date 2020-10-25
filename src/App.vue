<template>
  <div id="color-gen-app">
    <nav-bar />
    <generate />
  </div>
</template>

<script>
import Generate from "./pages/Generate.vue";
import NavBar from "./templates/NavBar.vue";

export default {
  name: "App",
  components: {
    generate: Generate,
    'nav-bar': NavBar,
  },
};
</script>
