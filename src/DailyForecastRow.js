import React from "react";
import DailyForecastDay from "./DailyForecastDay";

export default function DailyForecastRow() {
  return (
    <div className="row">
      <DailyForecastDay day="Sun" />
      <DailyForecastDay day="Mon" />
      <DailyForecastDay day="Tues" />
      <DailyForecastDay day="Wed" />
      <DailyForecastDay day="Thurs" />
      <DailyForecastDay day="Fri" />
    </div>
  );
}
