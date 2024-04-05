import React from "react";
import "./Weather.css";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      {" "}
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DisplayDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          {" "}
          <ul>
            <li>Humidity : {props.data.humidity}%</li>
            <li>Wind : {props.data.wind} km/h</li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}
