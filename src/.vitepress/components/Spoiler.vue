<script setup lang="ts">
import { ref } from "vue";

import Modal from "$components/Modal.vue";

let showModal = ref<0 | 1 | 2>(0);

function clickOutside() {
  showModal.value = 0;
}
</script>

<template>
  <button @click="showModal = 1">กดเพื่อดูเฉลย</button>

  <Modal :showModal="showModal == 1" :onClickOutside="clickOutside">
    <div class="w-[50vw] h-full p-4">
      <p>ของฝากนักกอล์ฟ</p>
      <button @click="showModal = 2">กดเพื่อดูเฉลยจริง ๆ</button>
    </div>
  </Modal>

  <Modal :showModal="showModal == 2" :onClickOutside="clickOutside">
    <div class="w-[50vw] h-full p-4">
      <p>เฉลยจริงละ</p>
      <slot />
    </div>
  </Modal>
</template>
