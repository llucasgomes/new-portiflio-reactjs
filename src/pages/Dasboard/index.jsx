import { D_Habilidades } from "../../shared/components/Dasboard/Habilidades";
import { Navbar2 } from "../../shared/components/Dasboard/Navbar2";
import { Container_Dasboard, Container_Loading } from "./styled";
import ReactLoading from "react-loading";

import { DataContext } from "../../shared/context/DataContext";
import { useContext } from "react";
export const Dashboard = () => {
  const { isFetching } = useContext(DataContext);
  return (
    <Container_Dasboard>
      <Navbar2 />
      {isFetching ? (
        <>
          <Container_Loading>
            <ReactLoading
              type={"spin"}
              color={"#7279f9"}
              height={100}
              width={100}
            />
          </Container_Loading>
        </>
      ) : (
        <>
          <D_Habilidades />
        </>
      )}
      {/*  <Body_Dashboard /> */}
    </Container_Dasboard>
  );
};
