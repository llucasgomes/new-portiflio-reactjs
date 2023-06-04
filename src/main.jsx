import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./styles/Global";

import { RouterProvider } from "react-router-dom";
import { Rotas } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Rotas} />

    <GlobalStyle />
  </React.StrictMode>
);
