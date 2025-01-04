/* eslint-disable react/prop-types */
const SkillCard = ({img}) => {
  return (
    <div>
      <div className="  p-5 bg-low-bg-color  rounded-lg">
        <img
          className=" w-32 h-32   object-contain"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default SkillCard;
