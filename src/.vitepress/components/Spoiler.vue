<script setup lang="ts">
import { ref } from "vue";

import Modal from "$components/Modal.vue";

let showModal = ref<0 | 1 | 2>(0);

function clickOutside() {
  showModal.value = 0;
}
</script>

<template>
  <div
    @click="showModal = 1"
    class="p-2 cursor-pointer w-fit rounded-xl border border-red-500 hover:border-red-400 transition-all"
  >
    กดเพื่อดูเฉลย
  </div>

  <Modal :showModal="showModal == 1" :onClickOutside="clickOutside">
    <div class="w-[50vw] h-full p-4 mx-auto">
      <p class="text-center font-bold text-3xl">
        คุณแน่ใจหรือไม่ว่าต้องการดูเฉลย
      </p>
      <p class="text-center">ของฝากนักกอล์ฟ</p>

      <div class="flex justify-evenly">
        <div
          @click="clickOutside"
          class="border border-black p-2 rounded-xl cursor-pointer w-fit"
        >
          ยกเลิก
        </div>
        <div
          @click="showModal = 2"
          class="p-2 rounded-xl border border-red-500 cursor-pointer w-fit"
        >
          กดเพื่อดูเฉลยจริง ๆ
        </div>
      </div>
    </div>
  </Modal>

  <Modal :showModal="showModal == 2" :onClickOutside="clickOutside">
    <div class="flex flex-col w-[50vw] h-full max-h-[98vh] p-4">
      <p class="text-center font-bold text-4xl">เฉลย</p>

      <div class="overflow-y-auto flex-1">
        <slot />
      </div>
    </div>
  </Modal>
</template>
