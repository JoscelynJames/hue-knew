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
      this.$emit("file-uploaded", e.target.files[0])
    },
  },
  data() {
    return { loading: false };
  },
};
</script>

