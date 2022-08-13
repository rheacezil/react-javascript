import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container p-5">
      <ol class="list-group">
        <li class="list-group-item">Click the title to navigate to the page</li>

        <li class="list-group-item list-group-item-primary">
          <Link to="/fibonacci">Fibonacci</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/strings">Strings</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/prime-numbers">Prime Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-light">
          <Link to="/multiplication-table">Multiplication Table</Link>
        </li>
        <li class="list-group-item list-group-item-dark">
          <Link to="/sum-of-natural-numbers">Sum Of Natural Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/sum-of-Digits">Sum Of Digits in a String</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/check-within-range">Check Within 100 - 500</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/right-trianle">Right Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-light">
          <Link to="/isosceles-trianle">Isosceles Triangle</Link>
        </li>

        <li class="list-group-item list-group-item-dark">
          <Link to="/number-right-trianle">Number Right Triangle</Link>
        </li>

        <li class="list-group-item list-group-item-primary">
          <Link to="/get-largest">Get The Largest Number</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/vowel-count">Get The Number of Vowels</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/triangle">Triangle</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
