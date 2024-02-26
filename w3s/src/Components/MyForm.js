import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "2px solid #ccc",
    fontSize: "16px",
    width: "300px",
    marginBottom: "10px",
    outline: "none",
  };

  return (
      <form style={{padding:'20px'}}>
        <label><b>Enter your name:</b></label>
      <br />
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />
    </form>
  );
}

export default MyForm;