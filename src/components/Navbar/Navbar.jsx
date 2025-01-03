import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { LuBadgeInfo } from "react-icons/lu";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar w-11/12 mx-auto items-center">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <TfiMenuAlt className=" text-xl md:text-3xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm gap-4 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink className="flex gap-1 items-center"><IoHomeOutline />Home</NavLink>
              <NavLink className="flex gap-1 items-center"><LuBadgeInfo /> About me</NavLink>
              <NavLink className="flex gap-1 items-center"><GiSkills /> Skills</NavLink>
              <NavLink className="flex gap-1 items-center"><PiStudent /> Education</NavLink>
              <NavLink className="flex gap-1 items-center"><GrProjects /> Projects</NavLink>
              <NavLink className="flex gap-1 items-center"><MdOutlinePermContactCalendar /> Contact</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost  md:text-xl">Mehefuj A.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink>Home</NavLink>
            <NavLink>About me</NavLink>
            <NavLink>Skills</NavLink>
            <NavLink>Education</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Contact</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn  btn-sm md:btn-md rounded bg-primary-color text-black ">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
