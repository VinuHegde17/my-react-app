import React, { useState, useEffect } from 'react';

function Heffect() {
  const [count, setCount] = useState(0);
  const[data,setData]=useState("a")
  useEffect(() => {
    console.log('Component has rendered');
  },[data]);

  return (
    <div style={styles.container}>
      <p style={styles.text}>Count: {count}</p>
      <button style={styles.button} onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <button style={styles.button} onClick={()=>setData("b")}>Data</button>
    </div>
  );
}
export default Heffect;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  }
};

