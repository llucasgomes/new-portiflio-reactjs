import { D_Habilidades } from "../../shared/components/Dasboard/Habilidades";
import { Navbar2 } from "../../shared/components/Dasboard/Navbar2";
import { Container_Dasboard } from "./styled";

export const Dashboard = () => {
  return (
    <Container_Dasboard>
      <Navbar2 />
      <D_Habilidades />
      {/*  <Body_Dashboard /> */}
    </Container_Dasboard>
  );
};
