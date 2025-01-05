import { CiMobile3 } from "react-icons/ci";
import SectionHeading from "../../ShairedComponents/SectionHeading";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div className=" my-14" name="contact">
      <SectionHeading title={"Let’s Connect"} color={true}></SectionHeading>
      <div className=" w-11/12 mx-auto mt-12">
        <div className=" flex w-full justify-center items-start md:justify-between lg:justify-center xl:items-center flex-col gap-6 md:flex-row">
          <div className=" lg:w-4/12">
            <h1 className="text-2xl">Contact details</h1>
            <div className=" w-full mt-6" >
             <ul>
                  <li
                  className="flex gap-3 items-center text-lg"
                  ><CiMobile3 className=" text-primary-color" /> +91 8391977901 </li>
                  <li
                  className="flex gap-3 items-center text-lg"
                  ><FaEarthAmericas className=" text-primary-color" />  mehefuj.netlify.app </li>
                  <li
                  className="flex gap-3 items-center text-lg"
                  ><MdOutlineMailOutline className=" text-primary-color" />  mehefujalim@gmail.com </li>
                  <h1 className="text-2xl my-3">Socal </h1>
                  <div className=" mt-2  flex  items-center gap-2">
              
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
             </ul>
            </div>
          </div>
          <div className=" h-96 hidden md:flex  mx-16 border-r-2 border-gray-500">

          </div>
          <div className=" w-full md:w-6/12 lg:w-4/12">
            <form action="" className="w-full flex flex-col gap-2">
              <label htmlFor="" className=" flex flex-col gap-1 items-start">
                Name :
                <input
                  placeholder="Enter your name"
                  type="text"
                  className="input focus:outline-none border-gray-500 hover:outline-none rounded-md w-full "
                  name=""
                  id=""
                />
              </label>
              <label htmlFor="" className=" flex flex-col gap-1 items-start">
                Email :
                <input
                  placeholder="Enter your email"
                  type="text"
                  className="input focus:outline-none border-gray-500 hover:outline-none rounded-md w-full"
                  name=""
                  id=""
                />
              </label>
              <label htmlFor="" className=" flex flex-col gap-1 items-start">
                Email :
                <textarea
                className=" textarea resize-none focus:outline-none border-gray-500 hover:outline-none rounded-md w-full"
                name="" id=""></textarea>
              </label>
               <button className=" text-center  btn hover:bg-primary-color  hover:scale-105 active:scale-95 duration-150 bg-primary-color text-black text-xs  p-2 lg:p-3 rounded lg:text-sm lg:px-3">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
