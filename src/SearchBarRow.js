import React from "react";
import SubmitSearchBar from "./SubmitSearchBar";
import SubmitButton from "./SubmitButton";

export default function SearchBarRow() {
  return (
    <div className="row">
      <SubmitSearchBar />
      <SubmitButton />
    </div>
  );
}
