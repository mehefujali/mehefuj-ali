import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  const { title, image, technologies } = project;
  return (
    <div>

      <div className=" w-fit rounded-md overflow-hidden border-white border-2 border-opacity-10">
        <img src={image} className=" max-h-60 w-full" alt="" />
        <div className="p-6 flex flex-col gap-2">
          <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
          <div className=" flex flex-wrap gap-1  justify-start">
            {technologies?.map((technology, idx) => (
              <div key={idx} className=" bg-white  bg-opacity-10 px-1 w-fit rounded-sm">{technology}</div>
            ))}
          </div>
          <button className=" text-center justify-center mt-4 flex items-center gap-2  hover:scale-105 active:scale-95 duration-150 bg-primary-color text-black text-xs  p-2 lg:p-3 rounded lg:text-sm lg:px-3">View details</button>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  projectLoading: PropTypes.bool.isRequired,
};
export default ProjectCard;
