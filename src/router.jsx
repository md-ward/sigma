import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./mainComponent/view/main_page";
import RegistrationPage from "./registerationComponent/view/register_page";
import FriendsPage from "./mainComponent/view/friends_page";
import ProfilePage from "./mainComponent/view/personal_profile_page";
import { useId } from "react";
import AllMessagesPage from "./mainComponent/view/all_messages_page";

const PagesRouter = () => {
  let id = useId()
  return (
    <Routes key={id}>
      <Route element={<HomePage />} path="/" />
      <Route element={<AllMessagesPage />} path="/messages" />
      

      <Route element={<FriendsPage />} path="/friends" />
      <Route element={<RegistrationPage />} path="/register" />
      <Route element={<ProfilePage />} path="/profile" />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default PagesRouter;


const NoMatch = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen p-7">
        <h1 className="text-5xl font-bold text-dark-blue duration-500 transition-transform jump-and-shake">
          Error 404
        </h1>
        <p className="text-xl mt-4 ">Sorry, the page you requested could not be found.</p>

      </div>
    </>
  );
};
