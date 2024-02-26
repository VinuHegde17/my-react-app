import React, { useState } from 'react'

export default function Phone() {
  const [name, setName] = useState("");

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '2px solid #ccc',
    fontSize: '16px',
    width: '300px',
    marginBottom: '10px',
    outline: 'none', 
  };

  return (
    <form style={{padding:'20px'}}>
      <label>
        ,<b>Enter your phone number:</b>
        <br />
        <input 
          type="number"
          value={name}
          placeholder='Enter your phone no.'
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
      </label>
    </form>
  )
}
