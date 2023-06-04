import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./styles/Global";

import { RouterProvider } from "react-router-dom";
import { Rotas } from "./routes";
import { DataContextProvider } from "./shared/context/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <RouterProvider router={Rotas} />
    </DataContextProvider>
    <GlobalStyle />
  </React.StrictMode>
);
