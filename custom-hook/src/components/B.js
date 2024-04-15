import React from 'react'
import useOnline from '../utils/useOnline'
import useCount from '../utils/useCount';

function B() {
    useOnline();
    const {count,decrement}=useCount(2)
  return (
    <div>
      Hi I am B {useOnline()?"Online":"Offline"}
      <h2>Count is {count}</h2>
      <button onClick={decrement}>DEC</button>
    </div>
  )
}

export default B
