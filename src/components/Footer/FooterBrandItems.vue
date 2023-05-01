<template>
  <div>
    <p class="font-medium text-md text-white">
      <u>{{ title }}</u>
    </p>
    <p class="text-custom-grey-footer text-md font-thin">{{ info }}</p>
    <p class="text-custom-grey-footer text-md font-thin">
      <strong>Headquarters: </strong> {{ headquarters }}
    </p>
    <p class="text-white text-md font-thin">
      <strong class="text-custom-grey-footer">Website: </strong>
      <u class="cursor-pointer">{{ web }}</u>
    </p>
  </div>
</template>
<script lang="ts">
export default {
  name: "footer-brand-items",
  props: {
    title: String,
    info: String,
    headquarters: String,
    web: String,
  },
};
</script>
