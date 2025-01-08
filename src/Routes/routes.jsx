import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

const routes = createBrowserRouter([
      {
            path : '/',
            element : <Main/> ,
            children : [
                  {
                        path : "/" ,
                        element: <Home/>

                  },
                  {
                        path: 'project-details/:id',
                        element:<ProjectDetails/>
                  }
            ]
      }

])
      

export default routes;