#nuxt-trustup-io-satisfactions

nuxt-trustup-io-satisfactions

## Installation

```shell
yarn add @deegital/nuxt-trustup-io-satisfactions
```

## ENV

```
NUXT_PUBLIC_TRUSTUP_IO_SATISFACTION_URL
```


Add `@deegital/nuxt-trustup-io-satisfactions` to the `modules` section of `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  modules: [
    '@deegital/nuxt-trustup-io-satisfactions'
  ],
  nuxtTrustupIoSatisfactions: {
    // @TODO
  }
    runtimeConfig: {
    public: {
      trustupIoSatisfactionUrl: "",
    },
  },
})
```

That's it! You can now use `nuxt-trustup-io-satisfactions` in your Nuxt app ✨

## Usage
```Edition
... 


 // IMPORTANT !!
    <ModalsContainer />
  </div>
</template>

<script setup lang="ts">
// useEditNoteModal for editing existing note. args => note uuid 
const { open, onSuccess } = useEditNoteModal("1");
onSuccess((note) => console.log(note));
</script>
```
```Creation
... 


 // IMPORTANT !!
    <ModalsContainer />
  </div>
</template>

<script setup lang="ts">
// useCreateNoteModal to create a  note. args 
// MANDATORY ARGGUMENTS
const { open, onSuccess } = useCreateNoteModal({
    origin: Origin.MARKETPLACE,
    relatedToId: "1",
    createdById: 1,
    relatedToType: "user",
  });
onSuccess((note) => console.log(note));
```

## Development

```shell
./cli bootstrap #bootstrap project
./cli start #start project
./cli stop #stop project
./cli restart  #restart project
```
