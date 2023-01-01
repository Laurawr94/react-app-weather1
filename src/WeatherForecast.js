import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
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
