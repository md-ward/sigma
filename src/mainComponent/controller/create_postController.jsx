import { create } from "zustand";
import postData from "../model/post_model";

const usePostStore = create((set) => ({

    posts: postData,
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    addPost: (post) => set((state) => ({
        posts: [post, ...state.posts],
    }))
}));

export default usePostStore;