import axios from "axios";
import { getCookie } from "../../useCookie";
const URL = import.meta.env.VITE_API_URL;
async function getGeneralPosts() {
  try {
    const token = getCookie("jwt_user");

    const response = await axios.get(`${URL}/posts`, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response.data);
    return response.data.posts;
  } catch (error) {
    console.warn(error);
  }
}

export default getGeneralPosts;
