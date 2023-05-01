<template>
  <button class="PrimaryButtonStyles" @click="callback($event)" type="button">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "primary-button",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  methods: {
    callback: function (e) {
      this.$emit("click", e);
    },
  },
};
</script>
