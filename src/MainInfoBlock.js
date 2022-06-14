import React from "react";
import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";
export default function MainInfoBlock() {
  return (
    <div className="row" id="main-info-block">
      <LeftBlock />
      <RightBlock />
    </div>
  );
}
