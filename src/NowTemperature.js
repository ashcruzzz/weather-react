import React from "react";
import "./NowTemperature.css";

export default function NowTemperature(props) {
  return (
    <div id="now-temperature" className="weather-temperature">
      <i className="fa-solid fa-cloud icon"></i>
      <span className="temperature" id="temperature">
        {props.DailyTemp}
      </span>
      <span className="units">
        <span id="fahrenheit-link">F°</span>
      </span>
    </div>
  );
}
