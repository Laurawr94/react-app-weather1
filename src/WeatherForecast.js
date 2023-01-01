import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
import { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weatherforecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "08609be667e09eedb6d9f6006bdd29fa";
    let longitude = props.coords.lon;
    let lantitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lantitude}&long=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return "null";
  }
}
