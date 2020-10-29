<template>
  <main id="generate-page">
    <section id="button-section">
      <upload-button v-tooltip @file-uploaded="analyzeImageUploaded" :loading="loading" />
      <!-- TODO feature: add a save button here to save the colors in json, csv or the svg  -->
    </section>
    <section>
      <tooltip :text="getStartedTooltip"/>
    </section>
    <!-- This will be the canvas to draw the image -->
    <canvas id="image-canvas" hidden></canvas>
    <!-- This will be the svg we generate and draw our colors onto -->
    <svg id="generated-svg" height="100vh" width="100vw"></svg>
  </main>
</template>

<script>
import Button from "../molecules/UploadButton.vue";
import Tooltip from "../atoms/Tooltip.vue";
import { ColorService } from "../services/ColorService";
import { ImageService } from "../services/ImageService";

export default {
  name: "Generate",
  components: {
    "upload-button": Button,
    "tooltip": Tooltip,
  },
  methods: {
    async analyzeImageUploaded(image) {
      this.loading = true;
      const imageService = new ImageService(image, this.context);
      const imageData = await imageService.drawImage();
      const colorService = new ColorService(imageData.data);
  
      colorService.generateSVG();
      this.loading = false;
    },
  },
  data() {
    return {
      context: {},
      loading: false,
      getStartedTooltip: 'Get started by uploading an image. Click the button above to get started!'
    };
  },
  mounted() {
    const canvas = document.getElementById("image-canvas");
    this.context = canvas.getContext("2d");
  },
};
</script>

<style scoped>
#generate-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#button-section {
  margin: 72px 72px 0px 72px;
}

#generated-svg {
  position: absolute;
  z-index: -1;
}
</style>