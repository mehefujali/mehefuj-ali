import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineArrowDownward } from "react-icons/md";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className=" py-16 relative overflow-hidden bg-cover " 
    
   
    >
      <div className="  gap-4 w-11/12 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-6/12 w-11/12 mx-auto md:mx-0">
          <div className="  flex flex-col gap-2">
            <h3 className=" text-xl lg:text-2xl xl:text-3xl">
              <Typewriter
                words={["Hi, I’m Mehefuj Ali"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={7000}
              />
            </h3>
            <h1 className=" text-primary-color font-bold text-2xl lg:text-4xl xl:text-5xl">
              Web Developer
            </h1>
            <p className=" text-sm xl:text-lg text-justify md:text-start 2xl:text-justify">{`
            I'm Mehefuj Ali, a passionate Frontend Developer and aspiring Full-Stack Developer from India. My goal is to build impactful, user-friendly web applications. I have expertise in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Currently, I’m focused on expanding my skills and exploring new tools and technologies. I strive to create beautiful, responsive, and functional websites that deliver exceptional user experiences.
            
            `}</p>
            {/* socal links  */}
            <div className=" mt-2  flex  items-center gap-2">
              <Link
                to="https://github.com/mehefujali"
                target="_blank"
                className=" text-2xl lg:text-4xl"
              >
                <BsGithub />
              </Link>
              <Link
                to="https://www.linkedin.com/in/mehefuj-ali-232741306"
                target="_blank"
                className=" text-2xl lg:text-4xl"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="https://www.facebook.com/kiron8391"
                target="_blank"
                className=" text-2xl lg:text-4xl"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://www.instagram.com/kiron_developer"
                target="_blank"
                className=" text-2xl lg:text-4xl"
              >
                <FaInstagram />
              </Link>
            </div>
            {/* btns  */}
            <div className=" mt-3">
              <button className=" flex items-center gap-2  hover:scale-105 active:scale-95 duration-150 bg-primary-color text-black text-xs  p-2 lg:p-3 rounded lg:text-sm lg:px-3">
                Download Resume <MdOutlineArrowDownward />
              </button>
            </div>
          </div>
        </div>
        <div className=" md:w-6/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12">
          <img
            className=" drop-shadow-md text-primary-color w-full "
            src="https://i.imgur.com/g7rfLhs.png"
            alt=""
          />
        </div>
      </div>

      <div className=" h-72 w-72 xl:h-96 xl:w-96 bg-primary-color bg-opacity-60 rounded-full absolute -z-10 blur-3xl top-4 md:right-1/4 lg:right-1/2 "></div>
     
    </div>
  );
};

export default Banner;
