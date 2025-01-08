/* eslint-disable react/prop-types */
const SkillCard = ({img}) => {
  return (
    <div className=" hover:scale-105 duration-150">
      <div className="  p-5 bg-low-bg-color bg-opacity-20 backdrop-blur-lg  rounded-lg relative overflow-hidden">
        <div className=" h-10 w-10 blur-2xl -z-10 bg-white absolute">
          
        </div>
        <img
          className=" w-20 h-20 md:w-32 md:h-32   object-contain"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default SkillCard;
