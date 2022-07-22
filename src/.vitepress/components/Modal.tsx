/** @jsx h */
import { FunctionalComponent, h } from "vue";

interface ModalProps {
  showModal: boolean;
  onClickOutside: () => void;
}

const MyModal: FunctionalComponent<ModalProps> = (
  { showModal, onClickOutside },
  { slots }
) => {
  if (showModal) {
    return (
      <div
        class="fixed inset-0 z-50 bg-[#C4C4C4]/[0.8] backdrop-blur-sm"
        onClick={onClickOutside}
      >
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-100 dark:bg-slate-700 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {slots.default?.()}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default MyModal;
