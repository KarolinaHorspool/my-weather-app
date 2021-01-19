import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Search from "./Search";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Search />
  </React.StrictMode>,
  rootElement
);
