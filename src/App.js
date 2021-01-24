import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search </h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/hall-of-fame?q=Karolina+Horspool"
            target="_blank"
          >
            Karolina Horspool
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KarolinaHorspool/my-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
