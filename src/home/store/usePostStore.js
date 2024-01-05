import { create } from "zustand";
import getGeneralPosts from "../controller/postsController";

const usePostStore = create((set) => ({
  isLoading: false,
  error: null,
  posts: [],
  handleGettingGeneralPosts: async () => {
    try {
      set({ isLoading: true });
      const posts = await getGeneralPosts();
      set({ posts, isLoading: false });
    } catch (error) {
      set({ error });
    }
  },
}));
export default usePostStore;


