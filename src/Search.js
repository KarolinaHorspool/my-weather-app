import React, { useState } from "react";
import axios from "axios";
import TimeDate from "./TimeDate";
import "./App.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState("");

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=791caf474f5e47b0c7a34593ae174a7e&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={changeCity} />
        <input type="submit" value="Search" />
        <button type="submit" class="btn btn-secondary" id="current-location">
          Current Location
        </button>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="WeatherInfo">
        {form}
        <ul>
          <li> Temperature: {Math.round(weather.temperature)}℃</li>
          <li className="text-capitalize">
            Description: {weather.description}
          </li>
          <li>Time</li>
          <li>Wind: {Math.round(weather.wind)} km/h </li>
          <li>Humidity: {weather.humidity}%</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
