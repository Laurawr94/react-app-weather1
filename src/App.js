import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/Laurawr94/react-app-weather1"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on Github
          </a>
          , by{" "}
          <a
            href="https://www.linkedin.com/in/laura-doherty-6548a766/"
            target="_blank"
            rel="noreferrer"
          >
            Laura Doherty
          </a>
          and hosted by{" "}
          <a
            href="https://zingy-buttercream-4ec62e.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
