import React from "react";
import { useState } from "react";

function Triangle() {
  const [input, setInput] = useState("");

  //   let total = "*";
  //   const sequence = [];

  const createTriangle = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return <h1 className="text-primary">Please enter a number.</h1>;
    }

    let total = "";
    const rightTriangle = [];
    for (let i = 1; i <= input; i++) {
      total = total.concat(" ", i);
      rightTriangle.push(total);
    }

    const fullIsoTriangle = [].concat(
      rightTriangle,
      rightTriangle.slice().reverse().slice(1)
    );

    return fullIsoTriangle.map((data, index) => (
      <h1 className="text-primary" key={index}>
        {data}
      </h1>
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

export default Triangle;
