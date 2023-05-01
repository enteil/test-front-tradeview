<template>
  <div class="md:m-0 mx-4">
    <div class="grid md:grid-cols-12 grid-cols-1">
      <div
        class="md:col-span-5 sm:col-span-1 p-0 md:block flex-row items-center md:items-start sm:p-4"
      >
        <img class="h-10 mb-4 md:mx-0 mx-auto" :src="logoWhite" alt="" />
        <div class="text-white text-sm space-y-1.5 md:text-left text-center">
          <p class="font-extralight">
            <strong>Tradeview Markets</strong> | Grand Cayman, KY1-1002, 4th
            Floor <br />
            Harbour Place | 103 South Church St, PO Box 1105
          </p>
          <p class="font-extralight">
            <strong>Main Oﬃce: </strong>+1 345 945 6271
          </p>
          <p class="font-extralight">
            <strong>Direct Phone: </strong>+1 345 946 4532
          </p>
          <p class="font-extralight">
            <strong>Website: </strong>
            <u class="cursor-pointer">www.tvmarkets.com</u>
          </p>
        </div>
        <div
          class="mt-10 space-y-4 md:text-start text-center mx-auto md:mb-0 mb-8"
        >
          <p class="font-thin text-white text-xs tracking-much-widest">
            FIND US ON:
          </p>
          <div class="flex gap-4 md:justify-start justify-center">
            <img
              v-for="(item, index) in socialMediaLogos"
              :key="index"
              class="cursor-pointer max-h-4 max-w-4"
              :src="item.logo"
              :alt="item.name"
              :title="item.name"
              @click="GoTo(item.link)"
            />
          </div>
        </div>
      </div>
      <div class="md:col-span-7 sm:col-span-1 md:m-0 mx-4 md:px-6">
        <div
          class="border-2 border-custom-grey-2 flex flex-col md:flex-row items-center py-10 justify-center"
        >
          <div class="grid md:grid-cols-12 sm:grid-cols-1 gap-4 space-y-4">
            <div
              class="md:col-span-4 sm:col-span-1 flex items-center justify-center md:border md:border-transparent md:border-r-white"
            >
              <img class="h-12" :src="surfLogo" alt="" />
            </div>

            <div
              class="md:col-span-8 sm:col-span-1 flex align-middle items-center text-center justify-center"
            >
              <p class="text-white">
                Find daily trading insights and understand what <br />
                is behind the latest waves in financial markets.
              </p>
            </div>
            <div class="md:col-span-8 sm:col-span-1">
              <input
                class="bg-custom-dark-grey border border-custom-light-grey py-2 px-4 w-full placeholder-custom-light-grey text-custom-light-grey outline-none font-extralight"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div class="md:col-span-4 sm:col-span-1">
              <button
                class="text-white bg-custom-grey border border-custom-grey w-full py-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 mt-16">
          <div class="col-span-4 space-y-5">
            <div v-for="(item, index) in footer.options1" :key="index">
              <p
                class="cursor-pointer text-custom-grey-3 text-xs tracking-much-widest"
              >
                <u>{{ item.name }}</u>
              </p>
            </div>
          </div>
          <div class="col-span-8">
            <div class="grid grid-cols-2">
              <div class="col-span-1">
                <div
                  class="font-extralight"
                  v-for="(item, index) in footer.options2"
                  :key="index"
                >
                  <div class="mb-8" v-if="isPar(index)">
                    <p
                      class="text-custom-grey-3 tracking-much-widest text-sm mb-3"
                    >
                      {{ item.name }}
                    </p>
                    <p
                      v-for="(item2, index2) in item.subNames"
                      :key="index2"
                      class="text-white text-sm mb-3"
                    >
                      {{ item2.name }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-span-1">
                <div
                  class="font-extralight"
                  v-for="(item, index) in footer.options2"
                  :key="index"
                >
                  <div class="mb-8" v-if="!isPar(index)">
                    <p
                      class="text-custom-grey-3 tracking-much-widest text-sm mb-3"
                    >
                      {{ item.name }}
                    </p>
                    <p
                      v-for="(item2, index2) in item.subNames"
                      :key="index2"
                      class="text-white text-sm mb-3"
                    >
                      {{ item2.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:col-span-12">
        <div class="w-full border-b border-custom-grey-3 my-8" />
        <p class="text-sm text-custom-grey-footer">
          <strong
            >IMPORTANT NOTICE TO CLIENTS REGARDING CRYPTO CURRENCY PROHIBITION.
          </strong>
          Please be advised that Tradeview Markets does not accept
          cryptocurrency for deposit into client accounts. All deposits to
          client accounts must be made in fiat currency, such as USD, JPY, EUR,
          GBP, CAD and MXN. Clients using third party payment providers are
          prohibited from depositing cryptocurrency into the Tradeview Markets
          account with the third party payment provider and then converting the
          crypto currency to fiat currency for further deposit into their
          account. Tradeview must be able to trace all deposits back to a
          regulated financial institution. Violations of this anti-money
          laundering compliance provision regarding the use of crypto currency
          as a source for deposit into your Tradeview Markets account will
          result in the immediate liquidation of all open positions in your
          account and the permanent closure of your account.
        </p>

        <div class="w-full border-b border-custom-grey-3 my-8" />
        <p class="text-sm text-custom-grey-footer">
          There is a risk of loss in trading foreign currencies and it is not
          suitable for everyone. We are compensated for our services through the
          bid-ask spread. Tradeview is not responsible for any gains or losses
          on currency rates or exchanges during any transaction.
          <br />
          Copyright© 2022. All rights reserved.
          <br />
          <br />
          The services and products offered by Tradeview Markets are not being
          offered within the United States (US) and not being oﬀered to US
          Persons, as defined under US law. The information on this website is
          not directed to residents of any country where FX and/or CFDs trading
          is restricted or prohibited by local laws or regulations.
        </p>
        <p class="text-sm text-white font-semibold cursor-pointer">
          <br />
          Terms and Conditions | Privacy Policy | AML Policy | Withdrawal Policy
          | Refund Policy | Risk Disclosure | FAQ
        </p>
      </div>
    </div>
    <div class="w-full border-b border-custom-grey-3 mt-8 mb-12" />
    <div class="grid md:grid-cols-2 sm:grid-cols-1 md:gap-14">
      <div class="col-span-1">
        <div v-for="(item, index) in brands" :key="index">
          <div class="mb-14" v-if="isPar(index)">
            <FooterBrandItems
              :title="item.title"
              :info="item.info"
              :headquarters="item.headquarters"
              :web="item.web"
            />
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div v-for="(item, index) in brands" :key="index">
          <div class="mb-14" v-if="!isPar(index)">
            <FooterBrandItems
              :title="item.title"
              :info="item.info"
              :headquarters="item.headquarters"
              :web="item.web"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FooterBrandItems from "./FooterBrandItems.vue";
export default {
  name: "footer-brands",
  components: {
    FooterBrandItems,
  },
  methods: {
    isPar(n) {
      if (n % 2 === 0) {
        return true;
      }
      return false;
    },
    GoTo(link) {
      window.location.href = link;
    },
  },
  data() {
    return {
      logoWhite: require("../../../assets/logo2.png"),
      surfLogo: require("../../../assets/surf-logo.png"),
      socialMediaLogos: [
        {
          name: "Twiter",
          link: "https://twitter.com/Tradeview_",
          logo: require("../../../assets/social-media-logos/twiter.png"),
        },
        {
          name: "Facebook",
          link: "https://www.facebook.com/TradeviewMarkets/",
          logo: require("../../../assets/social-media-logos/facebook.png"),
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/company/tradeview-forex/",
          logo: require("../../../assets/social-media-logos/linkedin.png"),
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/tradeviewmarkets/",
          logo: require("../../../assets/social-media-logos/instagram.png"),
        },
        {
          name: "YouTube",
          link: "https://www.youtube.com/@TradeviewMarkets",
          logo: require("../../../assets/social-media-logos/youtube.png"),
        },
      ],
      footer: {
        options1: [
          { name: "Forex" },
          { name: "Stocks" },
          { name: "Futures" },
          { name: "TradeGATEHUB" },
          { name: "Markets" },
          { name: "Pricing" },
          { name: "Introducing Brokers" },
          { name: "Education" },
          { name: "Contact US" },
        ],
        options2: [
          {
            name: "ACCOUNTS",
            subNames: [
              { name: "Open account" },
              { name: "Individual" },
              { name: "Joint" },
              { name: "Coroporate" },
            ],
          },
          {
            name: "SOFTWARE",
            subNames: [
              { name: "MetaTrader 4" },
              { name: "MetaTrader 5" },
              { name: "cTrader" },
              { name: "cTrader Copy" },
              { name: "CurreneX" },
            ],
          },
          {
            name: "ABOUT TRADEVIEW",
            subNames: [
              { name: "Our Story" },
              { name: "Our Team" },
              { name: "Our Vision" },
            ],
          },
          {
            name: "SUPPORT",
            subNames: [{ name: "Forms and Documents" }, { name: "FAQ" }],
          },
          {
            name: "COMPANY",
            subNames: [
              { name: "Why Tradeview" },
              { name: "Sponsorships" },
              { name: "Press" },
            ],
          },
        ],
      },
      brands: [
        {
          title: "Tradeview Ltd.",
          info: `Is licensed to carry on securities investment business and is regulated by the 
          Cayman Islands Monetary Authority (CIMA) as a full securities broker-dealer. (License 
          #585163) Tradeview conducts business pursuant to the Cayman Islands Securities 
          Investment Business Law (SIBL) and its activities fall under the direct supervision of 
          the Investments and Securities Division of CIMA.`,
          headquarters:
            "Grand Cayman, KY1-1002, 4th Floor Harbour Place | 103 South Church St, PO Box 1105.",
          web: "www.tradeviewforex.com",
        },
        {
          title: "TVM Global Ltd.",
          info: `Is licensed and regulated by the Labuan Financial Services Authority (FSA) as a 
          Money Broker, registration number LL15870 licensed to facilitate transactions in 
          foreign exchange pursuant to Labuan Financial Services and Securities Act 2010, the 
          Labuan Companies Act 1990 and the Labuan Business Activity Tax Act 1990.`,
          headquarters: `International Business Financial Centre at Office 5, Jamie Business 
            Center I, Unit F10, First Floor, Paragon Labuan, Jalan Mustapha, 87000 Labuan F.T.`,
          web: "www.tvmgloballtd.com",
        },

        {
          title: "Tradeview Europe Ltd.",
          info: `Is licensed as a Category 2 Investment Service Company and is regulated by the 
          Malta Financial Services Authority (MFSA). The Malta Financial Services Authority 
          (MFSA) is the single regulator for financial services in Malta. MFSA is a fully 
          autonomous public institution and reports to Parliament on an annual basis. The 
          MFSA is a member of the European Banking Authority (EBA), the European Securities 
          and Markets Authority (ESMA) and the International Organization of Securities 
          Commissions (IOSCO) and is a signatory of the Multilateral Memorandum of 
          Understanding with other European regulatory Institutions. Tradeview is authorized 
          to provide financial services across multiple asset classes and is passported in the 
          EU/EEA under MiFID II (EU Markets in Financial Instruments Directive).`,
          headquarters:
            "Grand Cayman, KY1-1002, 4th Floor Harbour Place | 103 South Church St, PO Box 1105.",
          web: "www.tradeviewforex.com",
        },

        {
          title: "Tradeview Financial Markets S.A.C Global",
          info: `Is authorized to conduct business pursuant to and in compliance with the General 
          Law of Companies (LGS) promulgated by the government of Peru. Tradeview 
          Financial Markets S.A.C is registered with the National Superintendence of Public 
          Registries (SUNARP), company number 13089531. Tradeview Financial Markets S.A.C 
          provides financial services in selected OTC derivative markets in compliance with all 
          applicable government regulations.`,
          headquarters: `Los Mirtos 239 Urb. San Eugenio, Lince, Lima, Perú.`,
          web: "www.tradeviewlatam.com",
        },
        {
          title: "iLC Brokers Ltd.",
          info: `iLC Brokers Ltd. is authorized under the Mauritius Financial Service Commission with 
          a Global Business License and Investment Dealer License #GB20025800 to provide 
          financial services to professional and non-professional clients.`,
          headquarters:
            "6 St. Denis Street, 1/F River Court, Port Louis 11328 Mauritius.",
          web: "www.ilcbrokers.com",
        },
        {
          title: "TVCM Limited (Tradeview UK)",
          info: `Is a limited company registered in England & Wales under Company Number 
          08648747 and is authorised and regulated by the Financial Conduct Authority FRN: 
          990586`,
          headquarters: `85 Great Portland Street, London W1W 7LT.`,
          web: "www.tradeview.co.uk",
        },
      ],
    };
  },
};
</script>
headquarters web
