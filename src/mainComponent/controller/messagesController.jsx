import { create } from "zustand";

const useMessageStore = create((set) => ({
  isOpen: false,
  contentId: 0,
  open: (id) => set({ isOpen: true, contentId: id }),
  close: () => set({ isOpen: false }),
}));

export default useMessageStore;