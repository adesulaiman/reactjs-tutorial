import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);


  useEffect(() => {
    setTimeout(() => {
        setCalculation(() => count * 2);
    }, 1000);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default Timer