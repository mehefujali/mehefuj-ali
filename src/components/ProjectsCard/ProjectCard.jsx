/* eslint-disable react/prop-types */

import styled from "styled-components";

const ProjectCard = ({project}) => {
  return (
      <StyledWrapper>
      <div className="card cursor-pointer">
        <div className="icon">
        <img className=" w-full" src={project?.image} alt="" />
        </div>
        <strong className=" text-black"> {project?.title}
        </strong>
        
        <span className=" bg-transparent  backdrop-blur-sm ">
        <a className="btn  btn-sm md:btn-md rounded bg-primary-color hover:bg-primary-color hover:scale-105 text-black ">
        View details
          </a>
            
        </span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --bg: #f7f7f8;
    --hover-bg: #FFE5F4;
    --hover-text: #E50087;
   
    text-align: center;
    background: var(--bg);
    padding: 1.5em;
    padding-block: 1.8em;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    transition: .3s cubic-bezier(.6,.4,0,1),transform .15s ease;
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
    transition: .3s cubic-bezier(.6,.4,0,1);
  }

  .card > strong {
    display: block;
    font-size: 1.4rem;
    letter-spacing: -.035em;
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
    transition: all .3s cubic-bezier(.6,.4,0,1);
  }

  .card:hover span {
    top: 0;
    
  }

//   .card:hover {
//     background: var(--hover-bg);
//   }

//   .card:hover>div,.card:hover>strong {
//     opacity: 0;
//   }`;


export default ProjectCard;
