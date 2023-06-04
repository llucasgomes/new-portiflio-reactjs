import { C_Hero_Skills } from "./styled";
import Html_CSS from "../../../assets/images/html5-css3.png";
import Js from "../../../assets/images/javascript.png";
import Angular from "../../../assets/images/angular.png";
import Reacjs from "../../../assets/images/reactjs.png";
import Typescript from "../../../assets/images/ts_logo.png";
import Vue from "../../../assets/images/vue.png";
import Agile from "../../../assets/images/agile.png";

export const Hero_Skills = () => {
  return (
    <C_Hero_Skills
      html={Html_CSS}
      js={Js}
      angular={Angular}
      react={Reacjs}
      ts={Typescript}
      vue={Vue}
      agil={Agile}
    >
      <div className="container content">
        <h2 className="title">Habilidades</h2>
        <p className="description">
          Possuo uma série de habilidades que me tornam um membro valioso de uma
          equipe de desenvolvimento web. Minhas habilidades técnicas e
          conhecimento de linguagens de programação e tecnologias front-end
          permitem criar interfaces de usuário atraentes e funcionais.
        </p>
      </div>
      <div className="container images">
        <ul>
          <li className="item "></li>
          <li className="item "></li>
          <li className="item "></li>
          <li className="item "></li>
          <li className="item "></li>
          <li className="item "></li>
          <li className="item "></li>
        </ul>
      </div>
    </C_Hero_Skills>
  );
};
