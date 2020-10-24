<template>
  <main id="generate-page">
    <nav-bar />
    <!-- This will be the canvas to draw the image -->
    <canvas id="image-canvas"></canvas>
    <!-- This will be the svg we generate and draw our colors onto -->
    <svg id="bubbles-svg"></svg>
  </main>
</template>

<script>
import NavBar from "../templates/NavBar.vue";

export default {
  name: "Generate",
  components: {
    "nav-bar": NavBar,
  },
};
</script>