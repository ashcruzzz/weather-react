import React from "react";
import MainInfoBlock from "./MainInfoBlock";
import WeatherForecast from "./WeatherForecast";
import SearchBarRow from "./SearchBarRow";

export default function Card() {
  return (
    <div className="card">
      <form id="search-form">
        <SearchBarRow />
      </form>
      <MainInfoBlock />
      <WeatherForecast />
    </div>
  );
}
