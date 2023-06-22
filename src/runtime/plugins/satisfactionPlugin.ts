import { satisfactionPlugin } from "@deegital/vue-3-trustup-io-satisfactions";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(satisfactionPlugin);
});
