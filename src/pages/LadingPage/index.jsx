import { NavBar } from "../../shared/components/Navbar";
import { Hero } from "../../shared/components/Hero";
import { Hero_Skills } from "../../shared/components/Hero_Skills";
import { Hero_SoftSkills } from "../../shared/components/Hero-SoftSkills";
import { Footer } from "../../shared/components/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Hero_Skills />
      <Hero_SoftSkills />
      <Footer />
    </>
  );
};
