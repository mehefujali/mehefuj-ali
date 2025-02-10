import axios from "axios";
import { useEffect, useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(`${import.meta.env.VITE_API_URL}/project/${id}`).then((res) => {
      setProject(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="fixed inset-0 z-10 w-screen bg-low-bg-color backdrop-blur-lg overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className=" max-w-6xl max-h-[70%] mt-20 shadow-xl  rounded-xl bg-base-100  backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
            <div className=" w-full ">
              <img className=" rounded-lg" src={project?.image} alt="" />
              <div className=" text-white p-5">
                <h1 className=" text-primary-color text-xl font-bold">
                  {project?.title}
                </h1>
                <p className=" text-sm">{project?.description}</p>
                <div className=" flex flex-wrap gap-1 my-2">
                  {project?.technologies?.map((tec, idx) => (
                    <div
                      className=" bg-white  bg-opacity-10 px-1 w-fit rounded-sm"
                      key={idx}
                    >
                      {tec}
                    </div>
                  ))}
                </div>
                <div className=" flex flex-wrap flex-col gap-1 my-2">
                  {project?.features?.map((tec, idx) => (
                    <div className=" flex items-center gap-1 " key={idx}>
                      <FcCheckmark /> {tec}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-col md:flex-row join">
                  <Link
                    to={project?.liveLink}
                    target="_blank"
                    className=" flex flex-1 join-item items-center gap-2  hover:scale-105 active:scale-95 duration-150 bg-white btn text-black text-xs  p-2 lg:p-3 rounded lg:text-sm lg:px-3"
                    onClick={close}
                  >
                    <MdOutlineArrowOutward /> Live
                  </Link>
                  <Link
                    to={project?.clientRepo}
                    target="_blank"
                    className=" flex flex-1 join-item items-center gap-2  hover:scale-105 active:scale-95 duration-150 bg-white btn text-black text-xs  p-2 lg:p-3 rounded lg:text-sm lg:px-3"
                    onClick={close}
                  >
                    <FaGithub /> Clint Repo
                  </Link>
                  <Link
                    to={project?.serverRepo}
                    target="_blank"
                    className=" text-nowrap flex flex-1 join-item items-center gap-2  hover:scale-105 active:scale-95 duration-150 bg-white btn text-black text-xs  p-2 lg:p-3 rounded lg:text-sm lg:px-3"
                    onClick={close}
                  >
                    <FaGithub /> Server Repo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
