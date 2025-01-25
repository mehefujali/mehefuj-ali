import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import { Toaster } from "react-hot-toast";


createRoot(document.getElementById("root")).render(
  <StrictMode>
   
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routes} />
   
  </StrictMode>
);
