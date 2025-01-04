import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className=" flex flex-col md:flex-row gap-4">
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
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <nav>
          <div className=" mt-2  flex  items-center gap-2">
            <Link
              to="https://github.com/mehefujali"
              target="_blank"
              className=" text-2xl "
            >
              <BsGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/mehefuj-ali-232741306"
              target="_blank"
              className=" text-2xl"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://www.facebook.com/kiron8391"
              target="_blank"
              className=" text-2xl"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://www.instagram.com/kiron_developer"
              target="_blank"
              className=" text-2xl"
            >
              <FaInstagram />
            </Link>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Mehefuj Ali
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;