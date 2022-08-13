import React from "react";
import { useState } from "react";

function Strings() {
  const [input, setInput] = useState("");
  const getReverseString = () => {
    return input
      .split("")
      .reverse("")
      .join("")
      .split(" ")
      .reverse("")
      .join(" ");
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <h2>{getReverseString()}</h2>
        </div>
      </div>
    </div>
  );
}

export default Strings;
