<template>
  <div class="features-section">
    <div class="mx-auto container py-10">
      <div class="features-section-grid">
        <div class="item" v-for="(item, index) in features" :key="index">
          <img class="w-9" :src="item.image" alt="" />
          <h2 class="title my-4 text-sm">{{ item.title }}</h2>
          <p class="text-xs font-extralight">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "features-component",
  data() {
    return {
      features: [
        {
          title: "Ideal for Beginner Clients",
          description:
            "Increase trading volumes as new traders gain comfort by following successful traders in forex markets and beyond into stocks, options, commodities, and more…",
          image: require("../../assets/feature-logos/plant.png"),
        },
        {
          title: "Low Barriers to Entry",
          description:
            "CommuniTraders software is free and clients can start with just a $100 minimum investment.",
          image: require("../../assets/feature-logos/candado.png"),
        },
        {
          title: "Simple Interface",
          description:
            "A simple GUI provides needed features and tools but isn’t bogged down by non-core features. This allows clients to get setup quickly and start trading.",
          image: require("../../assets/feature-logos/magic.png"),
        },
        {
          title: "No Long-Term Commitments",
          description:
            "Clients can easily signup to start, change signal providers, or stop the service. There is no long-term lockup.",
          image: require("../../assets/feature-logos/toc.png"),
        },
        {
          title: "Funds Safety",
          description:
            "CommuniTraders benefits from the same strong regulation and banking partners standalone Tradeview clients enjoy along with transparency and negative balance protection.",
          image: require("../../assets/feature-logos/magic.png"),
        },
        {
          title: "Tradeview Runs CommuniTrader",
          description:
            "You will experience the Tradeview service you know and love, no gimmicks or hidden fees, excellent live customer support, and your dedicated account manager.  ",
          image: require("../../assets/feature-logos/award.png"),
        },
      ],
    };
  },
};
</script>
<style>
.features-section {
  @apply bg-white md:p-0 p-8;
}
.features-section-grid {
  @apply grid grid-cols-12 gap-5;
}
.features-section-grid .item {
  @apply lg:col-span-4 md:col-span-6 col-span-12 shadow-lg rounded-none pt-6 px-6 pb-9;
}
.features-section-grid .item .title {
  @apply text-red font-bold;
}
</style>
