<template>
  <button type="button" :name="name">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    name: String,
  },
};
</script>

<style scoped>
button {
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

button:hover {
  color: var(--primary-dark-color);
  border-color: var(--primary-dark-color);
}

button:focus {
  outline: none;
  box-shadow: var(--button-focus);
}

button:active {
  background: var(--primary-light-color);
  color: var(--primary-dark-color);
  border-color: var(--primary-dark-color);
}
</style>