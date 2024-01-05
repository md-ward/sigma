import { Outlet } from "react-router-dom";
import Navbar from "../widgets/navbar";

const Layout = () => {
    return (<>
        <Navbar />
        <Outlet />
    </>
    );
}

export default Layout;