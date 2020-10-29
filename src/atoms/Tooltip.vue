<template>
  <div v-show="showTooltip" class="tooltip-container">
    <div class="tooltip-body">
      <h6 class="tooltip-text">{{ text }}</h6>
      <flat-button @click="dismissTooltip" text="DISMISS"/>
    </div>
  </div>
</template>

<script>
import FlatButton from '../atoms/buttons/FlatButton.vue'

export default {
  name: "Tooltip",
  props: {
    fill: String,
    height: String,
    width: String,
    text: String,
  },
  components: {
    'flat-button': FlatButton
  },
  data() {
    return {
      showTooltip: true
    }
  },
  methods: {
    dismissTooltip() {
      // TODO - add a fade out transition here 
      this.showTooltip = false
    }
  }
};
</script>

<style scoped>
/* TODO - add fade in and out transistions for thisf */
.tooltip-body {
  color: var(--off-white);
  padding: 10px;
}

.tooltip-text {
  padding: 5px;
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