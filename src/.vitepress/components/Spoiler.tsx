import { defineComponent, ref, onMounted } from "vue";
import clsx from "clsx";

import Modal from "$components/Modal";

const btnClsx =
  "cursor-pointer rounded-xl transition-colors py-2 px-4 text-lg font-bold text-white";

const Spoiler = defineComponent({
  setup() {
    const showModal = ref(false);

    function clickOutside() {
      showModal.value = false;
    }

    const elementId = "spoiler-" + Math.random();

    const onShowSpoiler = () => {
      showModal.value = true;
    };

    onMounted(() => {
      const element = document.getElementById(elementId) as HTMLDivElement;
      const next = element?.nextElementSibling;

      next?.classList.add("blur-sm", "select-none");
      next?.children[0]?.classList.add("pointer-events-none");

      next?.addEventListener("click", onShowSpoiler);
    });

    function showSpoiler() {
      showModal.value = false;

      const element = document.getElementById(elementId) as HTMLDivElement;
      const next = element?.nextElementSibling;

      next?.classList.remove("blur-sm", "select-none");
      next?.children[0]?.classList.remove("pointer-events-none");
      next?.removeEventListener("click", onShowSpoiler);
    }

    return () => (
      <>
        <Modal showModal={showModal.value} onClickOutside={clickOutside}>
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
                onClick={showSpoiler}
                class={clsx(btnClsx, "bg-pink-900 hover:bg-pink-700")}
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </Modal>

        {/* For referencing */}
        <div id={elementId} />
      </>
    );
  },
});

export default Spoiler;
