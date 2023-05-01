<template>
  <div class="relative text-lg w-30">
    <div
      class="dropdown-lang"
      @click="isOptionsExpanded = !isOptionsExpanded"
      @blur="isOptionsExpanded = false"
    >
      <div>
        <p class="flex gap-1">
          <span>{{ selectedOption }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.464"
            height="16.462"
            viewBox="0 0 16.464 16.462"
          >
            <path
              id="Path_100"
              data-name="Path 100"
              d="M13.987,2.352A8.137,8.137,0,0,0,8.169,0h0A8.231,8.231,0,0,0,2.476,14.11a8.63,8.63,0,0,0,5.694,2.352h0a8.552,8.552,0,0,0,5.941-2.476A8.216,8.216,0,0,0,13.987,2.352ZM8.541,5.2a21.937,21.937,0,0,0,2.971-.124,19.813,19.813,0,0,1,.371,2.847H8.541Zm0-.5V.619a1.572,1.572,0,0,1,.866.5,4.267,4.267,0,0,1,1.238,1.609c.248.619.5,1.238.743,1.98A21.826,21.826,0,0,0,8.541,4.7ZM7.922.619V4.7A20.08,20.08,0,0,1,5.075,4.58a10.892,10.892,0,0,1,.619-1.857A3.58,3.58,0,0,1,7.922.619Zm0,4.58V7.922H4.7a10.55,10.55,0,0,1,.371-2.847A19.209,19.209,0,0,0,7.922,5.2ZM4.085,7.922H.5a7,7,0,0,1,.99-3.466,15.312,15.312,0,0,0,2.971.5A12.207,12.207,0,0,0,4.085,7.922Zm0,.619a12.207,12.207,0,0,0,.371,2.971,17.507,17.507,0,0,0-2.971.5A9.179,9.179,0,0,1,.5,8.54Zm.619,0H7.922v2.723a21.937,21.937,0,0,0-2.971.124A22.1,22.1,0,0,1,4.7,8.54Zm3.218,3.218v4.085a1.572,1.572,0,0,1-.866-.5,4.267,4.267,0,0,1-1.238-1.609c-.248-.619-.5-1.238-.743-1.98Zm.619,4.085V11.759a20.08,20.08,0,0,1,2.847.124,10.892,10.892,0,0,1-.619,1.857C10.026,14.977,9.283,15.719,8.541,15.843Zm0-4.58V8.54h3.218a10.55,10.55,0,0,1-.371,2.847A19.21,19.21,0,0,0,8.541,11.264ZM12.254,8.54h3.589a7,7,0,0,1-.99,3.466,15.311,15.311,0,0,0-2.971-.5A13,13,0,0,0,12.254,8.54Zm0-.619a12.207,12.207,0,0,0-.371-2.971,17.507,17.507,0,0,0,2.971-.5,8.058,8.058,0,0,1,.99,3.466H12.254Zm1.362-5.2c.371.371.743.866,1.114,1.238a15.628,15.628,0,0,1-2.723.5c-.371-.743-.619-1.485-.99-2.1A4.1,4.1,0,0,0,9.9.743,7.79,7.79,0,0,1,13.615,2.723ZM2.723,2.847a7.373,7.373,0,0,1,2.6-1.733C5.694.99,6.189.866,6.56.743A4.8,4.8,0,0,0,5.323,2.476a5.469,5.469,0,0,0-.743,1.98,15.628,15.628,0,0,1-2.723-.5A6.8,6.8,0,0,1,2.723,2.847Zm.124,10.892c-.371-.371-.743-.866-1.114-1.238a15.627,15.627,0,0,1,2.723-.5L5.2,14.234a9.032,9.032,0,0,0,1.114,1.609A13,13,0,0,1,2.847,13.739Zm10.892-.248a7.373,7.373,0,0,1-2.6,1.733c-.371.124-.866.248-1.238.371a4.8,4.8,0,0,0,1.238-1.733c.248-.619.5-1.238.743-1.98a15.628,15.628,0,0,1,2.723.5A3.854,3.854,0,0,1,13.739,13.492Z"
              transform="translate(0.001)"
              fill="#fff"
            />
          </svg>
        </p>
      </div>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
        :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
    <transition
      enter-active-class="transform transition duration-500 ease-custom"
      enter-class="-translate-y-1/2 scale-y-0 opacity-0"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"
      leave-active-class="transform transition duration-300 ease-custom"
      leave-class="translate-y-0 scale-y-100 opacity-100"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
      <ul
        v-show="isOptionsExpanded"
        class="absolute left-0 right-0 mb-4 bg-custom-dark-blue divide-y rounded-lg shadow-lg overflow-hidden"
      >
        <li
          v-for="(option, index) in options"
          :key="index"
          class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 text-white text-xs cursor-pointer font-light"
          @mousedown.prevent="setOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
export default {
  name: "navbar-lang",
  data() {
    return {
      options: ["English", "Spanish"],
      isOptionsExpanded: false,
      selectedOption: "English",
    };
  },
  methods: {
    setOption(option) {
      this.selectedOption = option;
      this.isOptionsExpanded = false;
    },
  },
};
</script>
<style>
.dropdown-lang {
  @apply flex items-center justify-between px-3 py-2 bg-custom-dark-blue text-white w-full rounded-lg text-xs cursor-pointer font-light;
}
</style>
