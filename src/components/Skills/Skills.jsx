import SectionHeading from "../../ShairedComponents/SectionHeading";
import SkillCard from "../../ShairedComponents/SkillCard";

const Skills = () => {
  return (
    <div id="skills-section" className=" py-14">
      <SectionHeading
        title={"Skills"}
        subTitle="Proficient in HTML, CSS, JavaScript, and React.js, I specialize in creating responsive and visually stunning web applications. With a strong foundation in UI/UX design and modern development tools, I bring ideas to life with precision and creativity."
        color={true}
      />

      <div className=" mt-8 ">
        <SectionHeading title="Frontend Development  " />
      </div>
      <div className=" w-11/12 mx-auto mt-14 flex gap-5 flex-wrap  items-center justify-center flex-auto">
        <SkillCard img="https://i.imgur.com/If2tjcN.png" />
        <SkillCard img="https://i.imgur.com/PQUrE4k.png" />
        <SkillCard img="https://i.imgur.com/5GwxUUf.png" />
        <SkillCard img="https://i.imgur.com/HdyOITq.png" />
        <SkillCard img="https://i.imgur.com/SSVAekE.png" />
        <SkillCard img="https://i.imgur.com/1nT0ISE.png" />
        <SkillCard img="https://i.imgur.com/hJGiS1G.png" />
      </div>
      <div className=" mt-8 ">
        <SectionHeading title="Backend Development & Security " />
      </div>

      <div className=" w-11/12 mx-auto mt-14 flex gap-5 flex-wrap  items-center justify-center flex-auto">
        <SkillCard img="https://i.imgur.com/8p5vK57.png" />
        <SkillCard img="https://i.imgur.com/jX0Q8an.png" />
        <SkillCard img="https://i.imgur.com/HBjx7QA.png" />
        <SkillCard img="https://i.imgur.com/nRjf4rj.png" />
        <SkillCard img="https://i.imgur.com/Ly8G0eu.png" />
      </div>
      <div className=" mt-8 ">
        <SectionHeading title="Version Control & Tools" />
      </div>

      <div className=" w-11/12 mx-auto mt-14 flex gap-5 flex-wrap  items-center justify-center flex-auto">
        <SkillCard img="https://i.imgur.com/Ce82CUA.png" />
        <SkillCard img="https://i.imgur.com/qVRcYIC.png" />
        <SkillCard img="https://i.imgur.com/kP74yn2.png" />
      </div>
      <div className=" mt-8 ">
        <SectionHeading title="UI/UX Design" />
      </div>

      <div className=" w-11/12 mx-auto mt-14 flex gap-5 flex-wrap  items-center justify-center flex-auto">
        <SkillCard img="https://i.imgur.com/0TdBGgz.png" />
        <SkillCard img="https://i.imgur.com/zklDaYS.png" />
        <SkillCard img="https://i.imgur.com/tdpcnMm.png" />
      </div>
    </div>
  );
};

export default Skills;
