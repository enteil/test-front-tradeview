<template>
  <div class="desc-section">
    <div class="md:w-3/4 mx-auto">
      <div class="desc-section-grid">
        <div class="desc-section-grid-item">
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Leading Edge Technology</h3>
            <p class="text-lg font-light">
              Easy to use management tools, our fastest <br />
              possible execution and spreads as low as 0.0.
            </p>
          </div>
        </div>
        <div class="desc-section-grid-item">
          <img class="sm:w-15 md:w-25" :src="image2" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "descc-component",
  data() {
    return {
      image2: require("../../assets/image-2.png"),
    };
  },
};
</script>
<style>
.desc-section {
  @apply bg-gray-100 py-10 md:py-20;
}
.desc-section-grid {
  @apply grid grid-cols-12 gap-5 items-center;
}
.desc-section-grid-item {
  @apply col-span-12 md:col-span-6 md:items-start md:text-start items-center text-center;
}
</style>
