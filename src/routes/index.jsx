import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/LadingPage";

export const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
