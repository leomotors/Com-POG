<script setup lang="ts">
import { ref } from "vue";

import Modal from "$components/Modal";

const showModal = ref<0 | 1 | 2>(0);

function clickOutside() {
  showModal.value = 0;
}
</script>

<template>
  <div
    @click="showModal = 1"
    class="w-fit cursor-pointer rounded-xl border-2 border-red-500 bg-pink-900 p-2 transition-all hover:border-red-400"
  >
    กดเพื่อดูเฉลย
  </div>

  <Modal :showModal="showModal == 1" :onClickOutside="clickOutside">
    <div class="mx-auto h-full w-[50vw] p-4">
      <p class="text-center text-3xl font-bold">
        คุณแน่ใจหรือไม่ว่าต้องการดูเฉลย
      </p>
      <p class="text-center">ลองทำเองก่อนเถอะ</p>

      <div class="flex justify-evenly">
        <div
          @click="clickOutside"
          class="w-fit cursor-pointer rounded-xl border border-black bg-slate-900 p-2 text-white"
        >
          ยกเลิก
        </div>
        <div
          @click="showModal = 2"
          class="w-fit cursor-pointer rounded-xl border border-red-500 bg-pink-900 p-2 text-white"
        >
          ยืนยัน
        </div>
      </div>
    </div>
  </Modal>

  <Modal :showModal="showModal == 2" :onClickOutside="clickOutside">
    <div class="flex h-full max-h-[98vh] w-[50vw] flex-col p-4">
      <p class="text-center text-4xl font-bold">เฉลย</p>

      <div class="flex-1 overflow-y-auto">
        <slot />
      </div>
    </div>
  </Modal>
</template>
