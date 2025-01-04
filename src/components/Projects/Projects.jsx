import { useEffect, useState } from "react";
import SectionHeading from "../../ShairedComponents/SectionHeading";
import ProjectCard from "../ProjectsCard/ProjectCard";

const Projects = () => {
  const [projects , setProject] = useState([])
  useEffect(()=>{
  fetch('/projects.json')
  .then(res => res.json())
  .then(data => {
    setProject(data)
  })
  },[])
  return (
    <div className=" my-14">
      <SectionHeading
        title="Projects"
        color={true}
        subTitle="This section highlights some of the key projects I've worked on, showcasing my skills and experience in web development.

"
      />
      <div className=" bg-low-bg-color py-14 my-14">
        <div className="w-11/12 mx-auto mt-8 md:gap-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {
           projects.map((project,idx) => <ProjectCard key={idx} project={project} />)
          }
           
        </div>
      </div>
    </div>
  );
};

export default Projects;
