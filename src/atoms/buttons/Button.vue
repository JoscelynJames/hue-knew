<template>
  <button class="outlined-button" type="button" v-bind:name="name">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    name: String,
    loading: Boolean,
  },
};
</script>

<style >
@import url("./Button.css");
</style>