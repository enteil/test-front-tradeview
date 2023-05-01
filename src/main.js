import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import VueTailwind from "vue-tailwind";
import "./assets/style.css";
import LoggedOutLayout from "./layouts/LoggedOut.vue";
Vue.component("logged-out-layout", LoggedOutLayout);
Vue.use(VueTailwind, {});
Vue.config.productionTip = false;
console.log(
  "%cHola Coca Cola",
  "color: #333; font-size: 25px; font-weight: bold;"
);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
