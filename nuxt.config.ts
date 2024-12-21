
import { defineNuxtConfig } from "nuxt/config";
require('dotenv').config();

export default defineNuxtConfig({
  $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
  devtools: { enabled: true },
  css: ['./assets/css/tailwind.css'],
  modules: ["@nuxtjs/i18n",],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ["./locales"],
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{rel: "icon", href: "/icon.png"}]
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  runtimeConfig: {
    public: {
      registerApiKey: process.env.REGISTER_API_KEY,
      suggestionsApiKey:process.env.SUGGESTIONS_API_KEY
    },
  },
});
