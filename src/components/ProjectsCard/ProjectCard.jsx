import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { title, image, technologies } = project;
  return (
    <div>

      <div className="  w-full h-full rounded-md overflow-hidden relative border-white border-2 border-opacity-10 ">
        <div className=" w-24 h-16 bg-white blur-3xl absolute -z-20 bottom-4"></div>
        <img src={image} className=" max-h-60 w-full" alt="" />
        <div className=" p-3 md:p-6 flex flex-col gap-2 h-full w-full">
          <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
          <div className=" flex flex-wrap gap-1  justify-start">
            {technologies?.map((technology, idx) => (
              <div key={idx} className=" bg-white  bg-opacity-10 px-1 w-fit rounded-sm">{technology}</div>
            ))}
          </div>
          <Link to={`/project-details/${project._id}`} className=" cursor-pointer text-center justify-center mt-4 flex items-center gap-2  hover:scale-105 active:scale-95 duration-150 bg-primary-color text-black text-xs  p-2 lg:p-3 rounded lg:text-sm lg:px-3">View details</Link>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  
};
export default ProjectCard;
