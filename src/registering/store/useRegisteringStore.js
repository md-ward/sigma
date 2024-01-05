import { create } from "zustand";
import {
  loginController,
  signupController,
} from "../controller/registeringController";
import { getCookie, setCookie } from "../../useCookie";

const useRegisteringStore = create((set) => ({
  isLoading: false,
  isLogedIn: getCookie("jwt_user") || false,
  currentForm: true,
  isLogInForm: true,
  loginData: null,
  signupData: null,
  error: null,

  toggleLogInForm: () => {
    console.log("click");
    set((state) => ({ isLogInForm: !state.isLogInForm }));
    if (
      useRegisteringStore.loginData ||
      useRegisteringStore.signupData ||
      useRegisteringStore.error != null
    ) {
      set({ signupData: null, loginData: null, error: null });
    }
  },

  handleLoginSubmit: async (data) => {
    set({ isLoading: true });
    if (data.username === "" || data.password === "") {
      set(() => ({ error: "Please fill in all fields" }));
      return;
    }

    loginController(data)
      .then((jwt_user) => {
        setCookie("jwt_user", jwt_user);
        set(() => ({
          isLoading: false,
          loginData: data,
          error: null,
          isDialogOpen: false,
          currentForm: true,
          isLogedIn: true,
        }));
      })
      .catch((error) => {
        // Handle the login error
        console.error("Login failed:", error);
        set(() => ({ error: "Login failed. Please try again." }));
      });
  },
  handleSignupSubmit: (data) => {
    set({ isLoading: true });

    if (data.name === "" || data.password === "" || data.email === "") {
      set(() => ({ error: "Please fill in all fields" }));
      return;
    }
    signupController(data)
      .then((jwt_user) => {
        setCookie("jwt_user", jwt_user);
        set(() => ({
          isLoading: false,
          signupData: data,
          error: null,
          isDialogOpen: false,
          currentForm: true,
          isLogedIn: true,
        }));
      })
      .catch((error) => {
        console.error("Signup failed:", error);
        set(() => ({ error: "Signup failed. Please try again." }));
      });
  },
}));

export default useRegisteringStore;
