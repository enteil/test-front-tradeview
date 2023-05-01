<template>
  <label class="w-full">
    <div class="InputLabelStyles">{{ label }}</div>
    <input
      class="InputStyles"
      v-bind="$attrs"
      type="text"
      v-on="$listeners"
      :value="value"
      @input="$emit('update', $event.target.value)"
    />
  </label>
</template>
<script>
export default {
  name: "text-input",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  model: {
    prop: "value",
    event: "update",
  },
};
</script>
