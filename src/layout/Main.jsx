import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Main = () => {
      return (
            <div className=" text-black dark:text-white">
                <div>
                  <Navbar/>
                </div>
                <div>
                  <Outlet/>
                </div>
            </div>
      );
};

export default Main;