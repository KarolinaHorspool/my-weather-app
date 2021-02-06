import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="box">
          <div className="container">
            <Weather defaultCity="London" />
          </div>
        </div>
      </div>
      <footer className="Footer">
        <p>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/students/244-karolina-horspool"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karolina Horspool
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KarolinaHorspool/my-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://brave-engelbart-d9c046.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
