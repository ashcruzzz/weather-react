import React from "react";
import DailyWeatherInfo from "./DailyWeatherInfo";

export default function DailyForecastDay(props) {
  return (
    <div className="col-2" id="daily-forecast">
      <p id="day-name">{props.day}</p>
      <DailyWeatherInfo minTemp={76} maxTemp={89} />
    </div>
  );
}
