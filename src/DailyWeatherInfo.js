import React from "react";

export default function DailyWeatherInfo() {
  return (
    <div className="card" id="future-forecast">
      <span id="weather-forecast-temperature-max">82°</span>
      <span id="weather-forecast-temperature-min">59°</span>
      <i className="fa-solid fa-cloud"></i>
    </div>
  );
}
