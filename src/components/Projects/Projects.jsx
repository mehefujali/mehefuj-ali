import { useEffect, useState } from "react";
import SectionHeading from "../../ShairedComponents/SectionHeading";
import ProjectCard from "../ProjectsCard/ProjectCard";
import axios from "axios";

const Projects = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/projects`).then((res) => {
      setProject(res.data);
    });
  }, []);
  return (
    <div className=" my-14" name="projects">
      <SectionHeading
        title="Projects"
        color={true}
        subTitle="This section highlights some of the key projects I've worked on, showcasing my skills and experience in web development.

"
      />
      <div className=" bg-low-bg-color py-14 my-14">
        <div className="w-11/12 mx-auto mt-8 md:gap-8  gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
