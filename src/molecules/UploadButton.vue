<template>
  <!-- TODO: update this to only allow image types - add messaging for user -->
  <input @change="handleFileChange" type="file" id="image-upload" hidden />

  <loading-button
    v-if="loading"
    name="loading-button"
    src="src/assets/loading.svg"
    alt="LOADING..."
  />
  <outlined-button
    v-else
    @click="handleButtonClick"
    text="UPLOAD"
    name="upload-button"
  />
</template>

<script>
import Button from "../atoms/buttons/Button.vue";
import IconButton from "../atoms/buttons/IconButton.vue";

export default {
  name: "UploadButton",
  components: {
    "outlined-button": Button,
    "loading-button": IconButton,
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

      this.loading = true;
      setTimeout(() => {
        const url = URL.createObjectURL(image);
        this.$emit("file-uploaded", { url });
        this.loading = false;
      }, 2000);
    },
  },
  data() {
    return { loading: false };
  },
};
</script>

