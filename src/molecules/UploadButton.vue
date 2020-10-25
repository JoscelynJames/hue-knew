<template>
  <input type="file" id="image-upload" hidden/>
  <app-button @click="handleButtonClick()" text="UPLOAD" name="upload-button"/>
</template>

<script>
import Button from "../atoms/Button.vue";

export default {
  name: "Generate",
  components: {
    "app-button": Button,
  },
  methods: {
    handleButtonClick() {
      document.getElementById('image-upload').click()
    }
  }
};
</script>

