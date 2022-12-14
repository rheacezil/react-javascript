import React from "react";
import { useState } from "react";

function SumOfNatural() {
  const [input, setInput] = useState("");

  const getSumOfNatural = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return "Please enter a number.";
    }

    let sum = 0;
    for (let i = 1; i <= input; i++) {
      sum = sum + i;
    }

    return sum;
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
          <h1 className="text-primary">{getSumOfNatural()}</h1>
        </div>
      </div>
    </div>
  );
}

export default SumOfNatural;
