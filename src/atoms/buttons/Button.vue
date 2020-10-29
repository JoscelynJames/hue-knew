<template>
  <button class="outlined-button" type="button" :name="name">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    name: String
  },
};
</script>

<style >
@import url("./Button.css");
</style>