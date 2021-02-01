import React from "react";
import "./App.css";
import Weather from "./Weather";
import Search from "./Search";
import WeatherForecastPreview from "./WeatherForecastPreview";
import TimeDate from "./TimeDate";

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
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://brave-engelbart-d9c046.netlify.app/" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
