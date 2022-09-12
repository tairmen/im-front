import ua from "./locales/ua.js";
import en from "./locales/en.js";
import ru from "./locales/ru.js";
const langs = [
  {
    code: "en",
    name: "EN",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    code: "ru",
    name: "RU",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
  },
  {
    code: "ua",
    name: "UA",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
  },
];

let locales = { en, ua, ru };
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - immi-coin',
    title: 'immi-coin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap",
      },
    ]
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/login",
            method: "post",
            propertyName: "token",
          },
          user: {
            url: "/current",
            method: "get",
            propertyName: "data",
          },
        },
        tokenRequired: true,
        tokenType: "Bearer",
      },
    },

    redirect: {
      login: false,
      callback: "/login",
      logout: "/login",
      home: false,
    },
  },

  css: [
  ],

  plugins: [
    "~/plugins/envstore",
    "~/plugins/axios",
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
    [
      "@nuxtjs/dotenv",
      {
      },
    ],
  ],

  modules: [
    "@nuxtjs/axios", "@nuxtjs/i18n", "@nuxtjs/auth"
  ],

  router: {
    middleware: ["auth"],
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: "#03D6A5",
        },
        light: {
          primary: "#03D6A5",
        }
      }
    }
  },

  i18n: {
    strategy: "no_prefix",
    locales: langs,
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: locales,
    },
  },

  build: {
  }
}
