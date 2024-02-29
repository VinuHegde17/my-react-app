import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const initialState = { count: 0 };

function Hreducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={styles.container}>
      <p style={styles.count}>Count: {state.count}</p>
      <button style={styles.button} onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button style={styles.button} onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button style={styles.button} onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default Hreducer;
const styles = {
    container: {
      textAlign: 'center',
      margin: '20px',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: '#fff',
      margin: '0 5px',
      cursor: 'pointer',
    },
    count: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
  };