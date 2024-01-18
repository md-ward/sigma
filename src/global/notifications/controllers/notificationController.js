import axios from "axios";
import { getCookie } from "../../../useCookie";
const URL = import.meta.env.VITE_API_URL;

export async function getUserNotifications() {
  try {
    const response = await axios.get(`${URL}/account/notification`, {
      headers: {
        Authorization: getCookie("jwt_user"),
      },
    });
    console.log(response.data);
    return response.data.notifications;
  } catch (error) {
    throw error.response.data.errorMessage;
  }
}

export async function responedToFriendRequistNotification(
  notificationId,
  friendResponse,
) {
  try {
    const response = await axios.post(
      `${URL}/account/notification/friendResponse`,
      {
        data: {
          notificationId,
          friendResponse,
        },
        headers: {
          Authorization: getCookie("jwt_user"),
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data.errorMessage;
  }
}
