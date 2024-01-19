import { create } from "zustand";
import {
  addNewComment,
  getPostComments,
} from "../controller/commentsController";

const useCommentStore = create((set) => ({
  isLoading: false,
  error: null,
  comments: [],

  handleAddingNewComment: async (postId, commentText) => {
    try {
      set({ isLoading: true });
      const comment = await addNewComment(postId, commentText);
      set({
        isLoading: false,
        comments: [...useCommentStore.getState().comments, comment],
      });
    } catch (error) {
      console.log(error);
    }
  },

  handleFetchingPostComments: async (postId) => {
    try {
      set({ isLoading: true });
      const comments = await getPostComments(postId);
      set({ isLoading: false, comments });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useCommentStore;
