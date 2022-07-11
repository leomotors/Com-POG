<script setup lang="ts">
defineProps<{ showModal: boolean; onClickOutside: () => void }>();
</script>

<template>
  <div
    v-show="showModal"
    class="fixed inset-0 z-50 bg-[#C4C4C4]/[0.8] backdrop-blur-sm"
    @click="onClickOutside"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-100 dark:bg-slate-700 shadow-xl"
      @click.stop
    >
      <slot />
    </div>
  </div>
</template>
