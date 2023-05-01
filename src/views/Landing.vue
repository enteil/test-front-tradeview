<template>
  <div>
    <Navbar />
    <div class="main-section">
      <div class="col-span-6 main-section-parallax-image" />
      <div class="col-span-6">
        <div class="main-section-wrapper">
          <img src="@/assets/comunity-logo.png" class="logo" />
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

    <div class="footer py-10 bg-custom-dark-grey">
      <div class="mx-auto container">
        <FooterBrands />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import FooterBrands from "@/components/Footer/FooterBrand/FooterBrands.vue";
export default {
  name: "landing-page",
  components: { Navbar, FooterBrands },
  methods: {
    GoTo(link) {
      window.location.href = link;
    },
  },
  data() {
    return {
      image2: require("../assets/image-2.png"),
      features: [
        {
          title: "Ideal for Beginner Clients",
          description:
            "Increase trading volumes as new traders gain comfort by following successful traders in forex markets and beyond into stocks, options, commodities, and more…",
          image: require("../assets/feature-logos/plant.png"),
        },
        {
          title: "Low Barriers to Entry",
          description:
            "CommuniTraders software is free and clients can start with just a $100 minimum investment.",
          image: require("../assets/feature-logos/candado.png"),
        },
        {
          title: "Simple Interface",
          description:
            "A simple GUI provides needed features and tools but isn’t bogged down by non-core features. This allows clients to get setup quickly and start trading.",
          image: require("../assets/feature-logos/magic.png"),
        },
        {
          title: "No Long-Term Commitments",
          description:
            "Clients can easily signup to start, change signal providers, or stop the service. There is no long-term lockup.",
          image: require("../assets/feature-logos/toc.png"),
        },
        {
          title: "Funds Safety",
          description:
            "CommuniTraders benefits from the same strong regulation and banking partners standalone Tradeview clients enjoy along with transparency and negative balance protection.",
          image: require("../assets/feature-logos/magic.png"),
        },
        {
          title: "Tradeview Runs CommuniTrader",
          description:
            "You will experience the Tradeview service you know and love, no gimmicks or hidden fees, excellent live customer support, and your dedicated account manager.  ",
          image: require("../assets/feature-logos/award.png"),
        },
      ],
    };
  },
};
</script>
<style>
.main-section {
  @apply md:grid md:grid-cols-12 min-h-screen flex items-center text-center bg-custom-dark-blue md:pt-12 pt-28;
}
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
  background-image: url(../assets/main-image.png);
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

.cta-section {
  @apply text-center bg-custom-dark-blue py-10;
}

.desc-section {
  @apply bg-gray-100 py-10 md:py-20;
}
.desc-section-grid {
  @apply grid grid-cols-12 gap-5 items-center;
}
.desc-section-grid-item {
  @apply col-span-12 md:col-span-6 md:items-start md:text-start items-center text-center;
}

.divider {
  @apply border-b border-neutral-600 my-3;
}
.divider-vertical {
  @apply border-r border-neutral-600;
  height: 120px;
  width: 1px;
}
.btn {
  @apply px-5 py-2 border-2 text-white truncate;
}
.btn.btn-primary {
  @apply bg-red border-red;
}
.btn.btn-primary:hover {
  @apply bg-transparent border-white;
}
.btn.btn-secondary {
  @apply border-white;
}
.btn.btn-secondary:hover {
  @apply bg-white bg-opacity-10;
}
</style>
