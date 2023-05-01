<template>
  <p class="PrimaryTitleStyles">{{ text }}</p>
</template>
<script>
export default {
  name: "primary-title",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
