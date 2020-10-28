<template>
  <button class="outlined-button" type="button" :name="name">
    <img class="loading-animation" :src="src" :alt="alt"/>
  </button>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    loading: Boolean,
    src: String,
    alt: String,
  },
};
</script>

<style >
@import url("./Button.css");
</style>