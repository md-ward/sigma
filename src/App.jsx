import FriendsPage from "./mainComponent/view/frinds_page";
import HomePage from "./mainComponent/view/main_page";
import Navbar from "./mainComponent/widget/navbar";
import RegisterationPage from "./registerationComponent/view/register_page";
const App = () => {

  return (
    <>
      <Navbar></Navbar>
      {/* <HomePage />
       */}
      {/* <RegisterationPage></RegisterationPage> */}
    <FriendsPage/>
    </>
  );
}

export default App;