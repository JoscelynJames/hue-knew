<template>
  <input @change="handleFileChange" type="file" id="image-upload" hidden/>
  <app-button @click="handleButtonClick" text="UPLOAD" name="upload-button"/>
</template>

<script>
import Button from "../atoms/Button.vue";

export default {
  name: "Generate",
  components: {
    "app-button": Button,
  },
  emits: ['file-uploaded'],
  methods: {
    handleButtonClick() {
      document.getElementById('image-upload').click()
    },

    handleFileChange(e) {
      const image = e.target.files
      if (!image) throw Error('No image was provided')

      this.$emit('file-uploaded', { image })
    }
  }
};
</script>

