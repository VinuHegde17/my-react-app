import React, { useState } from 'react'


function Text() {
    const[text,setText]=useState("Hello")
    function typeChange(e) {
    setText(e.target.value)  
    }
  return (
    <div>
      <input type="text" onChange={typeChange} value={text}/>
      <h4>You have typed {text}</h4>
      <button onClick={()=>setText("Hello")}>Reset</button>
    </div>
  )
}

export default Text
