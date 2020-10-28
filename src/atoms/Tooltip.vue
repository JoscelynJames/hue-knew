<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 322 156"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.59668 140.022V31.0797C0.59668 22.7954 7.3124 16.0797 15.5967 16.0797H54.7851L68.7528 0.792542L81.0789 16.0797H306.464C314.748 16.0797 321.464 22.7954 321.464 31.0797V140.022C321.464 148.307 314.748 155.022 306.464 155.022H15.5967C7.31241 155.022 0.59668 148.307 0.59668 140.022Z"
      :fill="fill"
    />
  </svg>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    fill: String,
    height: String,
    width: String,
  }
};
</script>

<style scoped>
</style>