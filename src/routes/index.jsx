import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/LadingPage";
import { Portifolio } from "../shared/components/Hero_Projects";
import { Hero } from "../shared/components/Hero";
import { Hero_Skills } from "../shared/components/Hero_Skills";
import { Hero_SoftSkills } from "../shared/components/Hero-SoftSkills";
import { Footer } from "../shared/components/Footer";

export const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <Hero_Skills />
            <Hero_SoftSkills />
            <Footer />
          </>
        ),
      },
      {
        path: "/projects",
        element: (
          <>
            <Portifolio />
          </>
        ),
      },
    ],
  },
]);
