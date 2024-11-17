import React, { useState } from "react";
import "./Class.css"; // Import the CSS file

const Functionals = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Functional Counter</h1>
      <p className="counter-value">Count: {count}</p>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Functionals;
