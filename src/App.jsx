import { useResolvedPath } from "react-router-dom";
import FriendsPage from "./mainComponent/view/friends_page";
import HomePage from "./mainComponent/view/main_page";
import Navbar from "./mainComponent/widget/navbar";
import RegisterationPage from "./registerationComponent/view/register_page";
import PagesRouter from "./router";
import usePostStore from './mainComponent/controller/create_postController';

import CreatePost from './mainComponent/view/create_post'
const App = () => {
  const { isOpen, open } = usePostStore()

  const path = useResolvedPath()
  return (
    <>
      {
        path.pathname != '/register' && <Navbar></Navbar>
      }




      <PagesRouter />
      {isOpen && <CreatePost />
                }

    </>
  );
}

export default App;