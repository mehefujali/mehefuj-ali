import { useEffect, useState } from "react";
import SectionHeading from "../../ShairedComponents/SectionHeading";
import ProjectCard from "../ProjectsCard/ProjectCard";
import axios from "axios";
import ProjectLoader from "../../ProjectLoader/ProjectLoader";

const Projects = () => {
  const [projects, setProject] = useState([]);
  const [projectLoading, setProjectLoading] = useState(false);
  useEffect(() => {
    setProjectLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/projects`)
      .then((res) => {
        setProject(res.data);
        setProjectLoading(false);
      })
      .catch(() => {
        setProjectLoading(false);
      });
  }, []);
  return (
    <div className=" my-14" name="projects">
      <SectionHeading
        title="Latest Projects"
        color={true}
        subTitle="Here are some of my most recent and significant projects showcasing my skills and expertise.

"
      />
      <div className=" bg-low-bg-color py-14 my-14">
        <div className="w-11/12 mx-auto mt-8 md:gap-2 xl:gap-6  gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {projectLoading ? (
            <div>
              <ProjectLoader />
            </div>
          ) : (
            projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
