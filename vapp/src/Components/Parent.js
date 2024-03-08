import React, { useRef } from 'react'
import Child from './Child';

function Parent() {
    const ref=useRef();
  return (
    <div>
      <Child ref={ref}/>
      <button onClick={()=>ref.current.sayHai()}>Click</button>
    </div>
  )
}

export default Parent
