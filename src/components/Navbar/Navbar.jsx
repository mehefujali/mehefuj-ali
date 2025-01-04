import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { LuBadgeInfo } from "react-icons/lu";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className=" fixed backdrop-blur-lg top-0 w-full z-[9999] ">
      <div className="navbar  md:p-0 w-11/12 mx-auto p-0 items-center">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <TfiMenuAlt className=" text-xl md:text-3xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm gap-4 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-5 shadow"
            >
              <a 
              className="flex gap-1 items-center"
              href="#home">
                <IoHomeOutline />
                Home
              </a>
              <a href="#aboutme" className="flex gap-1 items-center">
                <LuBadgeInfo /> About me
              </a>
              <a
                data-to-scrollspy-id="skills"
                href="#skills"
                className="flex gap-1 items-center"
              >
                <GiSkills /> Skills
              </a>
              <a className="flex gap-1 items-center" href="#education">
                <PiStudent /> Education
              </a>
              <a className="flex gap-1 items-center">
                <GrProjects /> Projects
              </a>
              <a className="flex gap-1 items-center">
                <MdOutlinePermContactCalendar /> Contact
              </a>
            </ul>
          </div>
          <Link
            to="/"
            className="md:text-xl xl:text-2xl font-bold text-primary-color"
          >
            Mehefuj A.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
         
            <ul className="menu menu-horizontal px-1 gap-5">
              <a data-to-scrollspy-id="home" href="#home">
                Home
              </a>
              <a data-to-scrollspy-id="aboutme" href="#aboutme">
                About me
              </a>

              <a data-to-scrollspy-id="skills" href="#skills">
                Skills
              </a>
              <a data-to-scrollspy-id="education" href="#education">
                Education
              </a>
              <a>Projects</a>
              <a>Contact</a>
            </ul>
         
        </div>
        <div className="navbar-end">
          <a className="btn  btn-sm md:btn-md rounded bg-primary-color hover:bg-primary-color hover:scale-105 text-black ">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
