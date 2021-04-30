import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counterSubContainer">
      <div className="counterSubSubContainer">
        <button
          className="add"
          style={{ display: counter === 10 ? "none" : "inherit" }}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
        <div className="counter">{counter}</div>
        <button
          className="remove"
          style={{ display: counter === 0 ? "none" : "inherit" }}
          onClick={() => {
            counter > 0 ? setCounter(counter - 1) : setCounter(counter);
          }}
        >
          -
        </button>
      </div>
      <button
        className="reset"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
