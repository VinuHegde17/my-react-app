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

  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'blue',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Memo Example</h1>
      <p>Count: {count}</p>
      <p>Result of heavy computation: {memoizedResult}</p>
      <button style={styles.button} onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default Hmemo;
