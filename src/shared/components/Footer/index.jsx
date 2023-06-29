import { GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { C_Footer } from "./styled";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <C_Footer>
      <div className="footer-content">
        <h3>Lucas Gomes</h3>
        <p>
          Sempre foi minha paixão atuar na área tecnológica, estou em um período
          de transição de carreira, cursando Full Stack Jr e DevQuest.
        </p>
        <ul className="sociais">
          <Link
            to={"https://www.linkedin.com/in/llucasgomess/"}
            target="_blank"
            rel="noopener noreferrer"
            className="sociais--item"
          >
            <LinkedinLogo size={42} color="#ffffff" weight="regular" />
          </Link>
          <Link
            to={"https://github.com/llucasgomes"}
            target="_blank"
            rel="noopener noreferrer"
            className="sociais--item"
          >
            <GithubLogo size={42} color="#ffffff" weight="regular" />
          </Link>
          <Link
            to={
              "https://api.whatsapp.com/send?phone=5592988471665&text=Gostei%20de%20seu%20Portifolio%0APodemos%20Conversar"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="sociais--item"
          >
            <WhatsappLogo size={42} color="#ffffff" weight="regular" />
          </Link>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyrigth &copy; 2023 </p>{" "}
        <Link to={"/dashboard"} className="login">
          login
        </Link>
      </div>
    </C_Footer>
  );
};
