import { create } from "zustand";

const useRegisterStore = create((set) => ({
    isLogIn: true,
    //   content: null,
    toSingup: (content) => set({ isLogIn: false }),
    toLogin: () => { set({ isLogIn: true });},
}));

export default useRegisterStore;