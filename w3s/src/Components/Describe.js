import React, { useState } from 'react';

function Describe() {
  const [textarea, setTextarea] = useState("");

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  const textareaStyle = {
    padding: '25px',
    borderRadius: '5px',
    border: '2px solid #ccc',
    fontSize: '16px',
    width: '275px',
    height: '100px',
    resize: 'vertical',
    outline: 'none', 
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    
  };
  const containerStyle = {
    textAlign: 'center',
  };

  return (
    <form style={{padding:'17px'}}>
      <label><b>Enter the information</b></label>
      <br />
      <textarea
        value={textarea}
        onChange={handleChange}
        placeholder="Describe about yourself..."
        style={textareaStyle}
      />
      <br />
      <div style={containerStyle}>
        <button style={buttonStyle}>Submit</button>
      </div>
    </form>
  );
}

export default Describe;
