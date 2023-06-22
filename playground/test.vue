<template>
  <CenteredModal>
    <form class="bg-white w-5 h-5">
      <h1>{{ name }}</h1>
    </form>
  </CenteredModal>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
