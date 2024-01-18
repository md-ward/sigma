import { useEffect } from "react";
import useProfileStore from "../store/useProfileStore";
import { Post } from "../../home/widget/posts";
import { formatBirthDay } from "../../global/formatTime";

const ProfilePage = () => {
  const {
    handleFetchPersonalProfileDetails,
    personalProfileDetails,
    personalProfilePosts,
  } = useProfileStore((state) => ({
    personalProfileDetails: state.personalProfileDetails,
    personalProfilePosts: state.personalProfilePosts,
    handleFetchPersonalProfileDetails: state.handleFetchPersonalProfileDetails,
  }));

  useEffect(() => {
    handleFetchPersonalProfileDetails();
  }, [handleFetchPersonalProfileDetails]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-800">
        <img
          src={personalProfileDetails.coverImage.originalUrl}
          alt="profile cover image"
          className="h-56 w-full object-cover"
        />
      </div>
      <div className="mx-auto flex w-full px-4 py-8">
        <div className="sticky top-0 h-fit rounded-lg bg-white p-6 shadow-md">
          {/* personal details */}
          <div className="flex items-center space-x-4">
            <div className="h-24 w-24">
              <img
                src={personalProfileDetails.profileImage.originalUrl}
                alt="user profile image"
                className="h-full w-full rounded-full object-cover"
              />
            </div>{" "}
            <div>
              <div className="ml-3">
                <h1 className="text-3xl font-bold">
                  {personalProfileDetails.user.first_name +
                    " " +
                    personalProfileDetails.user.last_name}
                </h1>
                <p className="text-gray-500">
                  @{personalProfileDetails.user_name}
                </p>
              </div>
              <p className="mt-2 text-gray-600">
                <span className="font-bold">Account status:</span>{" "}
                {personalProfileDetails.user.accountStatus}
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-bold">Email:</span>{" "}
                {personalProfileDetails.user.email}
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-bold">Bio:</span> Software Developer
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-bold">Birthday:</span>{" "}
                {formatBirthDay(personalProfileDetails.user.dateOfBirth)}
              </p>
            </div>
          </div>{" "}
          {/* Friends section */}
          <div className="mt-8 ">
            <h3 className="mb-4 text-2xl font-bold">Friends</h3>
            <ul className="flex flex-wrap space-x-4">
              {personalProfileDetails.friends.map((friend) => (
                <li key={friend._id}>
                  <span
                    className="flex items-center hover:cursor-pointer"
                    title={friend.user.first_name + " " + friend.user.last_name}
                  >
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={friend.profileImage.originalUrl}
                      alt={friend.user.first_name}
                    />
                    <h1 className="ml-2 text-lg font-bold">
                      {friend.user.first_name + " " + friend.user.last_name}
                    </h1>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>{" "}
        {/* Personal Posts... */}
        <div className="mt-8 flex w-full flex-col items-center justify-center">
          <h3 className="mb-4 text-2xl font-bold">Posts</h3>
          {personalProfilePosts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
