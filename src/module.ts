import {
  defineNuxtModule,
  addImports,
  createResolver,
  // addPlugin,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@deegital/nuxt-trustup-io-satisfactions",
    configKey: "nuxtTrustupIoSatisfactions",
  },
  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);
    _nuxt.options.css.push("@deegital/vue-3-trustup-io-satisfactions");
    addImports([
      {
        name: "useCreateNoteModal",
        from: resolve("./runtime/composables/useCreateNoteModal"),
      },
      {
        name: "useEditNoteModal",
        from: resolve("./runtime/composables/useEditNoteModal"),
      },
      {
        name: "useEditSatisfaction",
        from: "@deegital/vue-3-trustup-io-satisfactions",
      },
    ]);
    // addPlugin(resolve("./runtime/plugins/satisfactionPlugin"));
  },
});
