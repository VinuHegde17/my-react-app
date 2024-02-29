import React, { useState } from 'react';

const Htrans = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: 'lightblue',
    transition: 'opacity 0.5s ease',
    opacity: isVisible ? '1' : '0',
    margin: '20px auto',
  };

  const contentStyle = {
    paddingTop: '80px',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button style={buttonStyle} onClick={toggleVisibility}>
        Toggle Visibility
      </button>
      <div style={boxStyle}>
        {isVisible && <p style={contentStyle}>This box transitions in and out</p>}
      </div>
    </div>
  );
};

export default Htrans;
