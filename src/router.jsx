import { Route, Routes } from "react-router-dom";
import useRegisteringStore from "./registering/store/useRegisteringStore";
import RegistrationPage from "./registering/view/register_page";
import Layout from "./global/layouts/Layout";
import HomePage from "./home/view/homePage";
import ProfilePage from "./profile/view/profilePage";

const AppRouter = () => {
  return (
    <Routes >
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>


      </Route>
      <Route path="/register" element={<RegistrationPage />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default AppRouter;


//! user Protected Route..........
const ProtectedRoute = () => {
  const { isLogedIn } = useRegisteringStore((state) => ({ isLogedIn: state.isLogedIn }));


  return isLogedIn ? <Layout /> : <RegistrationPage />;
};




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
