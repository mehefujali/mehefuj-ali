import Aboutme from "../../components/Aboutme/Aboutme";
import Banner from "../../components/Banner/Banner";
import Skills from "../../components/Skills/Skills";

const Home = () => {
      return (
            <div>

                  <div>
                        <Banner/>
                  </div>
                  <div>
                        <Aboutme/>
                  </div>
                  <div>
                        <Skills/>
                  </div>
                  
            </div>
      );
};

export default Home;