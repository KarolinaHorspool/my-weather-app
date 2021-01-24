import React from "react";
import "./App.css";
import Weather from "./Weather";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <Search />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/students/244-karolina-horspool"
            target="_blank"
          >
            Karolina Horspool
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KarolinaHorspool/my-weather-app"
            target="_blank"
          >
            open-sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}
