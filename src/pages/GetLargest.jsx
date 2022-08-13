import React from "react";
import { useState } from "react";

function GetLargest() {
  const [first, setFirstInput] = useState("");
  const [second, setSecondInput] = useState("");
  const [third, setThirdInput] = useState("");

  let isWithin = false;
  const checkNumber = () => {
    // Check if letter or null
    // if (isNaN(first) || !first) {
    //   return "Please enter a number.";
    // } else if (
    //   parseInt(first) > parseInt(second) &&
    //   parseInt(first) > parseInt(third)
    // ) {
    //   return first;
    // } else if (
    //   parseInt(second) > parseInt(first) &&
    //   parseInt(second) > parseInt(third)
    // ) {
    //   return second;
    // } else {
    //   return third;
    // }

    return Math.max(first, second, third);
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5 pb-5">
          <input
            type="text"
            className="lead"
            placeholder="Input"
            value={first}
            onChange={(e) => setFirstInput(e.target.value)}
          />
          <input
            type="text"
            className="lead"
            placeholder="Input"
            value={second}
            onChange={(e) => setSecondInput(e.target.value)}
          />
          <input
            type="text"
            className="lead"
            placeholder="Input"
            value={third}
            onChange={(e) => setThirdInput(e.target.value)}
          />
        </div>
        <div>
          <h1 className="text-primary">{checkNumber()}</h1>
          <h3>{isWithin}</h3>
        </div>
      </div>
    </div>
  );
}

export default GetLargest;
