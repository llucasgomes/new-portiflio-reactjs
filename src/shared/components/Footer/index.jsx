import { GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { C_Footer } from "./styled";

export const Footer = () => {
  return (
    <C_Footer>
      <div className="footer-content">
        <h3>Lucas Gomes</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, ad!
          Sit velit earum quo vero, dolorem facilis corporis quibusdam itaque
          sapiente labore, vitae numquam fugit neque id saepe tempora optio.
        </p>
        <ul className="sociais">
          <li className="sociais--item">
            <LinkedinLogo size={42} color="#ffffff" weight="regular" />
          </li>
          <li className="sociais--item">
            <GithubLogo size={42} color="#ffffff" weight="regular" />
          </li>
          <li className="sociais--item">
            <WhatsappLogo size={42} color="#ffffff" weight="regular" />
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyrigth &copy; 2023 </p>
      </div>
    </C_Footer>
  );
};
