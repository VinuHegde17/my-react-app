import React, { useState } from 'react';

function Age() {
  const [name, setName] = useState("");

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '2px solid #ccc',
    fontSize: '16px',
    width: '300px',
    outline: 'none', 
  };

  return (
    <form style={{padding:'20px'}}>
      <label>
        <b>Enter your age</b>
        <input
          type="number"
          value={name}
          placeholder="Enter your age"
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
      </label>
    </form>
  );
}

export default Age;
