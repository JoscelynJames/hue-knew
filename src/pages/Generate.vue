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
    <svg id="bubbles-svg"></svg>
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
      this.image = image.url;
      // TODO: move this - this should happen reactivly when the image is updated
      this.drawImage();
    },

    drawImage() {
      // create a new HTMLImageElement for drawImage
      const img = new Image(100, 100);
      img.src = this.image;
      // wait for the image to load otherwise it paints a blank img
      img.onload = () => {
        this.context.drawImage(img, 0, 0, 100, 100);
        
        const imageData = this.context.getImageData(0, 0, 100, 100);
        this.colorService.setImageData(imageData.data);
        this.colorService.formatAndGroupColors(imageData.data);
      };
    },
  },
  data() {
    return {
      image: {},
      canvas: {},
      context: {},
      colorService: new ColorService(),
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