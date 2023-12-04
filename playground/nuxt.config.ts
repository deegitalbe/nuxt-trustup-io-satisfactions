import * as dotenv from "dotenv";
dotenv.config();

export default defineNuxtConfig({
  modules: [
    "@henrotaymcorp/nuxt-modal",
    "@deegital/nuxt-trustup-io-translations",
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
      trustupIoSatisfactionUrl:
        "https://trustup-io-satisfaction.docker.localhost",
    },
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      script: [
        {
          src: "https://kit.fontawesome.com/b6735ddc8e.js",
          crossorigin: "anonymous",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
    },
  },
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
