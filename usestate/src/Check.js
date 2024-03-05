import React, { useState } from 'react'

function Check() {
    const [val,setval]=useState(true)
    function changeVal(e) {
        setval(e.target.checked)
    }
  return (
    <div>
        <label>
      <input type="checkbox" checked={val} onChange={changeVal} />
      I liked this
      </label>
      <p>You {val?'liked':'not liked'}</p>
    </div>
  )
}

export default Check
