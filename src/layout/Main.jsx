import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className="  npm rutext-white">
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
