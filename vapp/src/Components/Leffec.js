import React, { useEffect, useLayoutEffect, useState } from 'react'

function Leffec() {
    const[val, setVal]=useState("Daily")
    useEffect(()=>{
        console.log('USEEFFECT');
    })
    useLayoutEffect(()=>{
        console.log('USELAYOUTEFFECT');
    },[val])
  return (
    <div>
     <button onClick={()=>setVal("Tution")}>Effect</button> 
    </div>
  )
}

export default Leffec
