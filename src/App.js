import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import BottomHeader from "./BottomHeader";
import "./App.css";
import "./Card.css";

export default function App() {
  return (
    <div className="container">
      <Card />
      <BottomHeader />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
