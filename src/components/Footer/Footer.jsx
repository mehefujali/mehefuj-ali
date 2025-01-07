import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200  rounded p-10">
        <nav className=" flex flex-col md:flex-row gap-4">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            
            offset={-200}
            className=" cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="aboutme"
            spy={true}
            smooth={true}
            
            offset={-200}
            className=" cursor-pointer"
          >
            About me
          </ScrollLink>

          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            
            offset={-200}
            className=" cursor-pointer"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="education"
            spy={true}
            smooth={true}
            
            offset={-200}
            className=" cursor-pointer"
          >
            Education
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            
            offset={-200}
            href="#projects"
            className=" cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            
            offset={-200}
            className=" cursor-pointer"
          >
            Contact
          </ScrollLink>
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
            Copyright © {new Date().getFullYear()} - All right reserved by
            Mehefuj Ali
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
