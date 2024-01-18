import { create } from "zustand";
import {
  getUserNotifications,
  markNotificationAsRead,
} from "../controllers/notificationController";

const useNotificationStore = create((set) => ({
  isLoading: false,
  error: null,
  notifications: [],
  handleFetchingNotifications: async () => {
    set({ isLoading: true });
    try {
      const notifications = await getUserNotifications();
      set({ notifications, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  },
  handleMarkNotificationAsRead: async (notificationId) => {
    try {
      const updatedNotification = await markNotificationAsRead(notificationId);
      set((state) => ({
        notifications: state.notifications.map((notification) =>
          notification._id === updatedNotification._id
            ? updatedNotification
            : notification,
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useNotificationStore;
