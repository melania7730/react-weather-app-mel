import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-city w-100 h-100"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Tabanan</h1>
      <ul>
        <li>Thursday 14:35</li>
        <li>Light rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="ligt rain"
          />
          6°C
        </div>
        <div className="col-6">
          {" "}
          <ul>
            <li>Precipitation: 65%</li>
            <li>Humidity : 78%</li>
            <li>Wind : 8 km/h</li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}
