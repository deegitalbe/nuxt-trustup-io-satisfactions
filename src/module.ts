import {
  defineNuxtModule,
  addImports,
  createResolver,
  addPlugin,
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
    _nuxt.options.css.unshift(
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
    addImports([
      {
        name: "Origin",
        from: resolve("./runtime/enums/Origin"),
      },
    ]);
    addPlugin(resolve("./runtime/plugins/satisfactionPlugin"), {
      append: true,
    });
  },
});
