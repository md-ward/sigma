import { create } from "zustand";
import {
  getPersonalProfileDetails,
  getUsersProfileDetails,
} from "../controller/profileController";
import { getPersonalProfilePosts } from "../../home/controller/postsController";

const useProfileStore = create((set) => ({
  isLoading: false,
  error: null,

  personalProfileDetails: {
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
  },

  personalProfilePosts: [
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
  ],

  otherUsersProfileDetails: {},

  handleFetchPersonalProfileDetails: async () => {
    const [personalProfileDetails, personalProfilePosts] = await Promise.all([
      getPersonalProfileDetails(),
      getPersonalProfilePosts(),
    ]);
    set({ personalProfileDetails, personalProfilePosts });
  },

  handleFetchOtherUsersProfileDetails: async (profileId) => {
    await getUsersProfileDetails(profileId).then((otherUsersProfileDetails) => {
      set({ otherUsersProfileDetails });
    });
  },
}));
export default useProfileStore;
