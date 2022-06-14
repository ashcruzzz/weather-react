import React from "react";
import DailyForecastRow from "./DailyForecastRow";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div id="weather-forecast">
      <DailyForecastRow />
    </div>
  );
}
