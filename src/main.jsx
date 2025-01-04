import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import ScrollSpy from "react-ui-scrollspy";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollSpy>
      <RouterProvider router={routes} />
    </ScrollSpy>
  </StrictMode>
);
