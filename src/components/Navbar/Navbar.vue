<template>
  <div class="fixed w-full">
    <div class="NavbarBody">
      <div class="NavbarBodyWrapper">
        <div class="flex items-center md:gap-10 gap-4">
          <img class="LogoNavbar" :src="imagenLogo" />
          <div
            class="NavbarOptionsBody"
            v-for="(item, index) in navbarOptions"
            :key="index"
          >
            <NavbarItem :name="item.name" />
          </div>
        </div>
        <div class="flex items-center gap-3">
          <NavbarLogin />
          <NavbarContact />
          <NavbarLan />
        </div>
      </div>
    </div>
    <div
      class="md:flex bg-gradient-to-b from-custom-dark-blue to-transparent h-24 hidden md:gap-24 md:py-4 md:px-10"
    >
      <div v-for="(item, index) in buttonOptions" :key="index">
        <p class="text-xs cursor-pointer text-white">
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarItem from "./NavbarItem.vue";
import NavbarLogin from "./NavbarLogin.vue";
import NavbarContact from "./NavbarContact.vue";
import NavbarLan from "./NavbarLan.vue";
export default {
  name: "navbar-component",
  components: {
    NavbarItem,
    NavbarLogin,
    NavbarContact,
    NavbarLan,
  },
  data() {
    return {
      imagenLogo: require("../../assets/logo.png"),
      navbarOptions: [
        { name: "FOREX" },
        { name: "STOCKS" },
        { name: "FUTURES" },
        { name: "TradaGateHub" },
      ],
      buttonOptions: [
        { name: "Markets" },
        { name: "Company" },
        { name: "Accounts" },
        { name: "Platforms" },
        { name: "Pricing" },
        { name: "Introducing Brokers" },
        { name: "Education" },
        { name: "Support" },
      ],
    };
  },
};
</script>
<style>
.LogoNavbar {
  @apply md:h-10 h-5;
}
.NavbarOptionsBody {
  @apply md:flex items-center hidden;
}
.NavbarBody {
  @apply p-4 bg-custom-dark-blue;
}
.NavbarBodyWrapper {
  @apply flex items-center mx-auto justify-between md:pr-10 md:py-2 md:pl-4;
}
.NavbarBody {
  @apply p-4 bg-custom-dark-blue;
}
</style>
