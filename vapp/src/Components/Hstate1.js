import React from "react";
import { useState } from "react";

function Hstate() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  function iClick() {
    setCount(count + 1);
  }
  function dClick() {
    setCount1(count1 - 1);
  }
  function rClick(){
    setCount(0)
    setCount1(0)
  }
  return (
    <div>
      <button onClick={iClick}>Incremented times </button>
      <button onClick={dClick}>Decremented times </button>
      <button onClick={rClick}>Reset</button>
      <h1>Total Count: {count + count1}</h1>
    </div>
  );
}

export default Hstate;
