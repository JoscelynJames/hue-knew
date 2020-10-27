<template>
  <!-- TODO: update this to only allow image types - add messaging for user -->
  <input @change="handleFileChange" type="file" id="image-upload" hidden />
  <app-button
    @click="handleButtonClick"
    :loading="this.loading"
    text="UPLOAD"
    name="upload-button"
  />
</template>

<script>
import Button from "../atoms/Button.vue";

export default {
  name: "Generate",
  components: {
    "app-button": Button,
  },
  watch() {
    loading: false
  },
  emits: ["file-uploaded"],
  methods: {
    handleButtonClick() {
      document.getElementById("image-upload").click();
    },

    handleFileChange(e) {
      const image = e.target.files[0];
      // TODO: add file type validation here and provide user feedback
      if (!image) throw Error("No image was provided");

      this.loading = false
      setTimeout(() => {
        const url = URL.createObjectURL(image);
        this.$emit("file-uploaded", { url });
        this.loading = false
      }, 2000)
    },
  }
};
</script>

