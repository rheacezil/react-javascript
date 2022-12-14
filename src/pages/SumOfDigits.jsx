import React from "react";
import { useState } from "react";

function SumOfDigits() {
  const [input, setInput] = useState("");

  let total = 0;
  const getSumOfDigits = () => {
    input.split("").map((data) => {
      if (!isNaN(data)) {
        total = total + parseInt(data);
      }
    });

    return total;
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
        <div className="col-12 text-primary">
          <h2>{getSumOfDigits()}</h2>
        </div>
      </div>
    </div>
  );
}

export default SumOfDigits;
