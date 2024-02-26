import React, { useState } from "react";

function Select() {
  const [myCar, setMyCar] = useState("Select the State");

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  const selectStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "2px solid #ccc",
    fontSize: "16px",
    width: "325px",
    marginBottom: "10px",
    outline: "none",
  };

  return (
    <form style={{padding:'20px'}}>
      <label><b>Select your state:</b></label>
      <br />
      <select
        value={myCar}
        onChange={handleChange}
        style={selectStyle}
      >
        <option value="Select the State" disabled>Select the State</option>
        <option value="Ford">Karnataka</option>
        <option value="Volvo">Kerala</option>
        <option value="Fiat">Tamilnadu</option>
        <option value="Ford">Andrapradesh</option>
        <option value="Volvo">Telangana</option>
      </select>
    </form>
  );
}

export default Select;
