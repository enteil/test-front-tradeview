<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
const default_layout = "logged-out";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
};
</script>
<style>
@import "assets/style.css";
</style>
