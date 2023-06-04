import { useContext } from "react";
import { Card_Project } from "../Cards/Card-Projects";
import { Container_Portifolio } from "./styled";
import { DataContext } from "../../context/DataContext";

export const Portifolio = () => {
  const { projects } = useContext(DataContext);
  return (
    <Container_Portifolio>
      <h1 className="title">Projetos</h1>
      <h2 className="sub-title">
        Essas são as principais projetos, podendo conferir todos meus
        repositorios e projetos no GitHub.
      </h2>
      <section className="container-skills">
        {projects.map((item) => (
          <Card_Project
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            github={item.github}
            page={item.page}
          />
        ))}
      </section>
    </Container_Portifolio>
  );
};
