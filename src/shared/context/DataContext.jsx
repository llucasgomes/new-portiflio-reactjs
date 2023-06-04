// 1 - criar o context

import { createContext, useState, useEffect } from "react";
import { API } from "../services/API";

export const DataContext = createContext();

// 2 - criar provider

export const DataContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isFetching, setIsFetching] = useState(true); //armazenar dados de retorno da API

  //LISTAR  - GETS ==============================================

  useEffect(() => {
    API.get("/project")
      .then((response) => setProjects(response.data))
      .catch((err) => console.error("ops! ocorreu um erro" + err))
      .finally(() => setIsFetching(false));
  }, []);

  //GET SKILLS
  useEffect(() => {
    // conexao com a API

    API.get("/skills")
      .then((response) => setSkills(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ projects, skills, isFetching }}>
      {children}
    </DataContext.Provider>
  );
};
