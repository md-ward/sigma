import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faComment,
  faBookmark,
  faSearch,
  faGear,
  faBell,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import useProfileStore from "../../profile/store/useProfileStore";
import { useEffect, useState } from "react";
import useNotificationStore from "../notifications/store/useNotificationStore";

const Sidebar = () => {
  const { personalProfileDetails, handleFetchPersonalProfileDetails } =
    useProfileStore((state) => ({
      personalProfileDetails: state.personalProfileDetails,
      handleFetchPersonalProfileDetails:
        state.handleFetchPersonalProfileDetails,
    }));

  useEffect(() => {
    handleFetchPersonalProfileDetails();
  }, [handleFetchPersonalProfileDetails]);

  const menuItems = [
    { icon: faHome, to: "/", text: "Home", color: "bg-yellow-500" },
    { icon: faUsers, to: "/friends", text: "Friends", color: "bg-blue-500" },
    {
      icon: faComment,
      to: "/messages",
      text: "Messages",
      color: "bg-green-500",
    },
    { icon: faBookmark, to: "/saved", text: "Saved", color: "bg-purple-500" },
  ];

  const navigate = useNavigate();
  return (
    <div className=" ml-1 grid  grid-rows-3  gap-y-7   ">
      {/* search / name / username / cover image / user image */}
      <div
        className="relative  w-full  rounded-md border border-black hover:cursor-pointer  "
        title="Profile"
        onClick={() => navigate("/profile")}
      >
        {/* search bar */}
        <div className="absolute top-2   flex h-fit w-full items-center justify-center rounded-l-full rounded-r-lg   ">
          <input
            autoComplete="off"
            type="search"
            name="search"
            className="relative h-8 rounded-md border pl-8 pr-2 focus:border-dark-blue focus:outline-none"
            placeholder="Search"
          />
          <span className="absolute pl-2">
            <FontAwesomeIcon icon={faSearch} className="text-gray-200" />
          </span>
        </div>
        {/* user info */}
        <div className=" group absolute bottom-2 left-5 box-border flex h-fit w-[90%] items-center rounded-l-full rounded-r-lg border-black bg-gray-100/55 shadow-md  duration-200 ease-in-out hover:rounded-r-full hover:border hover:bg-white">
          {/* user personal image  */}
          <img
            src={personalProfileDetails.profileImage?.originalUrl}
            alt="user profile image"
            className="aspect-square h-20 rounded-full object-cover"
          />
          <div className="ml-3">
            {/* user name and username  */}
            <h1 className="text-lg font-bold">
              {personalProfileDetails.user.first_name +
                " " +
                personalProfileDetails.user.last_name}
            </h1>
            <p className="text-white duration-200 ease-in-out group-hover:text-black">
              @{personalProfileDetails.user_name}
            </p>
          </div>
        </div>
        {/* profile cover image   */}
        <img
          src={personalProfileDetails.coverImage?.originalUrl}
          alt="profile cover image"
          className="h-full rounded-md  bg-slate-50 object-cover object-center"
        />
      </div>

      {/* menu */}
      <ul className="flex h-full w-full flex-col  space-y-1 divide-y-2 overflow-hidden ">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer divide-x-2 rounded-lg bg-blue-300 shadow-md  [&_span]:text-white"
                : " flex  cursor-pointer  items-center   duration-200 ease-in-out hover:rounded-lg hover:bg-white hover:shadow-md "
            }
          >
            <li className="flex items-center gap-x-2 ">
              <FontAwesomeIcon
                icon={item.icon}
                className={` size-8  cursor-pointer  rounded-lg p-1 shadow-md    group-hover:${item.color} text-white  ${item.color}`}
              />
              <span className="select-none text-gray-600">{item.text}</span>
            </li>
          </NavLink>
        ))}
        <NotificationMenuItem />
      </ul>
      <div className="flex h-full w-full  items-center ">
        <div className="mx-3 flex  h-1/3 w-full cursor-pointer select-none items-center justify-center gap-3 rounded-3xl border border-black bg-white p-1 text-gray-400 duration-200 ease-in-out  hover:text-black hover:shadow-md">
          <FontAwesomeIcon icon={faGear} />
          <p>Settings & Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const NotificationMenuItem = () => {
  const [notificationCount, setNotificationCount] = useState(0);
  useNotificationStore.subscribe((state, prevState) => {
    setNotificationCount(
      useNotificationStore.getState().getNotificationsCount(),
    );
  });

  return (
    <NavLink
      to="/notifications"
      className={({ isActive }) =>
        isActive
          ? "cursor-pointer divide-x-2 rounded-lg bg-blue-300 shadow-md [&_span]:text-white"
          : "flex cursor-pointer items-center duration-200 ease-in-out hover:rounded-lg hover:bg-white hover:shadow-md"
      }
    >
      <li className="flex items-center gap-x-2">
        <FontAwesomeIcon
          icon={faBell}
          className="size-8 cursor-pointer rounded-lg bg-orange-500 p-1 text-white shadow-md group-hover:bg-orange-500"
        />
        <span className="select-none text-gray-600">Notifications</span>
        {notificationCount > 0 && (
          <p className="rounded-full bg-rose-500 px-2 text-center text-white ">
            {notificationCount}
          </p>
        )}
      </li>
    </NavLink>
  );
};
