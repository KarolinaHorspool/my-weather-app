import React from "react";
import ReactDOM from "react-dom";
import import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

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
