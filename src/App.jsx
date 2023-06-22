import { useResolvedPath } from "react-router-dom";
import FriendsPage from "./mainComponent/view/friends_page";
import HomePage from "./mainComponent/view/main_page";
import Navbar from "./mainComponent/widget/navbar";
import RegisterationPage from "./registerationComponent/view/register_page";
import PagesRouter from "./router";
const App = () => {
  const path = useResolvedPath()
  return (
    <>
      {
        path.pathname != '/register' && <Navbar></Navbar>
      }



      <PagesRouter />

    </>
  );
}

export default App;