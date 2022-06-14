import React from "react";

export default function SubmitSearchBar() {
  return (
    <div className="col-10">
      <input
        type="search"
        className="form-control"
        placeholder="Type your city here..."
        aria-label="City temperature search"
        aria-describedby="basic-addon2"
        id="city-input"
      ></input>
    </div>
  );
}
