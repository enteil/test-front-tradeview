<template>
  <div class="main-section">
    <div class="col-span-6 main-section-parallax-image" />
    <div class="col-span-6">
      <div class="main-section-wrapper">
        <img :src="comunityLogo" class="logo" />
        <div class="divider"></div>
        <h2 class="main-section-title">
          Tradeview’s <span class="font-bold">CommuniTraders</span> software
          lets our partners provide value-added copy trading to their clients.
        </h2>
        <div class="main-section-cta">
          <div class="item">
            <div class="label">Free Download for Tradeview Users</div>
            <button class="btn btn-secondary">Contact your Broker</button>
          </div>
          <div class="divider md:hidden block" />
          <div class="divider-vertical md:block hidden" />
          <div class="item">
            <div class="label">Don’t have a Tradeview Account yet?</div>
            <button class="btn btn-primary">Get a Free Demo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "main-component",
  data() {
    return {
      comunityLogo: require("@/assets/comunity-logo.png"),
    };
  },
};
</script>
<style>
.main-section {
  @apply md:grid md:grid-cols-12 min-h-screen flex items-center text-center bg-custom-dark-blue md:pt-12 pt-28;
}
</style>
<style>
.main-section-title {
  @apply text-white md:text-2xl font-light;
}
.main-section-wrapper {
  @apply md:w-2/3 mx-auto;
}
.main-section-wrapper .logo {
  @apply mx-auto mb-10 h-24;
}
.main-section-parallax-image {
  @apply bg-cover bg-no-repeat h-full;
  background-size: 50% auto;
  background-image: url(../../assets/main-image.png);
  background-attachment: fixed;
}
.main-section-cta {
  @apply flex flex-col md:flex-row items-center gap-2 md:gap-5 md:mt-5 md:my-0 my-8 mx-auto;
}
.main-section-cta .item {
  @apply md:w-full;
}
.main-section-cta .label {
  @apply text-neutral-400 text-sm font-light my-3;
}
</style>
