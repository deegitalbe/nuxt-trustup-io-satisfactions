import { satisfactionPlugin } from "@deegital/vue-3-trustup-io-satisfactions";
import { defineNuxtPlugin, useRuntimeConfig } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
  const { trustupIoSatisfactionUrl } = useRuntimeConfig().public;

  nuxtApp.vueApp.use(satisfactionPlugin, {
    url: trustupIoSatisfactionUrl,
  });
});
