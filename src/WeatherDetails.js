import React from "react";
import "./Weather.css";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails mt-5 mb-5">
      <h1 className="mb-2">{props.data.city}</h1>
      <div className="row mt-3">
        <div className="col-6">
          {" "}
          <ul>
            <li>
              <DisplayDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Humidity : <strong> {props.data.humidity}% </strong>
            </li>
            <li>
              Wind :<strong> {props.data.wind} km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <WeatherIcon code={props.data.icon} size={80} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
