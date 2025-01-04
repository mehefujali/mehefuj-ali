/* eslint-disable react/prop-types */
const SkillCard = ({img}) => {
  return (
    <div className=" hover:scale-105 duration-150">
      <div className="  p-5 bg-low-bg-color  rounded-lg">
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
