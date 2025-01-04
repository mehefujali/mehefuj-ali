import SectionHeading from "../../ShairedComponents/SectionHeading";

const Education = () => {
  return (
    <div className=" my-16" id="education">
      <SectionHeading title="Educaiton" color={true} />

      <div className=" w-11/12 flex-col xl:flex-row mx-auto mt-12 flex gap-5 items-center justify-center">
        <div className="md:h-44 w-full flex-col md:flex-row  bg-low-bg-color flex gap-4 items-center  p-6 rounded-lg">
          <img className=" w-28" src="https://i.imgur.com/rryUrUj.png" alt="" />
          <div>
            <h3 className=" font-bold text-lg">
              Secondary School Certificate (Madhyamik)
            </h3>
            <p>West Bengal Board of Secondary Education</p>
            <p>Year: 2020</p>
          </div>
        </div>
        <div className="md:h-44 w-full flex-col md:flex-row  bg-low-bg-color flex gap-4 items-center  p-6 rounded-lg">
          <img className=" w-28" src="https://i.imgur.com/mAU6dAO.png" alt="" />
          <div>
            <h3 className=" font-bold text-lg">
              Higher Secondary Certificate (H.S.C)
            </h3>
            <p>West Bengal Council of Higher Secondary Education</p>
            <p>Year: 2022</p>
          </div>
        </div>
        <div className=" md:h-44 flex-col md:flex-row w-full bg-low-bg-color flex gap-2 items-center  p-6 rounded-lg">
          <img className=" w-36" src="https://i.imgur.com/SAMdncQ.png" alt="" />
          <div>
            <h3 className=" font-bold text-lg">
              Bachelor of Arts (Honours) in Political Science
            </h3>
            <p>Kalyani University</p>
            <p>Year: 2022 - Present (3rd Year Running)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
