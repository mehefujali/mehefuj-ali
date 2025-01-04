// import ScrollSpy from "react-ui-scrollspy";
import Aboutme from "../../components/Aboutme/Aboutme";
import Banner from "../../components/Banner/Banner";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";

const Home = () => {
  return (
    
      <div>
        <div>
          <Banner />
        </div>
        <div>
          <Aboutme />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Education />
        </div>
      </div>
    
  );
};

export default Home;
