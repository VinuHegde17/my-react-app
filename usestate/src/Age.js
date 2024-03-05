import React, { useState } from 'react'

function Age() {
    const[age,setAge]=useState(40);
    function inc1() {
     setAge(prevAge=>prevAge+1)   
    }
    function inc3() {
        setAge(prevAge=>prevAge+3)   
       }
  return (
    <div>
      <h4>Age is {age}</h4>
      <button onClick={inc1}>Add 1yr</button>

      <button onClick={inc3}>Add 3yrs</button>
    </div>
  )
}

export default Age
