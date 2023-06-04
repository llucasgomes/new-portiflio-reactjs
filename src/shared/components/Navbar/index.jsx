import { Header } from "./styled";
import Logo from "../../../assets/images/logo.png";
import { List, X } from "phosphor-react";
import { useState } from "react";

export const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBgNavbar = () => {
    window.scrollY > 90 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeBgNavbar);

  return (
    <Header mobile={menu} navbar={navbar}>
      <div className="logo">
        <img src={Logo} alt="" />
        <h1>Lucas Gomes</h1>
      </div>
      <div className="mobile-menu">
        {menu ? (
          <X className="icon" size={32} onClick={() => setMenu(!menu)} />
        ) : (
          <List className="icon" size={32} onClick={() => setMenu(!menu)} />
        )}
      </div>
      <nav>
        <ul className="nav-list">
          <li>Projetos</li>
          <li>Habilidades</li>
          <li>Sobre</li>
        </ul>
      </nav>
    </Header>
  );
};
