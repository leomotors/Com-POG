import { defineComponent, ref } from "vue";

import clsx from "clsx";

import Modal from "$components/Modal";

const btnClsx =
  "cursor-pointer rounded-xl transition-colors py-2 px-4 text-lg font-bold text-white";

const Spoiler = defineComponent({
  setup(props, { slots }) {
    const showModal = ref<0 | 1 | 2>(0);

    function clickOutside() {
      showModal.value = 0;
    }

    return () => (
      <>
        <div
          class={clsx("w-fit cursor-pointer", showModal.value < 2 && "blur-sm")}
          onClick={
            showModal.value < 2 ? () => (showModal.value = 1) : undefined
          }
        >
          <div class={showModal.value < 2 && "pointer-events-none"}>
            {slots.default?.()}
          </div>
        </div>

        <Modal showModal={showModal.value == 1} onClickOutside={clickOutside}>
          <div class="mx-auto h-full w-[50vw] p-4">
            <p class="text-center text-3xl font-bold">
              คุณแน่ใจหรือไม่ว่าต้องการดูเฉลย
            </p>
            <p class="text-center">ลองทำเองก่อนเถอะ</p>

            <div class="flex justify-evenly">
              <button
                onClick={clickOutside}
                class={clsx(btnClsx, "bg-slate-800 hover:bg-slate-900")}
              >
                ยกเลิก
              </button>
              <button
                onClick={() => (showModal.value = 2)}
                class={clsx(btnClsx, "bg-pink-900 hover:bg-pink-700")}
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
});

export default Spoiler;
