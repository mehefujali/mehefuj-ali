import SectionHeading from "../../ShairedComponents/SectionHeading";

const Aboutme = () => {
  return (
    <div  className="" name="aboutme">
      <div className=" mt-14 mb-4">
        <SectionHeading title={"About Me"} color={true} />
      </div>
      <div className=" py-14 bg-low-bg-color ">
        <div className="w-11/12 mx-auto flex  gap-4 items-center ">
          <div className=" w-4/12 hidden lg:flex">
            <img className=" w-full xl:max-w-sm" src="https://i.imgur.com/C0YrSAC.png" alt="Mehefuj Ali" />
          </div>
          <div className="  lg:w-7/12 2xl:w-6/12">
            <p className="  text-sm xl:text-lg text-justify lg:text-start ">
              <span className=" text-4xl">Hi,</span> I&apos;m Mehefuj Ali, a
              passionate frontend developer with a strong foundation in{" "}
              <span className=" font-semibold">
                HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Git
                , and GitHub.
              </span>{" "}
              I specialize in creating visually appealing, responsive, and
              user-friendly web experiences that combine aesthetics with
              functionality. With hands-on experience in building projects
              ranging from simple landing pages to complex web applications, I
              have honed my skills in delivering seamless user experiences. My
              goal is to transform creative ideas into impactful digital
              products that stand out. Beyond coding, I’m committed to staying
              updated with the latest web development trends and continuously
              expanding my expertise in modern technologies. I thrive on
              learning and enjoy exploring innovative solutions to challenging
              problems. Let’s collaborate and bring amazing ideas to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
