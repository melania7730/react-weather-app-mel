import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Weather App</h1>
        <Weather defaultCity="Tabanan" />
        <footer>
          This project was coded by Melania and is{" "}
          <a href="https://github.com/melania7730/react-weather-app-mel">
            {" "}
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
