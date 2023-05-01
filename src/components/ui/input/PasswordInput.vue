<template>
  <label class="w-full">
    <div class="InputLabelStyles">{{ label }}</div>
    <input
      class="InputStyles"
      v-bind="$attrs"
      type="password"
      v-on="$listeners"
      :value="value"
      @input="$emit('update', $event.target.value)"
    />
  </label>
</template>
<script>
export default {
  name: "password-input",
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
      default: "password",
    },
  },
  model: {
    prop: "value",
    event: "update",
  },
};
</script>
