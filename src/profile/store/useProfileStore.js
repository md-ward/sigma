import { create } from "zustand";
import {
  getPersonalProfileDetails,
  getUsersProfileDetails,
} from "../controller/profileController";
import { getPersonalProfilePosts } from "../../home/controller/postsController";
export const InitialPersonalProfilePosts = [
  {
    _id: "",
    user: {
      _id: "",
      first_name: "",
      last_name: "",
      profile: {
        _id: "",
        user_name: "",
        profileImage: {
          _id: "",
          originalUrl: "",
        },
      },
    },
    content: "",
    likes: [],
    attachedImages: [],
    comments: [],
    createdAt: "",
    updatedAt: "",
  },
];
export const InitialPersonalProfileDetails = {
  pendingFriendRequests: [],
  friends: [],
  user: {
    first_name: "",
    last_name: "",
  },
  user_name: "",
  profileImage: {
    originalUrl: "",
  },
  coverImage: {
    originalUrl: "",
  },
};
const useProfileStore = create((set) => ({
  isLoading: false,
  error: null,

  personalProfileDetails: InitialPersonalProfileDetails,
  personalProfilePosts: InitialPersonalProfilePosts,

  otherUsersProfileDetails: {},

  handleFetchPersonalProfileDetails: async () => {
    try {
      console.count("profile");
      const personalProfileDetails = await getPersonalProfileDetails();
      set({ personalProfileDetails });
    } catch (error) {
      console.warn(error);
    }
  },
  handleFetchingPersonalProfilePosts: async () => {
    try {
      const personalProfilePosts = await getPersonalProfilePosts();
      set({ personalProfilePosts });
    } catch (error) {
      console.warn(error);
      
    }
  },

  handleFetchOtherUsersProfileDetails: async (profileId) => {
    await getUsersProfileDetails(profileId).then((otherUsersProfileDetails) => {
      set({ otherUsersProfileDetails });
    });
  },
}));
export default useProfileStore;
