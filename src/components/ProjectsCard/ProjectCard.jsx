/* eslint-disable react/prop-types */

import { useState } from "react";

import styled from "styled-components";
import ProjectDetails from "../../Pages/ProjectDetails/ProjectDetails";

const ProjectCard = ({ project }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [projectId, setProjectId] = useState(null);

  function open() {
    setIsOpen(true);
  }
  

  return (
    <div
      onClick={() => {
        open();
        setProjectId(project._id);
      }}
    >
      <ProjectDetails
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        projectId={projectId}
      />
      <StyledWrapper>
        <div className="card cursor-pointer">
          <div className="icon">
            <img className=" w-full" src={project?.image} alt="" />
          </div>
          <strong className=" text-black"> {project?.title}</strong>

          <span className=" bg-transparent  backdrop-blur-sm ">
            <button
              onClick={() => {
                open();
                setProjectId(project._id);
              }}
              className="btn  btn-sm md:btn-md rounded bg-primary-color hover:bg-primary-color hover:scale-105 text-black "
            >
              View details
            </button>
          </span>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .card {
    --bg: #f7f7f8;
    --hover-bg: #ffe5f4;
    --hover-text: #e50087;

    text-align: center;
    background: var(--bg);
    padding: 1.5em;
    padding-block: 1.8em;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1), transform 0.15s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  .card__body {
    color: #464853;
    line-height: 1.5em;
    font-size: 1em;
  }

  .card > :not(span) {
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1);
  }

  .card > strong {
    display: block;
    font-size: 1.4rem;
    letter-spacing: -0.035em;
  }

  .card span {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    font-weight: bold;
    top: 100%;
    transition: all 0.3s cubic-bezier(0.6, 0.4, 0, 1);
  }

  .card:hover span {
    top: 0;
  }

  //   .card:hover {
  //     background: var(--hover-bg);
  //   }

  //   .card:hover>div,.card:hover>strong {
  //     opacity: 0;
  //   }
`;

export default ProjectCard;
