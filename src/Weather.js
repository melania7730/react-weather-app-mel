import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDetails from "./WeatherDetails";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function searchCity() {
    const apiKey = "d6ac6a91d99bf4109211bd1ded3f84ba";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    searchCity();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a  city..."
                className="form-city w-100 h-100"
                autoFocus="on"
                id="form-city"
                onChange={handleCity}
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
        <WeatherDetails data={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return "Loading....";
  }
}
