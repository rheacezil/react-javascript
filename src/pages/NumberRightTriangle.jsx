import React from "react";
import { useState } from "react";

function NumberRightTriangle() {
  const [input, setInput] = useState("");

  let first = "";
  const sequence = [];

  const createTriangle = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return <h1 className="text-primary">Please enter a number.</h1>;
    }

    for (var i = 1; i <= input; i++) {
      first = first.concat(" ", i);
      sequence.push(first);
    }

    return sequence.map((data, index) => (
      <h2 className="text-primary" key={index}>
        {data}
      </h2>
    ));
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
        <div className="h2 text-primary">{createTriangle()}</div>
      </div>
    </div>
  );
}

export default NumberRightTriangle;
