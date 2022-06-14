import React from "react";
import NowTemperature from "./NowTemperature";
import "./RightBlock.css";

export default function RightBlock() {
  return (
    <div className="col-6" id="right-block">
      <NowTemperature DailyTemp={65} />
    </div>
  );
}
