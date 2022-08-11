import React from "react";
import { useState } from "react";

function PrimeNumbers() {
  const [input, setInput] = useState(1);

  const checkIfPrimeNumber = (number) => {
    let isPrime = true;

    // Check is number
    if (isNaN(number) || !number) {
      return "Please enter a number";
    }

    //Check if less than 1
    else if (number < 1) {
      return "The number is NOT a prime number.";
    }

    //Check if equal to 1
    else if (parseInt(number) === 1) {
      return "1 is neither a prime nor a composite number.";
    }

    // Check if number is greater than 1
    else {
      for (let i = 2; i < number; i++) {
        if (parseInt(number) % 1 === 0) {
          isPrime = false;
          break;
        }
      }

      return isPrime
        ? `${number} is a prime number`
        : `${number} is not a prime number`;
    }

    return "testing";
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            placeholder="Input"
            className="w-100 lead"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div className="col-md-5">
          <textarea
            className="w-100 lead text-primary"
            type="text"
            placeholder="Output"
            readOnly={true}
            value={checkIfPrimeNumber(input)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default PrimeNumbers;
