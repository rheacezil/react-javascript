import React from "react";
import { useState } from "react";

function CheckWithinRange() {
  const [input, setInput] = useState("");

  let isWithin = false;
  const checkNumber = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return "Please enter a number.";
    } else if (parseInt(input) <= 500 && parseInt(input) >= 100) {
      return String(!isWithin);
    } else {
      return String(isWithin);
    }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5 pb-5">
          <input
            type="text"
            className="w-100 lead"
            placeholder="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
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

export default CheckWithinRange;
