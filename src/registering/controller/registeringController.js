import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export async function loginController(loginData) {
  try {
    const response = await axios.post(`${API_URL}/register/login`, loginData, {
      withCredentials: true,
    });
    // Handle the successful login response
    // console.log(response.data);
    return response.data;
  } catch (error) {
    // Handle the login error
    console.error("Login failed:", error);
    throw error;
  }
}

export async function signupController(signupData) {
  try {
    const response = await axios.post(
      `${API_URL}/register/signUp`,
      signupData,
      {
        withCredentials: true,
      },
    );
    // Handle the successful login response
    const { data } = response;

    return data;
  } catch (error) {
    // Handle the login error
    console.warn("Login failed:", error.response.data.errorMessage);
    throw error.response;
  }
}
