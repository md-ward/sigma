import { create } from "zustand";

const useMessageStore = create((set) => ({
  isOpen: false,
//   content: null,
  open: (content) => set({ isOpen: true}),
  close: () => {
    // setTimeout(() => {
    //   set({ content: null });
    // }, 300);
    set({ isOpen: false });
  },
}));

export default useMessageStore;