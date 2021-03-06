import uz from "./locales/uz";
import en from "./locales/en";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    title: "Aziz Sobirov Developer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/css/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/aos", mode: "client" }],
  purgeCSS: {
    whitelist: [
      "aos-init",
      "aos-animate",
      "data-aos-delay",
      "data-aos-duration",
      "fade-up",
      "zoom-in",
    ],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "nuxt-animejs",
    "@nuxtjs/google-fonts",
  ],

  googleFonts: {
    download: true,
    families: {
      Poppins: [100, 300, 400, 500, 600, 700],
      Jost: [100, 300, 400, 500, 600, 700],
    },
  },

  pwa: {
    meta: {
      name: "Aziz Sobirov",
      description: "Portfolio Aziz Sobirov",
      theme_color: "#fafafa",
    },
    manifest: {
      name: "azizdev",
      lang: "en",
      langs: ["en", "uz"],
      short_name: "azizdev",
      description: "Portfolio Aziz Sobirov",
    },
    // pwa icon
    icon: {
      fileName: "logo.png",
      sizes: [64, 96, 128, 192, 256, 384, 512],
      purpose: "any",
    },
  },
  motions: {
    directives: {
      "pop-bottom": {
        initial: {
          scale: 0,
          opacity: 0,
          y: 100,
        },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0,
        },
      },
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/i18n",
      {
        locales: ["en", "uz"],
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: en,
            uz: uz,
          },
        },
      },
    ],
    // Simple usage
    "cookie-universal-nuxt",
    "nuxt-sweetalert2",
    "@nuxtjs/pwa",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    axios: {
      baseURL: "https://api.nuxtjs.dev",
    },
  },
};
