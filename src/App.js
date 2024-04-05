import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Tabanan" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/melania7730"
            target="_blank"
            rel="noreferrer"
          >
            Melania
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/melania7730/react-weather-app-mel"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open sourced on Github{" "}
          </a>
          and
          <a
            href="https://github.com/melania7730/react-weather-app-mel"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
