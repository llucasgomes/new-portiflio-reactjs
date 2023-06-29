import { Header } from "./styled";
import Logo from "../../../assets/images/logo.png";
import { List, X } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { Top } from "../functions";

export const NavBar = () => {
  const { navbar, setNavbar, menu_mobile, menu_setMobile } =
    useContext(DataContext);

  //funccao para scroll trocar Cor
  const changeBgNavbar = () => {
    window.scrollY > 90 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeBgNavbar);

  //funcao para fechar o menu e scroll top
  const handleGo = () => {
    menu_setMobile(!menu_mobile);
    Top();
  };

  return (
    <Header mobile={menu_mobile} navbar={navbar}>
      <div className="logo">
        <img src={Logo} alt="" />
        <h1>Lucas Gomes</h1>
      </div>
      <div className="mobile-menu">
        {!menu_mobile && (
          <List
            className="icon"
            size={32}
            onClick={() => menu_setMobile(!menu_mobile)}
          />
        )}
      </div>
      <nav>
        <ul className="nav-list">
          <span className="fechar">
            <X
              className="icon"
              size={32}
              onClick={() => menu_setMobile(!menu_mobile)}
            />
          </span>
          <Link className="item" to={"/"} onClick={() => handleGo()}>
            Home
          </Link>
          <Link className="item" to={"projects"} onClick={() => handleGo()}>
            Projetos
          </Link>
          <Link className="item" to={"skills"} onClick={() => handleGo()}>
            Habilidades
          </Link>
        </ul>
      </nav>
    </Header>
  );
};
