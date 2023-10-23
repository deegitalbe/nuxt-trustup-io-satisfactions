import {
  defineNuxtModule,
  addImports,
  createResolver,
  addPlugin,
} from "@nuxt/kit";
import { defu } from "defu";

// save for later

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@deegital/nuxt-trustup-io-satisfactions",
    configKey: "nuxtTrustupIoSatisfactions",
  },
  defaults: {},
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.public.nuxtTrustupIoSatisfactions = defu(
      nuxt.options.runtimeConfig.public.nuxtTrustupIoSatisfactions,
      _options
    );
    nuxt.options.css.unshift(
      "@deegital/vue-3-trustup-io-satisfactions/dist/style.css"
    );
    addImports([
      {
        name: "useEditSatisfaction",
        from: "@deegital/vue-3-trustup-io-satisfactions",
      },
    ]);
    addImports([
      {
        name: "useCreateSatisfaction",
        from: "@deegital/vue-3-trustup-io-satisfactions",
      },
    ]);

    addPlugin(resolve("./runtime/plugins/satisfactionPlugin"), {
      append: true,
    });
  },
});
