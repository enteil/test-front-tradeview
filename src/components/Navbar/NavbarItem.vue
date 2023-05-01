<template>
  <div class="NavbarOptionItem">
    {{ name }}
  </div>
</template>
<script lang="ts">
export default {
  name: "navbar-item",
  props: {
    name: String,
  },
};
</script>
<style>
.NavbarOptionItem {
  @apply text-white md:text-sm text-s8 flex items-center justify-center cursor-pointer font-bold tracking-widest;
}
</style>
