import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Thursday 14:35",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a  city..."
                className="form-city w-100 h-100"
                autoFocus="on"
                id="form-city"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            {" "}
            <ul>
              <li>Humidity : {weatherData.humidity}%</li>
              <li>Wind : {weatherData.wind} km/h</li>
            </ul>{" "}
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d6ac6a91d99bf4109211bd1ded3f84ba";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading....";
  }
}
