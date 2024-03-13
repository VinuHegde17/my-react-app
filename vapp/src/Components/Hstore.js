import React, { useSyncExternalStore } from 'react'

function Hstore() {
    const width=useSyncExternalStore((listener)=>{
        window.addEventListener("resize",listener);
        return()=>{
        window.removeEventListener('resize',listener)
        }
    },()=>{
        return window.innerWidth
    },)
  return (
    <div>
      <h4>Width is {width}</h4>
    </div>
  )
}

export default Hstore
