import { Link, useNavigate } from "react-router-dom";
import { C_Navbar2 } from "./styled";

export const Navbar2 = () => {
  const navigate = useNavigate();

  //Funcao para deslogar
  const handleGetOut = (rota) => {
    confirm("Deseja mesmo sair Chefe?") && navigate(rota);
  };
  return (
    <C_Navbar2>
      <h1>DashBoard</h1>
      <nav>
        <ul className="list">
          <Link to={"/dashboard/projetos"} className="list_item">
            Projetos
          </Link>
          <Link to={"/dashboard/skills"} className="list_item">
            Habilidades
          </Link>
          <a onClick={() => handleGetOut("/")} className="list_item">
            Sair
          </a>
        </ul>
      </nav>
    </C_Navbar2>
  );
};
