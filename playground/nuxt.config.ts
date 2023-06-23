import * as dotenv from "dotenv";
dotenv.config();

export default defineNuxtConfig({
  modules: [
    "@henrotaymcorp/nuxt-modal",
    // "@deegital/nuxt-trustup-io-translations",
    "../src/module",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      appName: "trustup-pro",
    },
  },
  css: ["~/assets/css/main.css"],
  typescript: {
    strict: true,
  },
  ssr: false,

  devServer: {
    port: parseInt(process.env.APP_PORT || "3000"),
  },
  vite: {
    server: {
      hmr: {
        port: parseInt(process.env.WEBSOCKET_PORT || "24678"),
      },
    },
  },
});
