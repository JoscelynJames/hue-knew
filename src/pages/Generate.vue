<template>
  <main id="generate-page">
    <section>
      <upload-button
        @file-uploaded="setImage"
        text="UPLOAD"
        name="upload-button"
      />
      <!-- TODO feature: add a save button here to save the colors in json, csv or the svg  -->
    </section>
    <!-- This will be the canvas to draw the image -->
    <canvas id="image-canvas" height="100" width="100"></canvas>
    <!-- This will be the svg we generate and draw our colors onto -->
    <svg id="generated-svg"></svg>
  </main>
</template>

<script>
import Button from "../molecules/UploadButton.vue";
import { ColorService } from "../services/ColorService";

export default {
  name: "Generate",
  components: {
    "upload-button": Button,
  },
  methods: {
    setImage(image) {
      this.drawImage(image.url);
    },

    drawImage(image) {
      // create a new HTMLImageElement for drawImage
      const img = new Image(100, 100);
      img.src = image;
      // wait for the image to load otherwise it paints a blank img
      img.onload = () => {
        this.context.drawImage(img, 0, 0, 100, 100);
        const imageData = this.context.getImageData(0, 0, 100, 100);
        const colorService = new ColorService(imageData.data)

        colorService.generateSVG()
      };
    },
  },
  data() {
    return {
      canvas: {},
      context: {},
    };
  },
  mounted() {
    this.canvas = document.getElementById("image-canvas");
    this.context = this.canvas.getContext("2d");
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