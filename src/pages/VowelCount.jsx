import React from "react";
import { useState } from "react";

function VowelCount() {
  const [input, setInput] = useState("");

  const getSumOfVowels = () => {
    let total = 0;
    // input.split("").forEach((character) => {
    //   if (
    //     character.toLowerCase() === "a" ||
    //     character.toLowerCase() === "e" ||
    //     character.toLowerCase() === "i" ||
    //     character.toLowerCase() === "o" ||
    //     character.toLowerCase() === "u"
    //   ) {
    //     total = total + 1;
    //   }
    // });

    input.split("").forEach((character) => {
      if (character.toLowerCase().match(/[aeiou]/)) {
        total = total + 1;
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
          <h2>{getSumOfVowels()}</h2>
        </div>
      </div>
    </div>
  );
}

export default VowelCount;
