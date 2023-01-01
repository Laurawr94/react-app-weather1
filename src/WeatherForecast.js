import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "08609be667e09eedb6d9f6006bdd29fa";
  let longitude = props.coords.lon;
  let lantitude = props.coords.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lantitude}&long=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherforecast">
      <div className="row">
        <div className="col">
          <div className="weatherForcast-day"> MON </div>
          <WeatherIcon code="01d" size={32} />
          <div className="weatherForcast-temperatures">
            <span className="weatherForcast-temperature-max">19</span>
            <span className="weatherForcast-temperature-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
