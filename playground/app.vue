<template>
  <div
    class="h-screen w-screen flex items-center justify-center bg-gradient-to-br to-cyan-600 from-blue-500"
  >
    <Transition
      enter-from-class="opacity-0 scale-75"
      enter-active-class="transition-all transform duration-1000"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-active-class="transition-all transform duration-1000"
      leave-to-class="opacity-0 scale-75"
    >
      <div v-if="isReady">
        <div
          class="text-center p-8 rounded-full bg-white w-[650px] h-[650px] shadow-lg"
        >
          <div
            class="absolute top-5 right-5 py-1 px-2 bg-[#FF8A00] rounded-md text-white text-xs font-semibold cursor-pointer text-center"
          >
            <i class="fa-solid fa-plus font-s text-2xl" />
          </div>
          <div>
            <div class="text-[300px]">🎉</div>
            <div class="text-2xl text-gray-600 font-thin">
              Let's build something amazing !
              <button @click="open()">youhou</button>
            </div>
            <div>{{ $t("worksite-admin.sidebar.clients") }}</div>
          </div>
        </div>
      </div>
    </Transition>
    <ModalsContainer />
  </div>
</template>

<script setup lang="ts">
import { useEditSatisfaction } from "@deegital/vue-3-trustup-io-satisfactions";
import { onMounted, ref } from "#imports";
// import "@deegital/vue-3-trustup-io-satisfactions/dist/style.css";
import "@henrotaymcorp/vue-modal/dist/style.css";
// import "@deegital/vue-3-trustup-io-satisfactions/dist/style.css";
const isReady = ref<boolean>(false);

// const { open } = useModal(SayHello, {});
onMounted(() => (isReady.value = true));
const { open, onSuccess, close } = useEditSatisfaction("4");
onSuccess((note) => {
  console.log(note);
  close();
});
</script>
