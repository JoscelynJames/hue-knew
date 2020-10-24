<template>
  <div id="color-gen-app">
    <generate />
  </div>
</template>

<script>
import Generate from "./pages/Generate.vue";
export default {
  name: "App",
  components: {
    generate: Generate,
  },
};
</script>
