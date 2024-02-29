import React, { useState, useMemo } from 'react';

function Hmemo() {
  const [count, setCount] = useState(0);
  
  const heavyComputation = (num) => {
    console.log('Performing heavy computation...');
    let result = 0;
    for (let i = 0; i < num; i++) {
      result += i;
    }
    return result;
  };

  const memoizedResult = useMemo(() => {
    return heavyComputation(count);
  }, [count]);
  return (
    <div>
      <h1>Memo Example</h1>
      <p>Count: {count}</p>
      <p>Result of heavy computation: {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default Hmemo;
