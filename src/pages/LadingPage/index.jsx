import { useContext } from "react";
import { NavBar } from "../../shared/components/Navbar";
import { Outlet } from "react-router-dom";
import { DataContext } from "../../shared/context/DataContext";
import { Container_Loading } from "./styled";

import ReactLoading from "react-loading";

export const Home = () => {
  const { isFetching } = useContext(DataContext);
  return (
    <>
      {isFetching ? (
        <Container_Loading>
          <ReactLoading
            type={"spin"}
            color={"#7279f9"}
            height={100}
            width={100}
          />
        </Container_Loading>
      ) : (
        <>
          {" "}
          <NavBar />
          <Outlet />
        </>
      )}
    </>
  );
};
