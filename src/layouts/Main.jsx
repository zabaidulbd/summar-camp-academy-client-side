import { Outlet } from "react-router-dom";
import Navbar from "../shared/NavBar/Navbar";
import Footer from "../shared/Footer/Footer";


const Main = () => {
    return (
        <div className="bg-gray-200">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;