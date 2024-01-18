import { create } from "zustand";
import { getUserNotifications } from "../controllers/notificationController";

const useNotificationStore = create((set) => ({
  isLoading: false,
  error: null,
  notifications: [],
  handleFetchingNotifications: async () => {
    set({ isLoading: true });
    await getUserNotifications()
      .then((notifications) => {
        set({ notifications, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  },
}));
export default useNotificationStore;
