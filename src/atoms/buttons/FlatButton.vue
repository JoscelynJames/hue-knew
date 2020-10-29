<template>
    <button class="flat-button" :name="name">
      <span>{{ text  }}</span>
    </button>
</template>

<script>
export default {
  name: "FlatButton",
  props: {
    text: String,
    name: String,
  },
};
</script>

<style >
.flat-button {
  background: none;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  opacity: .5;
}

.flat-button:hover {
  cursor: pointer;
  background: var(--primary-mid-color);
}
</style>