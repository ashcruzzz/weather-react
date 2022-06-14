import React from "react";
import "./LeftBlock.css";

export default function LeftBlock() {
  return (
    <div className="col-6" id="left-block">
      <h1 id="city">Las Vegas</h1>
      <span id="time">
        Last updated on <span id="date">Tuesday 00:00</span>
      </span>
      <p id="description"></p>
      <p>
        Humidity:{" "}
        <span className="rightBlockResults" id="humidity">
          15
        </span>
        <span>%</span>
      </p>

      <p>
        Wind:
        <span className="rightBlockResults" id="wind-speed">
          4
        </span>
        <span> km/h</span>
      </p>
    </div>
  );
}
