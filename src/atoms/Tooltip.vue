<template>
  <div class="tooltip-container">
    <div class="tooltip-body">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    fill: String,
    height: String,
    width: String,
    text: String,
  },
};
</script>

<style scoped>
foreignObject {
  height: 100%;
  width: 100%;
  x: 0;
  y: 0;
  padding: 30px 0px 0px 16px;
}

.tooltip-body {
  color: var(--off-white);
  padding: 10px;
}

.tooltip-container {
  position: relative;
  background: var(--primary-color);
  border-radius: 0.4em;
  margin-top: 20px;
  max-width: 300px;
}

.tooltip-container:after {
  content: "";
  position: absolute;
  top: 10px;
  left: 50%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-width: 0px 8px 12px;
  border-bottom-color: var(--primary-color);
  border-top: 0;
  margin-left: -10px;
  margin-top: -20px;
}
</style>