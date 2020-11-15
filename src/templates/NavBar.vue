<template>
  <nav>
    <h3>Hue Knew</h3>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  height: 72px;
  box-shadow: var(--box-shadow-1);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-light-color);
  color: var(--text-on-primary-light);
}
</style>
