import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { LuBadgeInfo } from "react-icons/lu";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  // const location = useLocation();

  return (
    <div className=" fixed backdrop-blur-lg top-0 w-full z-50 ">
      <div className="navbar  md:p-0 w-11/12 mx-auto p-0 items-center">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <TfiMenuAlt className=" text-xl md:text-3xl" />
            </div>
            <ul
              id="navlinks"
              tabIndex={0}
              className="menu menu-sm gap-4 dropdown-content bg-base-100 rounded-md z-[1] mt-3 w-52 p-5 shadow"
            >
              <Link to="/h">
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  activeClass="activeLink"
                  className="flex gap-1 items-center"
                  
                >
                  <IoHomeOutline />
                  Home
                </ScrollLink>
              </Link>
              <Link to="/">
                <ScrollLink
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  activeClass="activeLink"
                  className="flex gap-1 items-center"
                >
                  <LuBadgeInfo /> About me
                </ScrollLink>
              </Link>
              <Link to="/">
                <ScrollLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  activeClass="activeLink"
                  className="flex gap-1 items-center"
                >
                  <GiSkills /> Skills
                </ScrollLink>
              </Link>
              <Link to="/">
                <ScrollLink
                  to="education"
                  spy={true}
                  smooth={true}
                  activeClass="activeLink"
                  className="flex gap-1 items-center"
                  href="#education"
                >
                  <PiStudent /> Education
                </ScrollLink>
              </Link>
              <Link to="/">
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  activeClass="activeLink"
                  className="flex gap-1 items-center"
                >
                  <GrProjects /> Projects
                </ScrollLink>
              </Link>
              <Link to="/">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  activeClass="activeLink"
                  className="flex gap-1 items-center"
                >
                  <MdOutlinePermContactCalendar /> Contact
                </ScrollLink>
              </Link>
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
          <ul id="navlinks" className="menu menu-horizontal px-1 gap-5 ">
            <Link to="/">
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                activeClass="activeLink"
                offset={-200}
                className=" cursor-pointer"
              >
                Home
              </ScrollLink>
            </Link>
            <Link to="/">
              <ScrollLink
                to="aboutme"
                spy={true}
                smooth={true}
                activeClass="activeLink"
                offset={-200}
                className=" cursor-pointer"
              >
                About me
              </ScrollLink>
            </Link>
            <Link to="/">
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                activeClass="activeLink"
                offset={-200}
                className=" cursor-pointer"
              >
                Skills
              </ScrollLink>
            </Link>
            <Link to="/">
              <ScrollLink
                to="education"
                spy={true}
                smooth={true}
                activeClass="activeLink"
                offset={-200}
                className=" cursor-pointer"
              >
                Education
              </ScrollLink>
            </Link>
            <Link to="/">
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                activeClass="activeLink"
                offset={-200}
                href="#projects"
                className=" cursor-pointer"
              >
                Projects
              </ScrollLink>
            </Link>
            <Link to="/">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                activeClass="activeLink"
                offset={-200}
                className=" cursor-pointer"
              >
                Contact
              </ScrollLink>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://drive.google.com/file/d/1TJ4FQTxkIvQOV3Beb2FLRdT8W8WwwDLy/view?usp=sharing"  target="_blank" className="btn  btn-sm md:btn-md rounded bg-primary-color hover:bg-primary-color hover:scale-105 text-black ">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
