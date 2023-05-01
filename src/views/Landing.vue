<template>
  <div>
    <Navbar />
    <Main />
    <Features />
    <Descc />
    <Account />
    <div class="footer py-10 bg-custom-dark-grey">
      <div class="mx-auto container">
        <FooterBrands />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Main from "@/components/Main/Main.vue";
import Features from "@/components/Features/Features.vue";
import Descc from "@/components/Descc/Descc.vue";
import Account from "@/components/Account/Account.vue";
import FooterBrands from "@/components/Footer/FooterBrands.vue";

export default {
  name: "landing-page",
  components: { Navbar, Main, Features, Descc, Account, FooterBrands },
  methods: {
    GoTo(link) {
      window.location.href = link;
    },
  },
};
</script>
<style>
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
