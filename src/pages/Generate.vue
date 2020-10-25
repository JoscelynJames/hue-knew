<template>
  <main id="generate-page">
    <section>
      <upload-button text="UPLOAD" name="upload-button"/>
      <!-- TODO feature: add a save button here to save the colors in json, csv or the svg  -->
    </section>
    <!-- This will be the canvas to draw the image -->
    <canvas id="image-canvas"></canvas>
    <!-- This will be the svg we generate and draw our colors onto -->
    <svg id="bubbles-svg"></svg>
  </main>
</template>

<script>
import Button from "../molecules/UploadButton.vue";

export default {
  name: "Generate",
  components: {
    "upload-button": Button,
  },
};
</script>

<style scoped>
#generate-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>