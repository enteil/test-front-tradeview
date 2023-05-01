<template>
  <div class="cta-section">
    <div class="container mx-auto">
      <h2 class="main-section-title">Try CommuniTraders Now!</h2>
      <div class="main-section-cta md:w-1/2">
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
</template>
<script>
export default {
  name: "account-component",
};
</script>
<style>
.cta-section {
  @apply text-center bg-custom-dark-blue py-10;
}
</style>
