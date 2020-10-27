<template>
  <button class="outlined-button" type="button" v-bind:name="name">
    <img v-if="loading" class="loading" src="../assets/loading.svg" />
    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    name: String,
    loading: Boolean
  },
};
</script>

<style scoped>
.outlined-button {
  height: 64px;
  min-width: 200px;
  background: white;
  border-radius: 32px;
  border: 3px solid var(--primary-color);
  color: var(--primary-color);
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.outlined-button:hover {
  color: var(--primary-dark-color);
  border-color: var(--primary-dark-color);
}

.outlined-button:focus {
  outline: none;
  box-shadow: var(--button-focus);
}

.outlined-button:active {
  background: var(--primary-light-color);
  color: var(--primary-dark-color);
  border-color: var(--primary-dark-color);
}

.loading {
  height: 40px;
}
</style>